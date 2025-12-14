---
title: SPGISMOC-C2-E12
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Accesible
  - Xeometría
date: 2025-12-14
without-solution: false
notas:
author: Héctor Folgar Cameán
---
## Enunciado

 Dado un triángulo $\Delta ABC$, consideremos o punto medio $M$ de $AB$ e un punto calquera $D$ do interior de $AC$ non sendo o punto medio. Sea $E$ o punto de corte da extensión de $BD$ coa recta paralela a $AB$ que pasa por $C$. Demostra que $AE,BC$ e $MD$ son concurrentes.

---

## Resolución

> [!pista]-
> *Teorema de Ceva:* Dado un triángulo $\Delta ABC$, sexan $D,E,F$ puntos no interior nos lados $AB,AC$ e $BC$ respectivamente, tal que $CD, BE$ e $AF$ son concurrentes (é decir, se extendemos os segmentos, intersecan nun único punto). Entón:
> $$
> \dfrac{AD}{DB}\dfrac{BF}{FC}\dfrac{CE}{EA}=1.$$
> _Cómpre ter en conta que $MN$ pode representar tanto o segmento que une os puntos como a lonxitude deste: é un abuso de notación moi común._

> [!solution2]- Solución
> 
> ![[geo1p1.png|330]]
> Demostrar que $AE,BC$ e $MD$ son concurrentes é equivalente a demostrar que, se extendemos os segmentos, intersécanse nun único punto.
>     
> Consideremos $AE$ e $BC$. Estes segmentos no son paralelos. Polo tanto, se extendemos os segmentos, intercaranse nun único punto, chamémoslle $G$.
> 
> Sexa $M'$ a intersección de $GD$ e $AB$, posiblemente extendidos. Podemos definir este punto porque estas rectas non son paralelas.
> 
> Demostraremos que $M'=M$. Esto implica por construcción que $AE,BC$ e $MD$ son concurrentes, polo que teríamos resolto o problema.
> ![[geo1p2.png|330]]
> Apliquemos o Teorema de Ceva ó triángulo $\Delta ABG$ sobre os puntos $M',C$ e $E$, obtendo
>  $$
>   \dfrac{AM'}{M'B}\dfrac{BC}{CG}\dfrac{GE}{EA}=1.
>   $$
> Os triángulos $\Delta ABG$ e $\Delta ECG$ son congruentes, xa que comparten o punto $G$ e os respectivos lados opuestos son paralelos pola construcción do punto $E$, polo que
> $$
>         \dfrac{GA}{GE}=\dfrac{BG}{CG} \iff \dfrac{GE+EA}{GE}=\dfrac{BC+CG}{CG} \iff\\ \dfrac{EA}{GE}+1=\dfrac{BC}{CG}+1 \iff \dfrac{EA}{GE}=\dfrac{BC}{CG} \iff \dfrac{BC}{CG}\dfrac{GE}{EA}=1.$$
> Concluimos que
> $$
>             \dfrac{AM'}{M'B}\dfrac{BC}{CG}\dfrac{GE}{EA}=\dfrac{AM'}{M'B},$$
> e por ende $M'$ é o punto medio de $AB$, é dicir, $M'=M$.
> 
> *Nota:* Podedes xogar un pouco con esta configuración xeométrica no seguinte [proxecto de Geogebra.]( https://www.geogebra.org/m/smtuzjqy)


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
