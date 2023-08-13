---
title: Notes of Topology
---
# {{ $frontmatter.title }}

# Lesson 1: Topological Spaces

## Topological Spaces

### Definition of topological spaces

A topological space is a pair $(X,\mathcal{T} )$ where $X$ is a set and $\mathcal{T}$ is a collection of subsets of $X$ such that: 

- $\emptyset\in\mathcal{T}$ and $X\in\mathcal{T}$,
- for every infinite collection $\{O_{\alpha}\}_{\alpha\in A}\subset\mathcal{T}$, we have $\bigcup\limits_{\alpha\in A}O_{\alpha}\in \mathcal{T}$,
- for every finite collection $\{O_{i}\}_{1\le i\le n}\subset \mathcal{T}$, we have $\bigcap\limits_{1\le i\le n}O_i\in \mathcal{T}$.

The set $\mathcal{T}$ is called a topology on $X$. The elements of $\mathcal{T}$ are called the open sets.
<!--more-->   
### Definition via closed sets

Let $(X,\mathcal{T} )$ be a topological space. For every open set $O\in \mathcal{T}$, its complement $^{c}O=\{x\in X,x\notin O\}$ is called a closed set.

In other words, a set $A\subset X$  is closed iff $^cA$ is open.

## Topology of $R^n$

### Open balls of $R^n$

Let $x\in R^n$ and $r\gt0$. The open ball of center $x$ and radius $r$, denoted $\mathcal{B}(x,r)$, is defined as:

$$
\mathcal{B}(x,r)=\{y\in R^n,\|x-y\|\lt r\}
$$

### Euclidean topology

Let $A\subset R^n$ be a subset. Let $x\in A$.

We say that $A$ is open around $x$ if there exists $\epsilon\gt0$ such that $\mathcal{B}(x, \epsilon)\subset A$.

We say that $A$ is open if for every $x\in A$, $A$ is open around $x$.

We denote the set of such open set by $\mathcal{T}_{R ^n}$, the Euclidean topology on $R^n$.

## Topology of Subsets of $R^n$

### Subspace topology

Let $(X,\mathcal{T} )$ be a topological space, and $Y\subset X$ a subset. We define the **subspace topology** on $Y$ as the following set:

$$
\mathcal{T}_{|Y}=\{O\cap Y, O\in\mathcal{T}\}
$$

## Continuous Maps

### Continuous maps

$(X,\mathcal{T} )$ $(Y,\mathcal{U} )$

Let $f:X\to Y$ be a map. We say that $f$ is continuous if for every $O\in\mathcal{U}$, the preimage $f^{-1}(O)=\{x\in X,f(x)\in O\}$ is in $\mathcal{T}$.

# Lesson 2: Homeomorphisms

## Homeomorphic Topological Spaces

### Definition of homeomorphism

Let $(X,\mathcal{T} )$ and $(Y,\mathcal{U} )$ be two topological spaces, and $f:X\to Y$ a map.

We say that $f$ is a homeomorphism if 

- $f:X\to Y$ is continuous,
- $f$ is a bijection,
- $f^{-1}:Y\to X$ is continuous.

If there exist such a homeomorphism, we say that the two topological spaces are homeomorphic.

### Homeomorphism equivalence relation

Let us write $X\simeq Y$ if the two topological spaces $X$ and $Y$ are homeomorphic, i.e., if there exists a homeomorphism $f: X\to Y$.

For any $X$, we have $X\simeq X$.

Moreover, we have $X\simeq Y \Longleftrightarrow Y\simeq X$.

We also have a third property $X\simeq Y$ and $Y\simeq X\Longrightarrow X\simeq Z$.

## Connected Components

### Connectedness

Let $(X,\mathcal{T} )$ be a topological space. We say that $X$ is connected if for every open sets $O$, $O' \in \mathcal{T}$ such that $O \cap O'=\emptyset$, we have $X=O\cup O'\Longrightarrow O=\emptyset$ or $O'=\emptyset$.

In other words, a connected topological space cannot be divided into two non-empty disjoint open sets.

## Connectedness as an invariant

### Invariant property

Two homeomorphic topological spaces admit the same number of connected components.

## Dimension

### Invariance of domain

If $m\neq n$, the Euclidean spaces $R^m$ and $R^n$ are not homeomorphic.

### Dimension

Let $(X,\mathcal{T} )$ be a topological space, and $n\ge 0$. We say that it has dimension $n$ if the following is true: for every $x\in X$, there exists an open set $O$ such that $x\in O$, and a homeomorphism $O\to R^n$.

### Dimension Invariant

Let $X$, $Y$ be two homeomorphic topological spaces. If $X$  has dimension $n$, then $Y$ also has dimension $n$.

# Lesson 3: Homotopies

## Homotopy Equivalence between Maps

### Definition

Let $(X,\mathcal{T} )$ and $(Y, \mathcal{U} )$ be two topological spaces, and $f,g:X\to Y$ two continuous maps. A **homotopy between** $f$ and $g$ is a map $F:X\times [0,1]\to Y$ such that: 

- $F(\cdot, 0)$ is equal to $f$,
- $F(\cdot,1)$ is equal to $g$,
- $F:X\times [0, 1]\to Y$ is continuous.

If such a homotopy exists, we say that the maps $f$ and $g$ are homotopic.

For any $t \in [0,1]$, the notation $F(\cdot, t)$ refers to the map 

$$
\begin{aligned}F(\cdot, t):X&\longrightarrow Y\\x&\longmapsto F(x, t)\end{aligned}
$$

### Trivial maps

From a homotopic point a view, a trivial map is a map that is **homotopic to a constant map**.

## Homotopy Equivalence between Topological Spaces

### Definition of homotopy equivalence

Let $(X,\mathcal{T} )$ and $(Y,\mathcal{U} )$ be two topological spaces. A homotopy equivalence between $X$ and $Y$ is **a pair of continuous maps** $f:X\to Y$ and $g:Y\to X$ such that:

- $g\circ f:X\to X$ is homotopic to the identity map id: $X\to X$,
- $f\circ g: Y\to Y$ is homotopic to the identity map id: $Y\to Y$.

If such a homotopy equivalence exists, we say that $X$ and $Y$ are homotopy equivalent. 

### Deformation retractions

Let $(X,\mathcal{T} )$ be a topological space and $Y\subset X$ a subset, endowed with the subspace topology $\mathcal{T}_{|Y}$.

A **retraction** is a continuous map $r: X\to X$ such that $\forall x\in X$, $r(x)\in Y$ and $\forall y\in Y$, $r(y)= y$.

A **deformation retraction** is a homotopy $F: X\times [0,1]\to Y$ between the identity map id: $X\to X$ and a retraction $r:X\to X$.

### Homotopy Equivalence Relation

## Link with Homeomorphic Spaces

### Homeomorphic implies homotopic

Let $X$, $Y$ be two topological spaces. If they are homeomorphic, then they are homotopic equivalent.

## Invariants

### Number of connected components

Two homotopy equivalent topological spaces admit the same number of connected components.

# Lesson 4: Simplicial Complexes

## Combinatorial Simplicial Complexes

### Standard simplices

[单纯形 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E5%8D%95%E7%BA%AF%E5%BD%A2)

The **standard simplex** of dimension $n$ is the following subset of $R^{n+1}$

$$
\Delta_n =\{x=(x_1,\dots,x_{n+1} )\in R^{n+1},x_1,\dots,x_{n+1}\ge 0\ and\ x_1+\dots+x_{n+1}=1\}
$$

[凸包 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E5%87%B8%E5%8C%85)

For any collection of *points* $a_1,\dots,a_k\in R^n$, their **convex hull** is defined as: 

$$
conv(\{a_1\dots a_k\} )=\{\sum_{1\le i\le k}t_ia_i,t_1+\dots+t_k=1,t_1,\dots,t_k\ge 0\}
$$

We can say that $\Delta_n$ is the convex hull of the vectors $e_1,\dots,e_{n+1}$ of $\R^{n+1}$, where $e_i=(0,\dots,1,0,\dots,0)$

### Simplicial complexes

[单纯复形 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E5%8D%95%E7%BA%AF%E5%A4%8D%E5%BD%A2)

Let $V$ be a set (called the set of **vertices**). A **simplicial complex** over $V$ is a set $K$ of subsets of $V$ (called the **simplices**) such that, for every $\sigma\in K$ and every non-empty $\tau\subset \sigma$, we have $\tau\in K$. 

## Topology

### Topological realization

Let $K$ be a simplicial complex, with vertex $V=\{1,\dots,n\}$. 

In $R^n$, consider, for every $i\in [1,n]$, the vector $e_i=(0,\dots,1,0,\dots,0)$. 

Let $|K|$ be the subset of $R^n$ defined as: 

$$
|K|=\bigcup\limits_{\sigma\in K}conv(\{e_j,j\in\sigma\} )
$$

where conv represent the convex hull of points. 

Endowed with the subspace topology, $(|K|,\mathcal{T}_{|K|} )$ is a topological space, that we call the topological realization of $K$. 

### Triangulations

Let $(X,\mathcal{T} )$ be a topological space. A triangulation of $X$ is a simplicial complex $K$ such that its topological realization $|K|$ is homeomorphic to $X$. 

## Euler Characteristic

### Euler characteristic

Let $K$ be a simplicial complex of dimension $n$. Its **Euler characteristic** is the integer: 

$$
\chi(K)=\sum_{0\le i\le n}(-1)^i\cdot(number\ of\ simplices\ of\ dimension\ i)
$$

Let $X$ be a topological space. Its Euler characteristic is defined as the Euler characteristic of any triangulation of it.

### Euler characteristic is an invariant

If $X$ and $Y$ are two homotopy equivalent topological spaces, then $\chi(X)=\chi(Y)$. 

# Lesson 5: Homological Algebra

## Reminder of Algebra

### Groups

We recall that a group $(G,+)$ is a set $G$ endowed with an operation 

$$
\begin{aligned}
G\times G&\longrightarrow G\\
(g,h)&\longmapsto g+h
\end{aligned}
$$

such that: 

- (associativity) $\forall a,b,c\in G$, $(a+b)+c=a+(b+c)$,
- (identity) $\exists 0\in G$, $\forall a\in G$, $a+0=0+a=a$,
- (inverse) $\forall a\in G$, $\exists b\in G$, $a+b=b+a=0$.

### Quotient group

[商群 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E5%95%86%E7%BE%A4)

A **subgroup** of $(G,+)$ is a subset $H\subset G$ such that 

$$
\forall a, b\in H,a+b\in H
$$

If $H$ is a subgroup of $G$, the operation $+:G\times G\to G$ restricts to an operation $+:H\times H\to H$, making $H$ a group on its own. 

Suppose that $**G$ is commutative**, and that $**H$ is a subgroup of $G$**. We define the following equivalence relation on $G$: $\forall a, b\in G$, 

$$
a\sim b\Longleftrightarrow a-b\in H
$$

Denoted by $G/H$ the quotient set of $G$ under this relation. For any $a\in G$, one shows that the **equivalence class** of $a$ is equal to $a+H=\{a+h,h\in H\}$

Let $a_0,a_1,\dots,a_n$ be a choice of representants of equivalence classes of the relation $\sim$. 

The quotient set can be written as $G/H=\{0+H,a_1+H,\dots,a_n+H\}$. 

One defines a group structure $\oplus$ on $G/H$ as follows: for any $i,j\in [0,n]$, 

$$
(a_i+H)\oplus(a_j+H)=(a_i+a_j)+H
$$

The group $(G/H,\oplus)$ is called the **quotient group.** 

### The group $Z/2Z$

The subgroup $2Z\subset Z$ consists of all even numbers. 

The relation $a\sim b\Longleftrightarrow a-b\in2Z$ admits two equivalence classes: $2Z=\{2n,n\in Z\}$ and $1+2Z=\{1+2n,n\in Z\}$

The quotient group can be seen as the group $Z/2Z=\{0,1\}$ with the operation

$$
0+0=0\\0+1=1\\1+0=1\\1+1=0
$$

For any $n\ge1$, the product group $((Z/2Z)^n,+)$ is the group whose underlying set is 

$$
(Z/2Z)^n=\{(\epsilon_1,\dots,\epsilon_n),\epsilon_1,\dots,\epsilon_n\in Z/2Z\}
$$

and whose operation is defined as 

$$
(\epsilon_1,\dots,\epsilon_n)+(\epsilon_1',\dots,\epsilon_n')=(\epsilon_1+\epsilon_1',\dots,\epsilon_n+\epsilon_n')
$$

Note that the set $(Z/2Z)^n$ has $2^n$ elements. 

### Vector spaces

Let $(\mathbb{F},+,\times)$ be a field. We recall that a **vector space** over $\mathbb{F}$ is a group $(V,+)$ endowed with an operation: 

$$
\begin{aligned}
\mathbb{F}\times V&\longrightarrow V\\(\lambda,v)&\longmapsto \lambda\cdot v
\end{aligned}
$$

such that

- (compatibility of multiplication) $\forall\lambda,\mu\in\mathbb{F}$, $\forall v\in V$, $\lambda\cdot(\mu\cdot v)=(\lambda\times\mu)\cdot v$,
- (identity) $\forall v\in V$, $1\cdot v=v$ where $1$ denotes the unit of $\mathbb{F}$,
- (scalar distributivity) $\forall\lambda,\upsilon\in\mathbb{F}$, $\forall v\in V$, $(\lambda+\upsilon)\cdot v=\lambda \cdot v+\upsilon\cdot v$,
- (vector distributivity) $\forall\mu\in\mathbb{F}$, $\forall v,w\in V$, $\lambda\cdot(u+v)=\lambda\cdot v+\upsilon\cdot v$.

Let $\{v_1,\dots,v_n\}$ be a collection of elements of $V$. We say that it is free if 

$$
\forall\lambda_1,\dots,\lambda_n\in\mathbb{F},\sum_{1\le i\le n}\lambda_i v_i=0\Longrightarrow \lambda_1=\dots =\lambda_n=0
$$

We say that it is spans $V$ if 

$$
\forall v\in V,\exists \lambda_1,\dots,\lambda_n\in\mathbb{F},\sum_{1\le i\le n} \lambda_iv_i=v
$$

If the collection $\{v_1,\dots,v_n\}$ is free and spans $V$, we say that it is a basis. 

---

A linear subspace of $(V,+,\cdot)$ is a subset $W\subset V$ such that 

$$
\forall u,v\in W,u+v\in W\ and\ \forall v\in W,\forall\lambda\in\mathbb{F},\lambda v\in W
$$

Just as for groups, we can define an equivalence relation $\sim$ on $V$, and a quotient vector space $V/W$. 

### Isomorphism & Isomorphic

We have $\dim V/W=\dim V-\dim W$ 

Let $(V,+,\cdot)$ and $(W,+,\cdot)$ be two vector spaces. A linear map is a map $f:V\to W$ such that 

$$
\forall u,v\in V, f(u+v) = f(u)+f(v)\ and\ \forall v\in V,\forall\lambda\in\mathbb{F},f(\lambda v)=\lambda\cdot f(v)
$$

If $f$ is a bijection, it is called an isomorphism, and we say that $V$ and $W$ are isomorphic. 

### $Z/2Z$-vector spaces

Let $(V,+)$ be a commutative group. 

It can be given a $Z/2Z$-vector space structure iff $\forall v\in V$, $v+v=0$. 

## Chains, cycles, and boundaries

### Skeleton

Let $K$ be a simplicial complex. For any $n\ge0$, define the $n$-skeleton of $K$: 

$$
K_n=\{\sigma\in K,\dim(\sigma)\le n\}
$$

Also, define

$$
K_{(n)}=\{\sigma\in K,\dim(\sigma)=n\}
$$

### Chains

Let $n\ge 0$. The $n$-chains of $K$ is the set $C_n(K)$ **whose elements** are the formal sums

$$
\sum_{\sigma\in K_{(n)} }\epsilon_\sigma\cdot\sigma\ where\ \forall\sigma\in K_{(n)},\epsilon_{\sigma}\in Z/2Z
$$

### Boundary operator

Let $n\ge1$, and $\sigma=[x_0,\dots,x_n]\in K_{(n)}$ a simplex of dimension $n$. We define its boundary as the following element of $C_{n-1}(K)$: 

$$
\partial_n\sigma=\sum_{\tau\subset\sigma,|\tau|=|\sigma|-1} \tau
$$

We can extend the operator $\partial_n$ as a linear map $\partial_n:C_n(K)\to C_{n-1}(K)$ as follows: for any element of $C_n(K)$, 

$$
\partial_n\sum_{\sigma\in K(n)} \epsilon_\sigma\cdot \sigma=\sum_{\sigma\in K(n)}\epsilon_\sigma\cdot\partial_n\sigma
$$

---

For any $n\ge1$, for any $c\in C_n(K)$, we have $\partial_{n-1}\circ\partial_n(c)=0$. 

### Cycles and boundaries

Let $n\ge0$. We have a triplet of vector spaces 

$$
C_{n+1}(K)\to C_n(K)\to C_{n-1}(K) 
$$

We can consider their kernel and image.

---

We define: 

[Kernel (set theory) - Wikipedia](https://en.wikipedia.org/wiki/Kernel_(set_theory))

- The $n$-cycles: $Z_n(K)=Ker(\partial_n)$,
- The $n$-boundaries: $B_n(K)=Im(\partial_{n+1} )$.

---

We say that two chains $c$, $c'\in C_n(K)$ are homologous if there exists $b\in B_n(K)$ such that $c=c'+b$. Two chains are **homologous** if they are equal up to a boundary. 

## Homology Groups

### Homology groups

$n^{th}$ homology group of $K$:

$$
H_n(K)=Z_n(K)/B_n(K)
$$

---

$\dim H_n(K)=\dim B_n(K)-\dim Z_n(K)$. 

---

Let $K$ be a simplicial complex and $n\ge0$. Its $n^{th}$ Betti number is the integer $\beta_n(K)=\dim H_n(K)$. 

## Homology Groups of Topological Spaces

### Invariant property

The homology groups of a topological space are the homology groups of any triangulation of it. We define its Betti numbers similarly. 

If $X$ and $Y$ are two homotopy equivalent topological spaces, then for any $n\ge0$ we have isomorphic homology groups $H_n(X)\simeq H_n(Y)$. As a consequence, $\beta_n(X)=\beta_n(Y)$. 

# Incremental Algorithm

## Incremental Algorithm

### Ordering the simplicial complex

### Positivity of simplices

Let $i\in [1,n]$, and $d=\dim(\sigma^i)$. Recall that $K^i=K^{i+1}\cup\{\sigma_i\}$. 

The simplex $\sigma^i$ is positive if there exists a cycle $c\in Z_d(K^i)$ that contains $\sigma^i$. 

In other words, there exists $c=\sum_{\sigma\in K^i_{(n)} }\epsilon_{\sigma}\cdot \sigma\in C_n(K^i)$ such that $\epsilon_{\sigma^i}=1$ and $\partial_n(c)=0$. Otherwise, $\sigma_i$ is negative. 

---

Input: an increasing sequence of simplicial complexes $K^1\subset \cdots\subset K^n=K$

Output: the Betti numbers $\beta_0(K),\dots,\beta_d(K)$