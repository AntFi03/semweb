---
title: CAMQ-1998-Col-P4
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Fácil
  - Probabilidade
  - Combinatoria
date: 2025-10-08
author: Carla Dopazo Pavón
---
## Enunciado
 Un xurado está conformado por tres xuíces. Dous deles son igualmente competentes: teñen unha probabilidade de $p>\frac{1}{2}$ de tomar a decisión correcta (condenar ao culpábel ou absolver ao inocente). O terceiro xuíz é un ''cara ou cruz'': establece a súa decisión en función do resultado do lanzamento dun céntimo. A decisión do xurado é a da maioría simple (2 a 1 ou 3 a 0). Cal é a probabilidade de que o xurado tome unha boa decisión? 

---

## Resolución

> [!solution1]- Solución
> Sexa $q=1-p$, e $D_1, D_2, D_3$ as tres decisións dos xuíces (o do "cara ou cruz" será o terceiro). Cada $D_i$ será ou un E (éxito) ou F (fracaso), polo que a decisión será correcta se e só se 
> $$(D_1,D_2,D_3) \in \{(E,E,E), (E,E,F), (E,F,E), (F,E,E)\}.$$
> Entón a probabilidade de tomar unha boa decisión é
> $$P = pp\frac{1}{2}+pp\frac{1}{2}+pq\frac{1}{2}+qp\frac{1}{2} = p^2 +pq = p(p+q) = p.$$

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
