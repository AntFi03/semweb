---
title: FEHTST-E2_12_7
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Análise
  - EcuaciónsFuncionais
  - Seminario
  - Intrincado
  - Preuniversitario
date: 2025-11-06
notas: "Functional\r Equations and How\r to Solve Them, Christopher G. Small, páxina 50"
---
## Enunciado

Sexan $h:\mathbb{R}^{+}\to\mathbb{R}^{+}$ continua e $f:\mathbb{R}^{+}\times\mathbb{R}^{+}\to\mathbb{R}^{+}$ tales que $f(tx,ty)=h(t)f(x,y)$. Calcular $h(t)$.

---

## Resolución

> [!pista]-
> Intenta calcular $h(t^n)$ en función de $h(t)$.

> [!pista2]- Pista
> Podes reducir a ecuación funcional sobre $h$ á ecuación funcional de Cauchy ou a unha delas?

> [!solution2]- Solución
> É fácil ver que $h(t^n)=h(t)^n$ aplicando a propiedade a $f(t^nx,t^ny)$ de golpe e paso a paso.
> Considerando $g=\log \circ h\circ\exp$, sabemos que $g(nx)=ng(x)$ e que $g$ é continua. Polo tanto, $g$ é solución da ecuación funcional de Cauchy e $g(x)=ax$ para algún $a\in\mathbb{R}$. Así, $h(t)=t^a,\forall t\in\mathbb{R}^+$.

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar un man!
