# Session Storage JS

## Introduction
Session storage management library inspired by Laravel Session

## Installation
- Download: [session.min.js](https://raw.github.com/arxcode40/session-js/main/dist/session.min.js) | [session.slim.min.js](https://raw.github.com/arxcode40/session-js/main/dist/session.slim.min.js)
- Include into your project
    ```html
    <script src="session.min.js"></script>
    ```
- Or use slim version for simple usage
    ```html
    <script src="session.slim.min.js"></script>
    ```

## Interacting With the Session

### Retrieving Data

```javascript
value = session.get('key')
value = session.get('key', 'default')

// If using slim version
value = session('key') || 'default'
```

#### Retrieving All Session Data
```javascript
data = session.all()

// If using slim version
data = session()
```

#### Retrieving a Portion of the Session Data
```javascript
data = session.only(['username', 'email'])

data = session.except(['username', 'email'])
```

#### Determining if an Item Exists in the Session
```javascript
if (session.has('users')) {
    // ...
}

if (session.exists('users')) {
    // ...
}

if (session.missing('users')) {
    // ...
}

// If using slim version
if (!session('users', undefined)) {
    // Check if 'users' is exists
}

if (session('users', undefined)) {
    // Check if 'users' is missing
}
```

### Storing Data

```javascript
session.put('key', 'value')

// If using slim version
session('key', 'value')
```

#### Pushing to Array Session Values

```javascript
session.push('user', {teams: 'developer'})
```

#### Retrieving and Deleting an Item

```javascript
session.pull('key', 'default')
```

#### Incrementing and Decrementing Session Values

```javascript
session.increment('count')

session.increment('count', 2)

session.decrement('count')

session.decrement('count', 2)
```

### Deleting Data

```javascript
// Forget a single key...
session.forget('name')

// Forget multiple keys...
session.forget(['name', 'status'])

// If using slim version
// Forget a single key...
session('name', null)

// Forget multiple keys...
session(['name', 'status'], null)

session.flush()

// If using slim version
session(null)
```