---
title: SK-Fin-2022-P1
description:
comments: true
draft: true
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Fácil
  - XogosDeEstratexia
date: 2025-12-20
without-solution: false
notas: revisar solución
author: Carla Dopazo Pavón
---
## Enunciado

Que tamaños de cadrados de lado enteiro poden ser cubertos completamente, sen superposición, por pezas idénticas formadas por tres cadrados unitarios unidos en forma de L (tridominós en L)?
![[Pasted image 20251220173417.png]]


---

## Resolución

> [!solution1]- Solución
> Requírese que o número total de cadrados unitarios sexa divisible entre $3$, polo que quedan excluídos todos os cadrados cuxo lado non sexa divisíbel entre $3$. 
> Un cadrado de lado $3$ non se pode cubrir, porque se necesitan exactamente tres pezas e cada peza pode cubrir como máximo un dos catro vértices. 
> Un cadrado de lado $6$ podemos cubrilo construíndo seis rectángulos de lados $2$ e $3$ con dúas pezas cada un. Así, tamén podemos construír todos os cadrados cuxo lado sexa un múltiplo de $6$, cubríndoos con cadrados idénticos de lado $6$. Falta ver os múltiplos impares de $3$. O primeiro é o $9$. Podemos cubrilo, por exemplo, así:
> 
> ![[Pasted image 20251220173501.png]]
> 
> Un múltiplo impar de $3$ maior que $9$ pode escribirse como $9+6n$ para algún $n$. Xa que podemos cubrir un rectángulo de lados $9$ e $6n$ con rectángulos de lados $2$ e $3$, agora podemos cubrir todos os cadrados cuxo lado sexa un múltiplo impar de $3$, excepto o $3$. En resumo, podemos cubrir precisamente os cadrados cuxo lado sexa $3n$ onde $n>1$.



---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
