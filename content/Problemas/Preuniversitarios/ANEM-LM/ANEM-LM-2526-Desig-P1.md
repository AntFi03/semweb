---
title: ANEM-LM-2526-Desig-P1
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Asequible
  - Desigualdades
date: 2025-11-27
author: Inácio Suárez Camiña
---
## Enunciado

Sexan $a,b\in(0,1)/a+b=1$. Probar que $$\left(1+\frac{1}{a}\right)^{2}+\left(1+\frac{1}{b}\right)^{2}\geq18$$

---

## Resolución

> [!pista]-
> Proba a considerar a desigualdade artimético-xeométrica (AM-GM) para facilitar as contas: $$\frac{x+y}{2}\geq\sqrt{xy}.$$

> [!solution2]- Solución
> Como $a+b=1$, $b=1-a$ e aplicando unha vez a desigualdade AM-GM, consideramos $$\left(1+\frac{1}{a}\right)^{2}+\left(1+\frac{1}{1-a}\right)^{2}\geq 2\left(1+\frac{1}{a}\right)\left(1+\frac{1}{1-a}\right)=:f(a)$$
> $f'(a)=\frac{8a-4}{x^{2}(1-x)^{2}}$, polo que $f'(a)=0$ se e só se $a=\frac{1}{2}$.
> 
> $f''(a)=-\frac{8(3a^{2}-3a+1)}{a^{3}(1-a)^{a}}$, polo que $f''\left( \frac{1}{2} \right)=128>0$ e $f$ ten un mínimo en $a=\frac{1}{2}$. Así, $f(a)\geq f\left( \frac{1}{2} \right)=18$ e temos o resultado buscado.

> [!solution4]- Solución 2
> Como $a+b=1$, $b=1-a$ e consideramos $$f(a)=\left(1+\frac{1}{a}\right)^{2}+\left(1+\frac{1}{1-a}\right)^{2}.$$
> Primeiro, notemos que $f$ é coerciva, xa que $\\lim_{ a \to x }f(a)=+\infty,\forall x\in\partial(0,1)=\{0,1\}$.
>
> Ademais, $f$ é convexa, xa que $\frac{1}{a}$, $\frac{1}{1-a}$ e $1$ son convexas en $(0,1)$, a suma de funcións convexas é convexa e o cadrado dunha función convexa e positiva é convexa.
> 
> Polo tanto, como $f$ é coerciva e convexa en $(0,1)$, existe un único punto onde $f$ alcanza o seu mínimo. Pero $f(a)=f(1-a)$, polo que ese punto verifica que $a=1-a$, é dicir, $a=\frac{1}{2}$. Así, $f(a)\geq f\left( \frac{1}{2} \right),\forall a \in(0,1)$.
> Como $f\left( \frac{1}{2} \right)=18$, queda probado o resultado.

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
