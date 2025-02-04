# sessionStorage JS

## Introduction
sessionStorage library inspired by Laravel Session

## Installation
- Download: [session.min.js](https://raw.github.com/arxcode40/session-js/main/dist/session.min.js) | [session.esm.min.js](https://raw.github.com/arxcode40/session-js/main/dist/session.esm.min.js)
- Include into your project
    ```html
    <script src="dist/session.min.js"></script>
    ```
- Or use ES6 module
    ```javascript
    import session from './dist/session.esm.min.js'
    ```

## Interacting With the Session

### Retrieving Data

```javascript
value = session.get('key')
value = session.get('key', 'default')
```

#### Retrieving All Session Data
```javascript
data = session.all()
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
```

### Storing Data

```javascript
session.put('key', 'value')
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
 
session.flush()
```