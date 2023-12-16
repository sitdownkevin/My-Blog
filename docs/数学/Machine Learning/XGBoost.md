---
title: eXtreme Gradient Boosting (XGBoost)
---
# {{ $frontmatter.title }}

:::info Reference

1. <https://zhuanlan.zhihu.com/p/162001079>

2.  [Github | ML-NLP/Machine Learning/3.2 GBDT](https://github.com/NLP-LOVE/ML-NLP/blob/master/Machine%20Learning/3.2%20GBDT/3.2%20GBDT.md "Github | ML-NLP/Machine Learning/3.2 GBDT")

3.  [Zhihu | 机器学习-一文理解GBDT的原理-20171001](https://zhuanlan.zhihu.com/p/29765582 "Zhihu | 机器学习-一文理解GBDT的原理-20171001")

:::


## 目标函数

每一轮的目标函数：

$$
Obj^{(t)}=\sum_{i=1}^n l(y_i,\hat y_i^{(t-1)}+f_t(x_i))+\Omega(f_t)+C
$$

-   $l(y_i,\hat y_i^{(t-1)}+f_t(x_i))=\frac12(y_i-(\hat y_i^{(t-1)}+f_t(x_i)))^2$
    > 均方误差
-   $\Omega(f_t)=\gamma T+\frac12\lambda\sum_{j=1}^T w^2_j$
    > 正则化项，表示树的复杂度。值越小，复杂度越低，泛化能力越强。
    > $T$：叶子节点的个数
    > $w_j$：叶子节点的得分

最终的目标函数：

$$
L(\phi)=\sum_i l(y_i,y_i')+\sum_k\Omega(f_t)
$$
