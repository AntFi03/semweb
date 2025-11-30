---
title: CGMO-2003-I-P2
description: Proposto por Chen Yonggao
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - XogosDeEstratexia
  - Accesible
date: 2025-10-03
author: Carla Dopazo Pavón
---
## Enunciado
Hai 47 estudantes nunha clase cos asentos colocados en 6 filas x 8 columnas, onde o asento na fila $i$ e na columna $j$ é denotado por $(i,j)$. Agora, unha recolocación dos estudantes é feita no inicio do novo curso. Para un estudante co asento orixinal $(i,j)$, se o seu novo asento é $(m,n)$, dicimos que se moveu $[a,b]= [i-m, j-n]$ e definimos o valor da posición do estudante coma $a+b$. Denotaremos coma $S$ a suma dos valores das posicións de todos os estudantes. Determina a diferenza entre o maior e o menor posíbel valor de $S$.

---

## Resolución

> [!solution2]- Solución
> Engadimos un estudante virtual $A$ para que todos os sitios estean ocupados por exactamente un estudante. Denotemos $S'$ a suma dos valores da posición nesta situación. Fixémonos en que o intercambio de dous estudantes de asentos adxacentes non varía o valor de $S'$. 
> Todos os estudantes poden volver ao seu asento orixinal cun número finito de intercambios con estudantes adxacentes. Así, $S'=0$. 
> Dende que $S'= S +a_A+b_A$, onde $a_A+b_A$ é o valor da posición do estudante $A$, entón temos que $S$ é maior cando o estudante $A$ ocupa o asento $(1,1)$, e $S$ é menor cando o ocupa o $(6,8)$. Así a diferenza entre o maior e o menor valor de $S$ é 12. 
> $\textit{Nota: Na solución oficial pón 14}$.

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
