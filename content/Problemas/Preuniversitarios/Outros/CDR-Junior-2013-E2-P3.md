---
title: CDR-Junior-2013-E2-P3
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Intrincado
  - TeoríaDeNúmeros
date: 2025-10-03
author: Ibai Otero Gómez
---
## Enunciado

Atopar as solucións enteiras de:
$$
85^m-n^4=4.
$$

---

## Resolución

> [!pista]-
> Usar a identidade de Sophie Germaine.

> [!solution2]- Solución (coa identidade de Sophie Germaine)
> Podemos reescribir a ecuación como
> $$85^m=n^4+4\cdot1^4,$$
> co cal podemos usar a identidade de Sophie Germaine:
> $$85^m=(n^2+2n+2)(n^2-2n+2).$$
> Agora, reescribamos a anterior identidade da seguinte maneira:
> $$85^m=17^m\cdot5^m=((n+1)^2+1)((n-1)^2+1).$$
> Podemos excluír o caso no que $n$ é par, no cal non coincidirían as paridades, polo que ao supoñer que $n$ é impar, $((n-1)^2+1)$ e $((n+1)^2+1)$ resultan ser coprimos, e polo tanto teremos que
> $$5^m-1=(n-1)^2$$
> $$17^m-1=(n+1)^2$$
> Isto quere dicir que $5^m-1$ e $17^m-1$ deben ser cadrados perfectos case consecutivos, é dicir con só un cadrado perfecto entre eles. No caso de $m=1$, teríamos solución con $n=3$. Se $m>1$, temos que $9^m$ e $16^m$ son dous cadrados perfectos situados entre $5^m-1$ e $17^m-1$, e polo tanto non habería solución.
> 
> É dicir, a única solución enteira é $(m,n)=(1,3)$.

> [!solution3]- Solución (factorizando)
> Factorizando
> $$
> \begin{align}
> 85^m&=17^m\cdot 5^m\\&=n^4+4\\&=(n^4+4n^2+4)-4n^2\\&=(n^2+2)^2-(2n)^2\\&=(n^2+2n+2)(n^2-2n+2).
> \end{align}
> $$
> Ademais, tense que $\text{mcd}{(n^2+2n+2,n^2-2n+2)} = 1$ polo tanto necesariamente
> $$
> n^2+2n+2 = 17^m \hspace{1cm} n^2-2n+2 = 5^m.
> $$
> 
> Agora ben, $17^m-1=(n+1)^2$ e $5^m-1=(n-1)^2$ polo que só hai un cadrado entre estes dous números. Pero
> $$
> 
> 5^m-1<9^m=(3^m)^2<16^m=(4^m)^2\leq17^m-1.
> 
> $$
> Polo que atopamos dous cadrados no medio destes números. A única posibilidade é que $m$ sexa $0$ ou $1$. Con isto temos a única solución $(n,m)=(3,1)$.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
