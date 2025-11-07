---
title: FEHTST-E2_12_8'
description: Xeralización de FEHTST-E2_12_8 a varias variables
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Universitario
  - Fácil
  - Análise
  - Xeneralización
date: 2025-10-16
---
## Enunciado

Atopar todas as funcións $f: \mathbb{R}^m \longrightarrow \mathbb{R}^n$ tal que existe $K\in\mathbb{R}^+$ de tal xeito que
$$\lvert|f(x)-f(y)\rvert|\leq K\lvert|x-y\rvert|^2$$
para todo $x,y \in \mathbb{R}^m$.

---

## Resolución

> [!pista]-
> Considerar dous puntos arbitrarios e unha partición entre eles. A condición reduce de forma considerable as distancias. Outra opción é pensar na derivada.

> [!solution1]- Solución
> Sexan $a,b \in \mathbb{R}^m$. Consideramos unha partición do segmento $L[a,b]$ tal que
> $$
> 
> x_i = a + \frac{b-a}{n}i
> 
> $$
> Así, temos que, aplicando a desigualdade triangular e a condición do enunciado:
> $$
> \begin{align*}
> \lVert f(b)-f(a) \rVert \leq \sum_i \lVert f(x_i)-f(x_{i-1}) \rVert \leq \sum_i K(x_i-x_{i-1})^2 =\\ =\sum_i K \frac{(b-a)^2}{n^2} = K \frac{(b-a)^2}{n} \xrightarrow{n\to\infty} 0
> \end{align*}
> $$
> Polo tanto, $f$ debe ser necesariamente constante.

> [!solution3]- Solución 2
> $$0\leq \lim_{ y \to x } \frac{\lvert |f(y)-f(x)| \rvert}{\lvert |y-x| \rvert}\leq \lim_{ y \to x } K\lvert |y-x| \rvert=0$$
> Polo tanto, $f$ diferenciable e a súa diferencial é a aplicación $0$ en todo punto. En consecuencia, $f$ é constante.

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar un man!
