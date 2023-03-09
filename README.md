# command-params
获取命令行参数
## 快速使用
```shell
npm i command-params -D
```
```js
const getCommandParams = require('command-params')

// node test.js --a a
console.log(getCommandParams()) // { a: 'a' }
```
