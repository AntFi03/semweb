---
title: PSS-S1-E1
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Fácil
  - Análise
date: 2025-12-13
without-solution: false
notas:
author:
---
## Enunciado

 Comezando co punto do plano $S=(a,b)$, con $0<b<a$, defínese a sucesión de puntos $(x_n, y_n)$ segundo a regra:
 $$ x_0 = a, \quad y_0 = b, \quad x_{n+1} = \frac{x_n + y_n}{2}, \quad y_{n+1} = \frac{2x_ny_n}{x_n+y_n}.$$
 A que punto do plano converxe a sucesión?

---

## Resolución

> [!pista]-
> Tense que $x_ny_n = x_{n+1}y_{n+1}$. Como evolucionan os valores de $x_n - y_n$?

 > [!solution1]- Solución
> Atopamos o \hint{invariante} $x_ny_n = x_{n+1}y_{n+1} = ab$, $\forall n \in \mathbb{N}$. Inicialmente $y_0<x_0$, vemos que en xeral este será outro \hint{invariante}. Por inducción témolo certo para $n=0$, supoñemos $y_n<x_n$ e demostrámolo para $n+1$:
> $
> 0<x_{n+1} - y_{n+1} = \underbrace{\frac{x_n + y_n}{2}}_{\text{Media aritmética (MA)}} - \underbrace{\frac{2x_ny_n}{x_n+y_n}}_{\text{Media armónica (MH)}} < \frac{x_n - y_n}{2}, \enspace \forall n \in \mathbb{N}.
> $
> Xa que, en particular, a \hypo{media aritmética} é maior que a \hypo{media armónica}. Polo tanto:
> $
> \lim_{n\to +\infty} x_n = \lim_{n\to +\infty} y_n = k \in \mathbb{R}.
> $
> E como $k^{2} = ab$, entón $k=\sqrt{ab}$.



---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
