---
title: Logistic Regression Analysis
---
# {{ $frontmatter.title }}

:::info Reference

1. <https://zhuanlan.zhihu.com/p/44591359>

2. <https://www.sciencedirect.com/topics/medicine-and-dentistry/logistic-regression-analysis>

:::

***

**Linear Regression**

$$
f(x)=w^Tx
$$

**Sigmoid Function**

$$
\sigma(x)=\frac1{1+e^{-x}}
$$

**Logistic Regression**

$$
y=\sigma(f(x))=\frac1{1+e^{-w^Tx}}
$$

***

*Detail*

$$
\begin{aligned}
&P(y=1\mid w,x)=\frac1{1+e^{-w^Tx}}=p\\
&P(y=0\mid w,x)=1-\frac1{1+e^{-w^Tx}}=1-p
\end{aligned}
$$

$$
P(y_i\mid x_i)=p^{y_i}(1-p)^{1-y_i}
$$

Event $\{(x_1,y_1),(x_2,y_2),\dots,(x_n,y_n)\}$

$$
\begin{aligned}
P_{total}&=\prod_{i=1}^n P(y_i\mid x_i)\\
&=\prod_{i=1}^n p^{y_i}(1-p)^{1-y_i}\\
\end{aligned}
$$

$$
\begin{aligned}
F(w)&=\ln P_{total}\\
&=\sum_{i=1}^n y_i\ln p+(1-y_i)\ln (1-p)
\end{aligned}
$$

**Problem**: Find $w^*$

$$
w^*=\arg\max_{w}F(w)=-\arg\max_{w}F(w)
$$

***

**Solvation**

$$
\begin{aligned}
\nabla F(w)&=\nabla(\sum_{i=1}^n(y_i\ln p+(1-y_i)\ln (1-p)))\\
&=\sum_{i=1}^n(y_i\ln' p+(1-y_i)\ln'(1-p))\\
&=\sum_{i=1}^n((y_i\frac1p p')+(1-y_i)\frac1{1-p}(1-p)')\\
&=\sum_{i=1}^n(y_i(1-p)x_i-(1-y_i)px_i)\\
&=\sum_{i=1}^n(y_i-p)x_i\\
&=\sum_{i=1}^n(y_i-\frac1{1+e^{-w^Tx_i}})x_i
\end{aligned}
$$
