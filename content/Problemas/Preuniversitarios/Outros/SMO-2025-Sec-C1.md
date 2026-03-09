---
title: SMO-2025-Sec-C1
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Combinatoria
  - Accesible
date: 2025-12-06
without-solution: false
notas:
author: Carla Dopazo Pavón
---
## Enunciado 

Sexa $n$ un enteiro positivo. Pingo o pingüín e os seus $n$ amigos pingüíns están pescando salmóns. Todo pingüín ten como moito $n$ salmóns, e non hai dous pingüíns co mesmo número de salmóns. De cantas formas poden os $n+1$ pingüíns  formar grupos de tamaño arbitrario tal que en cada grupo haxa exactamente $n$ salmóns?

---

## Resolución

> [!solution2]- Solución
> Probaremos o seguinte: se $n$ é impar, hai $\frac{n+1}{2}$ reparticións posíbeis e se $n$ é par, non é posíbel realizar unha repartición. 
> Cada pingüín ten entre $0$ e $n$ salmóns. Como hai exactamente $n+1$ enteiros nese intervalo e $n+1$ pingüíns, sempre existe un único pingüín con $i$ salmóns $\forall i \in \{0, \dots, n\}$. Chamaremos a este pingún o "pingüín i-ésimo", denotado por $P_{i}$. Así, podemos calcular o número de salmóns total:
> $$0+1+2+\dots +n = \frac{(n+1)n}{2}.$$
> Así que se repartimos estes salmóns en $k$ grupos con $n$ salmóns cada un, o número $k$ debería ser
> $$k= \frac{\frac{(n+1)n}{2}}{n}= \frac{n+1}{2}.$$
> Claramente o número de grupos debe ser un número enteiro, é dicir, que estes grupos non poden formarse se $n+1$ é impar, o que equivale a que $n$ sexa par.
> Para o caso no que $n$ é impar, ignoraremos ao 0-ésimo pingüín, xa que pode ser incluído en calquera grupo sen modificar a cantidade de salmóns deste. Tamén, o $n$-ésimo pingüín formará el só un grupo sempre, xa que se engadimos outro pingüín haberá máis de $n$ salmóns. 
> Probaremos agora por indución, comezando con $k=n-1$ até $k=\frac{n+1}{2}$, que cada grupo que teña ao pingüín $P_k$ estará conformado unicamente por $P_k$ e $P_{n-k}$.
> **Caso base:** Como $P_{n-1}$ ten exactamente $n-1$, só hai un pingüín que pode estar no mesmo grupo que el é $P_1$.
> **Paso de indución:** Como pola hipótese de indución os pingüins $P_{n+1}, \dots, P_{k+1}$ e $P_{1}, P_{n-k-1}$ xa están en grupos completos, o único pingüín que pode estar no mesmo grupo que $P_k$ que non teña grupo e que non teña demasiados salmóns é $P_{n-k}$. Así que $P_k$ e $P_{n-k}$ deberán formar un grupo.
> Resumindo, temos que se deben formar os seguintes $\frac{n+1}{2}$ grupos:
> $$\{P_{n}\}, \{P_{n-1},P_{1}\}, \{P_{n-2},P_{2}\},\dots, \left\{ P_{\frac{n+1}{2}}, P_{\frac{n-1}{2}}\right\}.$$
> O único que queda por facer é contar todas as formas nas que podemos incorporar a $P_0$ aos grupos. $P_0$ non pode formar o seu propio grupo, así que temos que engadilo a un xa formado, como non cambia a cantidade de salmóns deste, será un grupo válido. Hai $\frac{n+1}{2}$ grupos, polo que hai $\frac{n+1}{2}$ posíbeis reparticións despois de engadir $P_0$.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
