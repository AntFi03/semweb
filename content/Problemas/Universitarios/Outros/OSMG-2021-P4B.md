---
title: OSMG-2021-P4B
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Universitario
  - Accesible
  - Combinatoria
  - Probabilidade
date: 2025-12-12
without-solution: false
notas:
author: Javier Polo Noche
---
## Enunciado

   Temos dúas caixas con $N$ bólas numeradas do 1 ao $N$ en cada unha. Imos extraendo simultaneamente bólas unha a unha das dúas caixas, sen devolvelas, ata baleirar as caixas. 
   - Atopar a probabilidade de que en ningunha das extraccións os números das bólas coincidan.
   - Atopar o límite da devandita probabilidade cando $N$ vai a infinito.

---

## Resolución

> [!solution2]- Solución
> Se pensamos nas posibles ordenacións que pode haber para extraer as bólas da primeira caixa, que son $N!$ en total, é obvio que todas resultan equiprobables. Polo tanto, poderemos resolver o problema (sen perda da xeralidade) supoñendo fixada unha certa ordenación na extracción das bólas da primeira caixa.
> $A_i, i\in\{1,\dots,N\}$ denotará ao suceso consistente en que haxa coincidencia na extracción $i$. A probabilidade de que isto aconteza é $p(A_i)=\frac{(N-1)!}{N}=\frac{1}{N}$ (as posibilidades calcúlanse como todas as que ''fixando'' a coincidencia na extracción $i$, quedando por ''decidir'' $N-1$ extraccións). $B=A_1\cup A_2\cup \cdots A_N$ representa o suceso no que haxa polo menos unha coincidencia na extracción. Podemos ir calculando analogamente as seguintes probabilidades:
> - Se $i\neq j$, $p(A_i\cap A_j)=\frac{(N-2)!}{N}=\frac{1}{N(N-1)}$.
> - Se $i,j,k$ son distintos, $p(A_i\cap A_j\cap A_k)=\frac{1}{N(N-1)(N-2)}$.
> - $\vdots$
> - $p(A_1\cap A_2\cap \cdots A_N)=\frac{(N-(N-0))!}{N!}=\frac{1}{N!}$.
> Polo Principio de Inclusión-Exclusión, $p(B)={N\choose 1}\frac{1}{N}-{N\choose 2}\frac{1}{N(N-1)}+{N\choose 3}\frac{1}{N(N-1)(N-2)}+\cdots +(-1)^N{N\choose N-1}\frac{1}{N(N-1)(N-2)\cdots 3\cdot 2}+(-1)^{N+1}{N\choose N}\frac{1}{N!}=1-\frac{1}{2!}+\frac{1}{3!}-\frac{1}{4!}+\cdots +(-1)^N{N\choose N-1}\frac{1}{N(N-1)(N-2)\cdots 3\cdot 2}+(-1)^{N+1}{N\choose N}\frac{1}{N!}.$
> Do anterior deducimos o primeiro apartado, que será $p(\overline{B})=\frac{1}{2!}-\frac{1}{3!}+\frac{1}{4!}-\cdots +(-1)^N{N\choose N-1}\frac{1}{N(N-1)(N-2)\cdots 3\cdot 2}+(-1)^{N+1}{N\choose N}\frac{1}{N!}.$
> O segundo apartado podémolo deducir pola fórmula do Polinomio de Taylor: $e^{-1}=1-\frac{1}{1!}+\frac{1}{2!}-\frac{1}{3!}+\cdots=\frac{1}{2!}-\frac{1}{3!}+\cdots$, que é precisamente o que buscamos no límite.



---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
