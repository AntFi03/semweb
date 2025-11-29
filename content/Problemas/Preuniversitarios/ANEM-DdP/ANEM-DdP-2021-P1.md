---
title: ANEM-DdP-2021-P1
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Asequible
  - TeoríaDeNúmeros
date: 2025-09-25
author: Javier Polo Noche
---
## Enunciado

Sexa $A$ a suma dos díxitos de $2021^{2021}$ (en notación decimal) e $B$ a suma dos díxitos de $A$. Calcula razoadamente o valor ou os posibles valores de $C$, a suma dos díxitos de $B$.

---

## Resolución

> [!solution2]- Solución
> Tense que $2021^{2021}\equiv A\equiv B\equiv C \ (\bmod \ 9)$, e $2021\equiv 5 \ (\bmod \ 9)$, logo $2021^{2021}\equiv 5^{2021} \ (\bmod \ 9)$. Por outra banda, $5^6\equiv 1 \ (\bmod \ 9)$, polo que $5^{2021}\equiv 5^5\cdot 5^{2016}\equiv 5^5\equiv 2 \ (\bmod 9).$ Isto permítenos saber os posíbeis valores de $C$. Agora debemos descartar cales non poden ser. Para iso, cómpre decatarse de que a suma dos díxitos dun número de $n$ cifras (en notación decimal) é menor ou igual ca $9n$. Deste xeito, $2021^{2021}<10^{4^{2021}}$, polo que a súa suma de cifras é menor que $9\cdot (4\cdot 2021)<10^6$. Así, $B< 9\cdot 6=54$, polo que $C\leq 4+9=13$ (do número 49). É dicir, $C=2$ ou $C=11$. Con isto sería suficiente. Computacionalmente podería comprobarse que $C=2$.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
