# JS 和 TS

## 1. 困扰许久的`commmonJS`和`module`

### `CommonJS`

导出

```javascript
// file01.js
module.exports = {
    name: 'file01.js',
    age: 18
}
```

导入

```javascript
// file02.js
const person = require('./file01.js')
```

### `module`

导出

```javascript
// file01.js
export default {
    name: 'file01.js',
    age: 18
}
```

导入

```javascript
// file02.js
import person from './file01.js'
```

