# Java学习

## 数据类型

### 常见数据类型

```java
// byte
// short
// int
// long
// long l1 = 10000l;

// float
// float f1 = 35e3f;

// double
// boolean
// char
```

### 数据类型转换

```java
double myDouble = 9.78d;
int myInt2 = (int) myDouble;
```

### 字符串`String`

字符串是一个Class，有很多种方法。

```java
String txt = "Hello World";

// txt.length()
// txt.toUpperCase()
// txt.toLowerCase()
// txt.indexOf("World")
```

### 布尔类型`Boolean`

```java
boolean isJavaFun = true;
```

### 数组

```java
String[] cars = {"Volvo", "BWM"};

cars[0] = "Opel";

// 属性和方法
cars.length
```

```java
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7, 8} };

int x = myNumbers[1][2]; // x = 7

// 遍历二维数组
for (int i=0; i<myNumbers.length; i++) {
    for (int j=0; j<myNumbers[i].length; j++) {
        int tmp = myNumbers[i][j];
    }
}
```



## 运算符

```java
// + | -
// * | / | %
// ++ | --
```

```java
// &&
// ||
// !
```

### `Math`库

```java
// Math.max(4, 10)
// Math.min(4, 10)
// Math.sqrt(64)
// Math.abs(64)
```

## 条件语句

### `if-else`语句

```java
/* 
if () {

} if else {

}
*/
```

### `switch`语句

```java
/*
switch(<num>) {
	case 1:
		break;
	case 2:
		break;
	default:
		break;
}
*/
```

### `while`语句

```java
// 第一种写法
/*
while (<condition>) {
	
	<condition change>
}
*/

// 第二种写法
/*
do {

	<condition change>
} while (<condition>);
*/
```

### `for`语句

```java
// 第一种写法
/*
for (int i=0; i<5; i++)
	<...>
*/

// 第二种写法
/*
String[] cars = {"Volvo", "BMW", "Ford"};
for (String i: cars) {
	<...>
}
*/
```

配合`continue`和`break`

## 函数

```java
static void myMethods(String name, int age) {
	<...>
}

public static void main(String[] args) {
    myMethods("Ke", 5);
    myMethods("Xu", 5);
}
```

### 函数的重载

这就是函数的重载...有点无语

```java
static int plusMethod(int x, int y) {
	return x + y;
}

static double plusMethod(double x, double y) {
    return x - y;
}

int myNum1 = plusMethod(8, 5);
double myNum2 = plusMethod(4.3, 6.26);
```

### 函数的递归







