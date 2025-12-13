---
title: PUTNAM-2000-P1
description:
comments: true
draft: true
enableToc: true
tags:
  - Problema
  - Universitario
  - Intrincado
  - TeoríaDeNúmeros
date: 2025-12-13
without-solution: false
notas: revisar solución
author:
---
## Enunciado
Sexa $f$ un polinomio con coeficientes enteiros. Definamos a sucesión $\{a_n\}_{n\in\mathbb{N}}$ como $a_0=0$ e $a_{n+1}=f(a_n)$, $\forall n \in\mathbb{N}$. Proba que se existe $m\in\mathbb{Z}^+$ tal que $a_m=0$, entón $a_1=0$ ou $a_2=0$.

---

## Resolución

> [!pista]-
>  Estudar que pasa a partir do termo m-ésimo.

> [!solution3]- Solución
>  Vexamos que acontece a partir do termo m-ésimo. Como $a_m=0=a_0$, entón $a_{m+1}=f(a_m)=f(a_0)=a_1$. De maneira análoga, $a_{m+n}=a_n$, $\forall n\in\mathbb{N}$, é dicir, a sucesión repítese a partir do m-ésimo termo.
> 
> Pola propiedade de divisibilidade vista, teremos a seguinte cadea pechada destas:
> $$a_1-a_0|f(a_1)-f(a_0)=a_2-a_1|\ldots|a_m-a_{m-1}|f(a_m)-f(a_{m-1})=a_{m+1}-a_m=a_1-a_0$$
> Denotando por $b_n:=a_{n+1}-a_n$,  a anterior cadea implica as igualdades seguintes
> $$|b_0|=|b_1|=\ldots=|b_{m-1}|.$$
> Se $b_0=0$, entón $a_n=0$, $\forall$
> Se $b_0\neq 0$, temos que $b_0+b_1+\ldots+b_{m-1}=a_m-a_0=0$, polo que os signos dos $b_k$ terán que compensarse.
> 
> Así, temos que $\exists k\in \{1,\ldots,m-1\}$ tal que $b_{k-1}=-b_k$. Pero
>         $$a_k-a_{k-1}=b_{k-1}=-b_k=-(a_{k+1}-a_k) \implies a_{k-1}=a_{k+1}.$$
> Por como está definida a sucesión, o anterior significa que $a_n=a_{n+2}$, $\forall n\geq k-1$. Como $m>k-1$, en particular $a_m=a_{m+2}$, é dicir, $0=a_0=a_2$.




---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
