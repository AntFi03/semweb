---
title: APSMO-Olym-2023-S-P1C
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Escolar
  - Accesible
  - TeoríaDeNúmeros
date: 2025-10-08
author: Carla Dopazo Pavón
---

## Enunciado   
Temos tres números enteiros que as súas sumas por parellas dán $5$, $-31$ e $-2$.
Atopa o valor do menor dos tres enteiros.
 

---

## Resolución

> [!pista]- Pista: Tradución do problema a ecuacións
> Sexan $a,b,c$ os enteiros. O problema dános as seguintes ecuacións:
> $$a+b=5$$
> $$a+c=-31$$
> $$b+c=-2$$

> [!solution2]- Solución 1
> Imos sumar as 3 ecuacións:
> $$a+b+a+c+b+c=5-31-2 \implies 2a+2b+2c=-28.$$
> Podemos dividir en ambos lados da ecuación por $2$:
> $$a+b+c=-14$$
> Agora podemos obter o valor de $a,b$ e $c$ restando cada unha das ecuacións oxinais a esta que acabamos de obter.
> $$a+b+c-(a+b)=-14-(+5) \implies c=-19$$
> $$a+b+c-(a+c)= -14-(-31) \implies b=17$$
> $$a+b+c-(b+c)=-14-(-2) \implies a=-12$$
> Polo tanto, o menor dos tres enteiros vale $-19$.

> [!solution2]- Solución 2
> Imos comezar restando as dúas primeiras ecuacións.
> $$a+b-(a+c)=5-(-31) \implies b-c= 36$$
> Agora, sumaremos esta ecuación que acabamos de obter e a terceira orixinal, é dicir, a que aínda non empregamos:
> $$b+c+(b-c) = -2+36 \implies 2b= 34 \implies b=17.$$
> Así, podemos substituír o valor de $b$ na primeira e terceira ecuación orixinal para obter o valor de $a$ e $c$.
> $$a+17=5 \implies a=-12.$$
> $$17+c=-2 \implies c=-19.$$
> Polo tanto, o menor enteiro vale $-19$.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
