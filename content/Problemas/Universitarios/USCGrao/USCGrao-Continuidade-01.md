---
title: USCGrao-Continuidade-01
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Universitario
  - Análise
  - Accesible
date: 2025-12-20
without-solution: false
notas:
author:
---
## Enunciado

 Sexa $f:\mathbb{R}\longrightarrow\mathbb{R}$ unha función derivable e sexa $a\in\mathbb{R}$ tal que $f'(a)>0$. Podemos afirmar que exista un entorno de a no cal $f$ sexa crecente?.

---

## Resolución

> [!pista]-
>  Intentar buscar unha intuición gráfica.

> [!solution2]- Solución
> Dita afirmación é falsa. O crecemento no entorno tería que vir acompañado da derivada positiva no mesmo entorno, non só nun punto. Pode pasar que sempre existan puntos tan próximos como queiramos a $a$ con derivada positiva e negativa.
> Un contraexemplo para a afirmación vén dado por:
>         $$f(x)= \left\{
>         \begin{array}{c}
>             \frac{x}{2}+x^2\sin(\frac{1}{x}), \quad \forall x \in \mathbb{R},\quad x\neq0 \\ 0, \quad x=0
>         \end{array} \right.$$
> Esta función é continua e derivable en todo punto, con derivada:
>         $$f'(x)= \left\{
>         \begin{array}{c}
>             \frac{1}{2}+2x\sin(\frac{1}{x})-\cos(\frac{1}{x}), \quad \forall x \in \mathbb{R},\quad x\neq0 \\ \frac{1}{2}, \quad\quad\quad\quad\quad\quad x=0
>         \end{array} \right.$$
> Tomando $a=0$, temos que $f'(a)=\frac{1}{2}>0$, pero ao redor de 0 a derivada oscila infinitamente entre $1$ e $-1$.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
