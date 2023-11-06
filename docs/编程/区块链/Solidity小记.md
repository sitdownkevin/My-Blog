---
title: Solidity 小记
layout: doc
---

# {{ $frontmatter.title }}

:::info
仅记录学习Solidity当中感到困惑的问题
::: 

## `node.js`的运行

安装并使用`solc`

```shell
yarn global add solc
```

使用`solc`编译`.sol`文件

```shell
solcjs --abi --bin ./<ContractName>.sol -o build
# solcjs --abi --bin ./contract/Hello.sol -o build
```

:::detail

`code runner`中的设置

```json
{
	"solidity": "solcjs --abi --bin $fileName -o build"
}
```

:::

## 函数修饰符

- `view`
- `pure`
- `constant`

## 访问修饰符

- `private`

- `public`
- `internal`
- `external`

|            | 合约内部调用 | 合约外部调用   |
| ---------- | ------------ | -------------- |
| `public`   | Yes          | Yes            |
| `private`  | Yes          | No             |
| `internal` | Yes          | No (Inherence) |
| `external` | No           | Yes            |

