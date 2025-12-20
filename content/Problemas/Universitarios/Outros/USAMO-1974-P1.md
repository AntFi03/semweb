---
title: USAMO-1974-P1
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Universitario
  - Fácil
  - TeoríaDeNúmeros
date: 2025-12-20
without-solution: false
notas:
author:
---
## Enunciado

Sexan $a,b,c\in\mathbb{Z}$ tres enteiros distintos e $P$ un polinomio con coeficientes enteiros. Demostra que non se poden dar simultaneamente as igualdades $P(a)=b$, $P(b)=c$ e $P(c)=a$.

---

## Resolución

> [!pista]-
> Sexan $a,b\in\mathbb{Z}$ e $P\in\mathbb{Z}[X]$. Entón $(a-b)|(P(a)-P(b))$.


> [!solution1]- Solución
> Supoñamos que se dan as tres igualdades á vez. Pola propiedade indicada anteriormente terase que
>         $$a-b | P(a)-P(b)=b-c | P(b)-P(c)=c-a | P(c)-P(a)=a-b$$
> Por esta cadea pechada de divisibilidades, deducimos que
>         $$|a-b|=|b-c|=|c-a|$$
> Supoñamos que $a-b=-(b-c)$. Entón $a=c$, que é unha contradición. Polo tanto $a-b=b-c$, logo $a=2b-c$. Sustituíndo nas igualdades, quédanos que
>         $$|b-c|=|c-a|=|c-(2b-c)|=|2c-2b|=2|b-c|\implies |b-c|=0.$$
> Conclúese que $b=c$, que de novo é unha contradición.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
