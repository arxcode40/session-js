'use strict'

function session(...params) {
	if (params.length === 0) {
		let data = {}

        for (let i = 0; i < sessionStorage.length; i++) {
			const key = sessionStorage.key(i)
			data[key] = JSON.parse(sessionStorage.getItem(key))
		}

        return data
	}

	if (params.length === 1) {
		if (params[0] === null) {
			sessionStorage.clear()
			return true
		}

		return JSON.parse(sessionStorage.getItem(params[0]))
	}

	if (params.length === 2) {
		if (params[1] === null) {
			if (Array.isArray(params[0])) {
				params[0].forEach(key => sessionStorage.removeItem(key))
				return true
			}

			sessionStorage.removeItem(params[0])
			return true
		}

		if (params[1] === undefined) {
			return JSON.parse(sessionStorage.getItem(params[0])) === null
		}

		sessionStorage.setItem(params[0], JSON.stringify(params[1]))
		return true
	}

	return false
}

export default session