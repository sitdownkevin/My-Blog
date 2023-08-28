# C Makefile

::: tip 参考文献
https://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/
:::

## 准备三个文件
::: code-group
```c [hellomake.c]
#include <hellomake.h>

int main() {
    myPrintHelloMake();
    
    return(0);
}
```

```c [hellofunc.c]
#include <stdio.h>
#include <hellomake.h>

void myPrintHelloMake(void) {
    printf("Hello makefiles!\n");
    
    return;
}
```


```c [hellomake.h]
void myPrintHelloMake(void);
```
:::

## 正常编译

```makefile
gcc -o hellomake hellomake.c hellofunc.c -I.
```

## 使用`Makefile`

### `Makefile 1`

```makefile
hellomake: hellomake.c hellofunc.c
	gcc -o hellomake hellomake.c hellofunc.c -I.
```

### `Makefile 2`

```makefile
CC=gcc
CFLAGS=-I.

hellomake: hellomake.o hellofunc.o
	$(CC) -o hellomake hellomake.o hellofunc.o
```

> `.o` is the object files

### `Makefile 3`

```makefile
CC=gcc
CFLAGS=-I.
DEPS = hellomake.h

%.o: %.c $(DEPS)
	$(CC) -c -o $@ $< $(CFLAGS)

hellomake: hellomake.o hellofunc.o
	$(CC) -o hellomake hellomake.o hellofunc.o
```

> `$@`
>
> `$<`

### `Makefile 4`

> To simplify

```makefile
CC=gcc
CFLAGS=-I.
DEPS = hellomake.h
OBJ = hellomake.o hellofunc.o

%.o: %.c $(DEPS)
	$(CC) -c -o $@ $< $(CFLAGS)

hellomake: $(OBJ)
	$(CC) -o $@ $^ $(CFLAGS)
```

### `Makefile 5`

```makefile
IDIR =../include
CC=gcc
CFLAGS=-I$(IDIR)

ODIR=obj
LDIR =../lib

LIBS=-lm

_DEPS = hellomake.h
DEPS = $(patsubst %,$(IDIR)/%,$(_DEPS))

_OBJ = hellomake.o hellofunc.o 
OBJ = $(patsubst %,$(ODIR)/%,$(_OBJ))


$(ODIR)/%.o: %.c $(DEPS)
	$(CC) -c -o $@ $< $(CFLAGS)

hellomake: $(OBJ)
	$(CC) -o $@ $^ $(CFLAGS) $(LIBS)

.PHONY: clean

clean:
	rm -f $(ODIR)/*.o *~ core $(INCDIR)/*~ 
```

