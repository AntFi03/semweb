---
title: PSS-S1-E6
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Imposible
  - Análise
  - Invariantes
date: 2025-12-13
without-solution: false
notas:
author: Antón Figueroa Martínez
---
## Enunciado
 Dado un punto de $(x_0,y_0) \in \mathbb{R}^{2}$ tal que $0<x_0<y_0$. Defínese a recurrencia:
$$
x_{n+1} = \frac{x_n+y_n}{2}, \qquad y_{n+1} = \sqrt{x_{n+1}y_n}.
$$
para todo $n \in \mathbb{N}$. Atopar o valor (común) do límite:
$$
\lim_{n\to +\infty} x_n = \lim_{n\to +\infty} y_n = x = y. 
$$

---

## Resolución



  > [!solution5]- Solución
> Podemos axudarnos de atopar algún invariante na recurrencia. Aínda que serán de axuda non existe ningún método para atopalos, é algo puramente heurístico. Si existen algúns métodos que adoitan funcionar, pero non o fan sempre. Dous deles consisten en comprobar o que ocorre nas variacións de $x_n/y_n$ e $y_n-x_n$, no paso de $n$ a $n+1$. Comezando con $x_n/y_n$:
>   $$ \frac{x_{n+1}}{y_{n+1}} = \frac{x_{n+1}}{\sqrt{x_{n+1}y_{n}}} = \sqrt{\frac{x_{n+1}}{y_n}} = \sqrt{\frac{1+x_n/y_n}{2}}. $$
> Esta expresión recorda á do coseno do ángulo metade:
> $$
> \cos\left(\frac{\alpha}{2}\right) = \sqrt{\frac{1+\cos(\alpha)}{2}}. $$
> Como $0 < x_n/y_n < 1$, ten sentido considerar: $x_n/y_n = \cos(\alpha_n)$. Entón de \eqref{eq:pss.s1.e6-1} deducimos:
> $$
> \cos\left(\alpha_{n+1}\right) = \cos\left(\frac{\alpha_n}{2}\right) \implies \alpha_n = \frac{\alpha_0}{2^{n}} \implies 2^{n}\alpha_n = \alpha_0.
> $$
> Sendo equivalente a que:
> $$
> 2^{n} \cdot \arccos\left(\frac{x_n}{y_n}\right) = \arccos\left(\frac{x_0}{y_0}\right),
> $$
> que é o noso primeiro invariante. Agora, en vez de estudar $y_n-x_n$ podemos considerar $y_n^2-x_n^2$ para librarnos das raíces:
> $$
> y_{n+1}^{2} - x_{n+1}^{2} = \frac{y_n^{2}-x_n^{2}}{4} \implies 2 \sqrt{y^{2}_{n+1} - x_{n+1}^{2}} = \sqrt{y^{2}_{n} - x_n^{2}},
> $$
> ou:
> $$
> 2^{n} \sqrt{y_n^{2}-x_n^{2}} = \sqrt{y_0^{2}-x_0},
> $$
> que é o noso segundo invariante. Tendo en conta que se:
> ![[pss-s1-e6-arccos-arcsen.png|300]]
> Entón: $\arccos(t) = \arcsin(s)$, onde: $s = \sqrt{1-t^{2}}$. Con isto temos:
> $$
> \arccos\left(\frac{x_0}{y_0}\right) = 2^{n} \cdot \arccos\left(\frac{x_n}{y_n}\right) = 2^{n} \cdot \arcsin\left(\frac{\sqrt{y_n^2-x_n^2}}{y_n}\right) = 2^{n}\cdot \arcsin\left(\frac{\sqrt{y_0^{2}-x_0^{2}}}{2^{n}y_n}\right).
> $$
> O último termo converxe a $\sqrt{y_0^2-x_0^2}/y$ cando $n \to \infty$. Así que finalmente chegamos a que:
> $$
> x = y = \frac{\sqrt{y_0^2-x_0^2}}{\arccos(x_0/y_0)}.
> $$


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
