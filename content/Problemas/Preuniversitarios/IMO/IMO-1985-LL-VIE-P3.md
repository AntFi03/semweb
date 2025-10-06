---
title: IMO-1985-LL-VIE-P3
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Asequible
  - EcuaciónsFuncionais
date: 2025-10-03
---
## Enunciado

Atopar todas as función $f:\mathbb{R}\longrightarrow\mathbb{R}$ que verifican:
$$\forall x,y \in \mathbb{R}, \quad f(x+y)+f(x-y)=2f(x)f(y) \text{ e } \lim_{x\to\infty}f(x)=0.$$

---

## Resolución

> [!pista]- Pistas
> 1. Tomar $y=0$.
> 2. Buscar un absurdo se $f(0)=1$.

> [!solution2]- Solución
> Tomamos $y=0$ e quédanos que: $$f(x)+f(x)=2f(x)f(0), \quad \forall x \in \mathbb{R} \iff \left\{
> 
> \begin{array}{c}
> 
> f(x)=0, \quad \forall x \in \mathbb{R}\\ \text{ou} \\
> 
> f(0)=1
> 
> \end{array} \right.$$
> 
> $f(x)=0, \forall x \in \mathbb{R}$ é claramente válida, así que supoñamos que $f(0)=1$.
> 
> Demos agora a $y$ o valor $x$, é dicir $x=y$
> $$f(x+x)+f(x-x)=2f(x)f(x), \quad \forall x \in \mathbb{R} \implies f(2x)+1=2f(x)^{2}, \quad \forall x \in \mathbb{R}$$
> 
> Simplemente tomando límites temos
> 
> $$\lim_{x\to\infty}f(2x)+1=1=0=\lim_{x\to\infty}2f(x)^{2} \text{,}$$
> 
> o cal é un absurdo pois $1\neq0$.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar un man!
