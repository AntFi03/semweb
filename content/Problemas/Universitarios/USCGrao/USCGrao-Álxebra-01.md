---
title: USCGrao-Álxebra-01
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Universitario
  - Fácil
  - Álxebra
date: 2025-12-20
without-solution: false
notas:
author: Martín García Cebeiro
---
## Enunciado

Sexa $p\in \mathbb{N}$ un primo. Chamamos polinomios ciclotómicos aos da forma:
    $$X^{p-1}+X^{p-2}+\ldots+X+1.$$
Probar que os polinomios ciclotómicos son irreducibles en $\mathbb{Q}[X]$ e $\mathbb{Z}[X]$.

---

## Resolución

> [!pista]-
> Expresar o polinomio como cociente de outros dous.

> [!solution1]- Solución
>  Primeiro notar que como todos os coeficientes son iguais a $1$, a irreducibilidade en $\mathbb{Q}[X]$ implicará a irreducibilidade en $\mathbb{Z}[X]$.
> 
> Escribamos $f:=X^{p-1}+X^{p-2}+\ldots+X+1$. Resulta que ao multiplicalo por $X-1$, temos $(X-1)f=X^p-1$, polo que
>         $$f=\frac{X^p-1}{X-1}.$$
> Agora, realizando o cambio de variable a $X+1$, quédanos
>         $$f_{X+1}=\frac{(X+1)^p-1}{X}.$$
> Pola fórmula do binomio de Newton teremos
>         $$f_{X+1}=\frac{\sum\limits_{k=0}^p {p\choose k} X^{p-k}-1}{X}=\frac{\sum\limits_{k=0}^{p-1} {p\choose k} X^{p-k}}{X}=\sum\limits_{k=0}^{p-1} {p\choose k} X^{p-k-1}.$$
> Denotando por $b_k:={p\choose p-k-1}$, $k\in\{0,\ldots,p-1\}$, temos que $f_{X+1}=\sum\limits_{k=0}^{p-1}b_kX^k$.
> 
> Como $p | b_k$, $\forall k \in \{0,\ldots,p-2\}$, $p \nmid  b_{p-1}=1$ e $p^2 \nmid b_0=p$, polo criterio de Eisenstein $f_{X+1}$ é irreducible en $\mathbb{Q}[X]$, do que se deduce polo criterio de cambio de variable que $f$ tamén o é.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
