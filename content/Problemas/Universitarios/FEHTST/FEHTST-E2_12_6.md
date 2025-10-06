---
title: FEHTST-E2_12_6
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Universitario
  - Fácil
  - Análise
date: 2025-10-03
---
## Enunciado

Atopar todas as funcións $f: \mathbb{R} \longrightarrow \mathbb{R}$ tal que existe $K\in\mathbb{R}$ de tal xeito que
$$|f(x)-f(y)|\leq K(x-y)^2$$
para todo $x,y \in \mathbb{R}$.

---

## Resolución

> [!pista]-
> Considerar dous puntos arbitrarios e unha partición entre eles. A condición reduce de forma considerable as distancias. Outra opción é pensar na derivada.

> [!solution1]- Solución
> Sexan $a,b \in \mathbb{R}$. Consideramos unha partición do intervalo $[a,b]$ tal que
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


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar un man!
