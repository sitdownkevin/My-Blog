# `web3js` 学习

:::tip 

[中文文档](https://learnblockchain.cn/docs/web3.js/web3-eth.html)

:::

## 引入`web3js`

```js
const { Web3 } = require('web3')

var web3 = new Web3(
	new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
)
```

> 这里使用的RPC地址是`"HTTP://127.0.0.1:7545"`，是[Ganache]()的默认地址。

## `web3.eth`

```js
var eth = web3.eth
```

### `getAccounts`

返回节点所控制的账户列表。

```js
eth.getAccounts()
	.then(console.log)
```

### `getBlockNumber`

返回当前区块号。

```js
eth.getBlockNumber()
	.then(console.log)
```

### `getBalance`

返回地址在指定区块的余额。

```js
const address = '0x022344806d93a80A347a0CA9C7b13a4F63aee128'

eth.getBalance(address)
	.then(console.log)
```

### `getBlock`

返回与区块号或区块哈希匹配的**区块**。

```js
const blockHashOrBlockNumber = 0

eth.getBlock(blockHashOrBlockNumber)
	.then(console.log)
```

### `getTransaction`

返回匹配给定交易哈希的**交易对象**。

```js
eth.getTransaction(transactionHash)
	.then(console.log)
```

