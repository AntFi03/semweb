---
title: PSS-S1-E2
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Fácil
  - XogosDeEstratexia
  - Invariantes
date: 2025-12-13
without-solution: false
notas:
author: Antón Figueroa Martínez
---
## Enunciado
 Sexa $n \in \mathbb{Z}$ impar. Un alumno escribe os enteiros $1, 2, \dots, 2n$ na pizarra. Entón elixe dous en particular, $a$ e $b$, bórraos, e escribe no seu lugar $|a-b|$ (unha única vez, non na posición de $a$ e na de $b$). Probar que, ao repetir o proceso ata que só quede un número na pizarra, quedaranos un número impar.

---

## Resolución

> [!pista]-
>  Cando realizamos unha iteración, hai algún invariante? Algo non varía? (Considerar $S$ a suma dos números da pizarra).


 > [!solution1]- Solución
>  Sexa $S$ a suma dos números escritos na pizarra. Ao principio, $S = 1+2+\dots+2n-1+2n = \frac{\cancel{2}n(2n+1)}{\cancel{2}} = n(2n+1)$, é un número impar. A cada iteración ou paso, $S$ redúcese en $2 \min(a,b)$, que é un número par. Polo tanto, a _paridade_ de $S$ é *invariante*. Así que, ao rematar as iteracións, o número restante $(S_n)$ tamén será impar.




---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
