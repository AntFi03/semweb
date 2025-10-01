---
title: ANEM-LM-2324-TNum-P1
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Asequible
  - TeoríaDeNúmeros
date: 2025-09-25
---
## Enunciado

Demostra que se $2^n-1$ é primo entón $n$ tamén debe selo.

---

## Resolución

> [!solution2]- Solución
> Para $n=2$ é trivialmente certo. Supoñamos que $n$ non é primo e vexamos que $2^n-1$ non o é. Se $n$ non é primo entón $n=xy$, onde ambos factores son distintos da unidade. Entón $$2^n-1=(2^y)^x-1=(2^y-1)(2^{y(x-1)}+2^{y(x-2)}+2^{y(x-3)}+\cdots +2^{y\cdot 1}+2^{y\cdot 0}),$$ onde esta última igualdade se deduce de que $$(a^t-1)=(a-1)(a^{x-1}+a^{x-2}+\cdots +1)$$. Posto que $y\leq 2$ $2^y-1>1$, logo $2^n-1$ non é primo ao posuír un divisor primo.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar un man!
