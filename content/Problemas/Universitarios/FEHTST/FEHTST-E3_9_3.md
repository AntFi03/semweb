---
title: FEHTST-E3_9_3
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

Atopar todas as funcións $f: \mathbb{R} \longrightarrow \mathbb{R}$ continuas tal que $f(\cos x)=f(x)$ para todo $x\in\mathbb{R}$.

---

## Resolución

> [!pista]-
> Usar o método de punto fixo.

> [!solution1]- Solución
> Por inducción temos $f(x)=f(\cos^n x)$ para todo $n\in \mathbb{N}^*$. Sabemos que $\lim_{n \to \infty} \cos ^n x = x_0$ con $x_0$ o único punto fixo do coseno para calquera $x \in \mathbb{R}$ de partida (comprobar). Así,
> $$
> f(x_0) = f(\lim \cos^n x) = \lim f(\cos^n x) = f(x)
> $$
> polo que $f$ é unha función constante.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
