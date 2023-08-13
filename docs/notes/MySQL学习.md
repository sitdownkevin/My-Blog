### 7. 表操作

#### 创建表的语法

```mysql
create table <表名> (
	<字段名1> <字段类型>[(宽度)] [约束条件],
	<字段名2> <字段类型>[(宽度)] [约束条件],
	<字段名3> <字段类型>[(宽度)] [约束条件],
	<字段名4> <字段类型>[(宽度)] [约束条件1 约束条件2]
)engine=innodb charset=utf8;
```



#### 修改表的语法

```mysql
-- 修改存储引擎
alter table <表名> engine=<存储引擎名字>;

-- 修改表名
alter table <表名> rename <新表名>;

-- 增加字段
alter table <表名> add <字段名> <新字段类型> [(宽度)] [约束条件] [first | after <字段名>];

-- 删除字段
alter table drop <字段名>

-- 修改字段
alter table <表名> <字段名> <新字段类型> [(宽度)] [约束条件];
```



#### 删除和复制表语法

```mysql
-- 删除表
drop table <表名>;

-- 复制表
create table <新表名> select <字段名> from <旧表名>;
create table <新表名> like <旧表名>
```



### 8. 数据类型

- 数值

- 字符

  > enum: 单选

  ```mysql
  
  ```

- 时间日期

- 枚举

  > enum: 单选

  ```mysql
  create table t10(
  	id int,
      name varchar(16),
      gender enum('male', 'female', 'other')
  );
  ```

- 集合

  > set: 多选

  ```mysql
  create table t11(
  	id int,
  	name varchat(16),
  	hobby set('tea', 'cola', 'beer')
  );
  ```



### 9. 数据约束

```mysql
-- 约束条件，注意顺序
[unsigned] [zerofill] [not null] [default <value>]
-- unsigned
-- zerofill
-- not null
-- default <value>

-- unique
create table user(id int, name varchar(16) unique);

create table user(
	id int,
    name varchar(16),
    unique(id),
    unique(name)
);

-- 联合唯一
create table app(
	id int,
    host varchar(15),
    port int,
    unique(host, port),
    unique(id)
);

-- primary key: 主键（不为空，且唯一）

-- auto_increment: 自动递增
create table t1(
	id int primary key auto_increment,
    name varchar(16)
);

-- foreign key

```