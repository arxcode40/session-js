'use strict'

const session = {
	all: function() {
		return this._retrieve()
	},
	decrement: function(key, decrementBy = 1) {
		if (isNaN(key)) {
			return false
		}

		this.put(key, this.get(key, 0) - decrementBy)
		return true
	},
	except: function(keys) {
		return this._retrieve(keys, 'except')
	},
	exists: function(key) {
		return this.all().hasOwnProperty(key)
	},
	flush: function() {
		sessionStorage.clear()
		return true
	},
	forget: function(keys) {
		if (Array.isArray(keys)) {
			keys.forEach(key => sessionStorage.removeItem(key))
			return true
		}

		sessionStorage.removeItem(keys)
		return true
	},
	get: function(key, defaultValue = null) {
		return JSON.parse(sessionStorage.getItem(key)) || defaultValue
	},
	has: function(key) {
		return this.get(key) !== null
	},
	increment: function(key, incrementBy = 1) {
		if (isNaN(key)) {
			return false
		}

		this.put(key, this.get(key, 0) + incrementBy)
		return true
	},
	missing: function(key) {
		return !this.has(key)
	},
	only: function(keys) {
		return this._retrieve(keys, 'only')
	},
	pull: function(key, defaultValue = null) {
		const data = this.get(key, defaultValue)
		this.forget(key)
		return data
	},
	push: function(key, value) {
		const data = this.get(key)
		
		if (Array.isArray(data)) {
			data.push(value)
			this.put(key, data)
			return true
		}

		return false
	},
	put: function(key, value) {
		sessionStorage.setItem(key, JSON.stringify(value))
		return true
	},
	_retrieve(keys = null, include = null) {
        let data = {}

        for (let i = 0; i < sessionStorage.length; i++) {
			const key = sessionStorage.key(i)
			
			switch (include) {
				case 'only':
					if (keys.includes(key)) {
						data[key] = this.get(key)
					}
					break
				case 'except':
					if (!keys.includes(key)) {
						data[key] = this.get(key)
					}
					break
				default:
					data[key] = this.get(key)
					break
			}
		}

        return data
    }
}

export default session