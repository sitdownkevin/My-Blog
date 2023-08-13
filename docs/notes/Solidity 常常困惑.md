# Solidity 常常困惑

> 仅记录学习Solidity当中感到困惑的问题

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

