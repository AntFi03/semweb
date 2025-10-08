---
title: AHSMC-2025-II-P3
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Fácil
  - Álxebra
date: 2025-10-08
---

## Enunciado   

Atopa todos os polinomios $P$ con coeficientes enteiros non negativos, tal que 
$$P(1) = 3 , P(2) = 37$$

---

## Resolución

> [!solution1]- Solución
>Sexa 
$$P(X) = a_0 + a_1X+ ... + a_nX^n,$$
onde $a_0,a_1,..., a_n$ son enteiros non negativos e $a_n>0$. Así,
$$a_0+a_1+a_2+...+a_3 = 3$$
$$a_0+2a_1+4a_2+...+2^na_n=37$$
Así só hai 3 formas de escribir 3 coma suma de dous números enteiros positivos: $3, 2+1, 1+1+1$. Por iso $P(X)$ ten que ser dalgunha das seguintes formas:
$$P(X) = 3X^n$$
$$P(X) = 2X^n + X`^m$$
$$P(X) = X^n+X^m+X^l$$
con $l,m,n$ enteiros non negativos. Nos tres casos $P(X)= X^n+X^m+X^l$ con $0\leq l \leq m \leq n$. Por tanto,
$$37 = 2^n + 2^m + 2^l$$
Como o 37 é impar, $l=0$
$$36 = 2^n+2^m.$$


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar un man!
