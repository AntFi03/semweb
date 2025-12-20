---
title: Th-Gersonides
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Fácil
  - TeoríaDeNúmeros
date: 2025-12-20
without-solution: false
notas:
author: Ibai Otero Gómez
---
## Enunciado

As únicas potencias de $2$ e $3$ que son consecutivas son $(1,2),(2,3),(3,4),(8,9)$.

---

## Resolución

> [!pista]-
>   Traballar módulo $8$.


> [!solution1]- Solución
>  Hai que estudar a ecuación diofántica $2^x=3^y \pm 1$. Consideremos primeiro o caso co signo máis. Reducindo módulo 8 vemos que o lado dereito da igualdade só pode valer dous e catro, mentres que o lado esquerdo vale $0$ para todo $x\geq 3$. Comprobando estos casos obtemos as solucións para potencias consecutivas $(x,y) = (1,0), (2,1)$. 
> Pola contra, se temos a ecuación $2^x=3^y - 1$. Traballando módulo $8$ xa vimos que $3^2 = 1$. Distinguimos pois dous casos:
> -  Se $y=2k+1$, $k\in\mathbb{N}$ $$3^y-1 = 3^{2k+1}-1 = 3^{2k} \cdot 3 -1 = 2 \text{ (mod 8)}$$
> e como antes só pode ser que $x=0,1,2$. Comprobando obtemos a solución $(1,1)$.
> -  Se $y=2k$, $k\in\mathbb{N}$ $$
>             3^y-1 = (3^k)^2-1 = (3^k-1)(3^k+1) 
>             $$
> Como buscamos que isto sexa unha potencia de dous, cada factor debe ser unha potencia de dous. En particular, $3^k+1=2^r$ con $r\in\mathbb{N}$. Pero as solucións desta ecuación xa as temos estudado antes e corresponden a $(r,k) = (1,0),(2,1)$. O primeiro caso resulta en $y=0$ que implica $2^x = 0$ o cal non é posible. No outro caso obtemos a última solución $(x,y)=(3,2)$.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
