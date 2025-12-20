---
title: CPMSOC-Geom-Work2-Week5-Term3-2021
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Xeometría
  - Accesible
date: 2025-12-20
without-solution: false
notas:
author: Héctor Folgar Cameán
---
## Enunciado

 Dado $\triangle ABC$, definimos os puntos $D,E \in BC$ tal que $AD$ é unha altura e $AE$ a bisectriz do ángulo $A$. Definimos ademáis $M \in AE$ tal que $BM$ é perpendicular a $AE$ e $N \in AC$ tal que $EN$ é perpendicular a $AC$.
Demostra que os puntos $D,M,N$ son colineais.

---

## Resolución

> [!pista]-
>  Primeiro, busca dous cuadriláteros cíclicos na figura. Despois, \textit{traduce} a condición "$D,M,N$ son colineais" en términos de ángulos (existen varias posibilidades, pode traducirse dunha forma distinta á expuesta na solución). Por último, verifica que se cumpre tal condición buscando ángulos, axudándonos dos cuadriláteros cíclicos obtidos.

> [!solution2]- Solución
>  Enunciado do problema:
> ![[ciclycquad1.png]]
> O primeiro paso será encontrar algún cuadrilátero cíclico. Estudando ángulos podemos atopar dous cuadriláteros cíclicos:
> $$
>  \angle ADB = \angle AMB = 90^{\circ} \implies ABDM \text{ es un cuadrilátero cíclico,}\\
> \angle ADE + \angle ANE = 90^{\circ}+90^{\circ}=180^{\circ} \implies ADEN \text{ es un cuadrilátero cíclico.}$$
> Graficamente:
>         ![[ciclycquad2.png]]
> Nótese que podemos reescribir en termos de ángulos a condición a probar (non é a única forma):
> $$
>             ,M,N \text{ colineales} \iff \angle BDM + \angle NDC = 180^{\circ}.
> $$
> Vamos probar esta condición simplemente buscando os ángulos involucrados, utilizando as propiedades dos cuadriláteros cíclicos. Sea $\alpha:=\dfrac{1}{2}\angle BAC=\dfrac{1}{2}A$, entón:
> - $AE$ bisectriz de $A \implies \angle BAE = \angle CAE = \alpha$,
> -  $ABDM$ cuadrilátero cíclico $\implies \angle BDM=180^{\circ}- \angle BAM = 180^{\circ}-\angle BAE=180^{\circ}-\alpha$,
> -  $ADEN$ cuadrilátero cíclico $\implies \angle NDC = \angle NDE = \angle NAE = \alpha$.
> Por tanto $\angle BDM + \angle NDC = 180^{\circ}-\alpha+\alpha=180^{\circ}$, tal como queríamos demostrar.
> 
> Como no exercicio de práctica do teorema de Ceva, podedes xogar con esta configuración no [seguinte enlace.](https://www.geogebra.org/m/humkdsbx). Ao mover os vértices un pouco, rapidamente aparecen configuracións que poden parecer un tanto estrañas, por exemplo nas que o punto $N$ non estea sobre o lado, senón sobre a extensión do lado. En xeral temos que ter coidado con estas cousas, pero nrste exercicio salvamos porque simplemente usamos cuadriláteros cíclicos e ángulos, e iso non necesita ningunha condición previa.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
