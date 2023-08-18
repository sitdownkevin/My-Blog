# NVIDIA

$$
\mathrm{Score}=\alpha(\mathcal{H}(x_i^{\mathcal{U}}))-\frac1\alpha(\mathcal{MI}(x_i^{\mathcal{U}},\mathcal{T}))
$$

>  $\alpha$？$\alpha=1$ -> $\alpha=7$

- $\mathcal{H(x_i^{\mathcal{U}})}$

$$
\mathcal{H}(x_i^{\mathcal{U}})=-\sum_{q=0}^Q\sum_{c=0}^c p(y_i=c\mid x_i^{\mathcal{U}})\log(p(y_i=c\mid x_i^{\mathcal{U}}))
$$



- $\mathcal{MI}(x_i^{\mathcal{U}},\mathcal{T})$

$$
\mathcal{MI}=\sum_{x_i^{\mathcal{T}}} P(x_i^{\mathcal{U}},x_i^{\mathcal{T}})\log(\frac{P(x_i^{\mathcal{T}},x_j^{\mathcal{U}})}{P(x_i^{\mathcal{T}})P(x_j^{\mathcal{U}})})
$$

# Coach

## Old

$$
\mathrm{Score_1}=\mathcal{H}(x_i^{\mathcal{U}})+\lambda(x_i^{\mathcal{U}})
$$

$$
\mathrm{Score_2}=\mathcal{MI(x_i^{\mathcal{U}},\mathcal{T})}
$$

$$
\mathrm{Score_3}=\mathcal{MI}(x_i^{\mathcal{U}},\mathcal{U})
$$

## New

$$
\mathrm{Score_1}=\mathcal{H}(x_i^{\mathcal{U}})\cdot(1+\lambda(x_i^{\mathcal{U}}))
$$

$$
\mathrm{Score_2}=\frac{\mathcal{MI(x_i^{\mathcal{U}},\mathcal{U})}}{\mathcal{MI(x_i^{\mathcal{U}},\mathcal{T})}}
$$

$$
\mathrm{Score_2}=\alpha\cdot\mathcal{MI(x_i^{\mathcal{U}},\mathcal{U})}-\frac1\alpha\cdot\mathcal{MI(x_i^{\mathcal{U}},\mathcal{T})}
$$

