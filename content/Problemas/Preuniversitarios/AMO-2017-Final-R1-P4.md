---
title: AMO-2017-Final-R1-P4
description:
comments: true
draft: false
enableToc: true
tags:
  - Problemas
  - Preuniversitario
  - Intrincado
  - TeoríaDeNúmeros
date: 2025-09-25
---
## Enunciado

Atopar todos os pares de números naturais (é dicir, enteiros non negativos) $(a,b)$ tales que a ecuación $$2017^a=b^6-32b+1$$ ten solución.

---

## Resolución

> [!solution3]- Solución
> Hai 2 solucións que poden ser atopadas sen excesiva dificultade, $(0,0)$ e $(0,2)$. $2017^a$ é sempre impar, logo $b$ debe ser par, é dicir, $b=2c$, con $c$ enteiro. É dicir, $2017^a=64(c^6-c)+1$, polo que $2017^a\equiv 1 \ (\bmod \ 64)$. Por outra banda, $2017\equiv 33 \ (\bmod \ 64)$ e $2017^2\equiv 1 \ (\bmod \ 64)$ ($33^2=1089\equiv 1 \ (\bmod \ 64)$). En tal caso, é obvio que por aritmética modular os restos módulo 64 alternarán entre 1 (potencias pares) e 33 (potencias impares). Nese caso $a$ só pode ser par, obviamente, e polo tanto $2017^a$ é cadrado perfecto.
> 
> Consideremos o polinomio $r(b)=b^6-32b+1$. Vexamos que este polinomio, se $b>4$ está entre dous cadrados consecutivos. É claro que se $b>4$, entón $r(b)<b^6=(b^3)^2$. Por outra banda, $r(b)=b^6-32b+1>b^6-2b^3+1=(b^3-1)^2$, xa que $2b^3\geq 32b\Longleftrightarrow b^2\geq 16\Longleftrightarrow |b|\leq 4$. Isto proba que non hai solucións neste caso. Queda ver o que acontece se $b$ é par menor ou igual que 4, é dicir, $b=0$, $b=2$ e $b=4$. Se $b=0$ obtemos claramente o caso $(0,0)$. Se $b=2$, o $(0,2)$ trivialmente. Se $b=4$, poñendo a ecuación en módulo 3 obteriamos $1=1-2+1=0$, é dicir, non ten solución.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar un man!
