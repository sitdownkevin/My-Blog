# `web3js` 学习

:::tip 

[中文文档](https://learnblockchain.cn/docs/web3.js/web3-eth.html) | [英文文档](https://docs.web3js.org/)

:::

## 引入`web3js`

```js
const { Web3 } = require('web3')

var web3 = new Web3(
	new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
)
```

> 这里使用的地址是`"HTTP://127.0.0.1:7545"`，是[Ganache](https://trufflesuite.com/ganache/)的默认地址。

## `web3.eth `

:::details 随便敲了几下

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
:::

## 部署智能合约

> 一个节点（providers）控制的账号是有限的

:::details 代码


:::code-group
```Solidity [contract.sol]
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Starter {
    uint256 number;

    constructor() {
        number = 0;
    }

    function setNumber(uint256 _number) public {
        number = _number;
    }

    function getNumber() public view returns(uint256) {
        return number;
    }
}
```


```Typescript [deploy_contract.ts] {15-40}
import { Web3 } from 'web3';

const web3: Web3 = new Web3(
	new Web3.providers.HttpProvider('http://127.0.0.1:7545')
);

const abi = [{ "inputs": [{ "internalType": "uint256", "name": "_number", "type": "uint256" }], "name": "setNumber", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "getNumber", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];
const bytecode = '608060405234801561001057600080fd5b5060008081905550610150806100276000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633fb5c1cb1461003b578063f2c9ecd814610057575b600080fd5b610055600480360381019061005091906100c3565b610075565b005b61005f61007f565b60405161006c91906100ff565b60405180910390f35b8060008190555050565b60008054905090565b600080fd5b6000819050919050565b6100a08161008d565b81146100ab57600080fd5b50565b6000813590506100bd81610097565b92915050565b6000602082840312156100d9576100d8610088565b5b60006100e7848285016100ae565b91505092915050565b6100f98161008d565b82525050565b600060208201905061011460008301846100f0565b9291505056fea264697066735822122010a07a685f1ed8a7a03ab9cad25fcd4a46adb1ea32b8097df2d39d556d0a36ea64736f6c63430008120033';
const MyContract = new web3.eth.Contract(abi);


async function deploy() {
	const providerAccounts = await web3.eth.getAccounts();
	const defaultAccount = providerAccounts[0]
	// console.log(providerAccounts);

	const myContract = MyContract.deploy({
		data: '0x' + bytecode
	});

	const gas = await myContract.estimateGas({
		from: defaultAccount
	});
	console.log(gas);

	try {
		const tx = await myContract.send({
			from: defaultAccount,
			gas: gas.toString(),
			gasPrice: '20000000000'
		});
		console.log(tx.options.address);
	} catch (err) {
		console.log(err);
	}

}

deploy();
```


::: 

