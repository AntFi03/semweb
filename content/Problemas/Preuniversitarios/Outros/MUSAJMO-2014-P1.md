---
title: MUSAJMO-2014-P1
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - XogosDeEstratexia
  - Asequible
date: 2025-11-20
without-solution: false
---
## Enunciado
 Alice e Bob xogan un xogo. Hai un montón de $n \geq 1$ pedras. En cada turno, o respectivo xogador pode quita pedras do montón. Alice pode quitar potencias de 2 ($\{1,2,4,8,\dots\}$) e Bob, potencias de 4 ($\{1,4,16,\dots\}$). A persoa que quita a última pedra gaña. Se Alice xoga o primeiro turno, ¿quen ten unha estratexia gañadora?

---

## Resolución
> [!pista]-
> Alice ten unha estratexia gañadora, que se basea en obrigar a Bob a xogar sempre con un montón impar de pedras.

 > [!solution2]- Solución
> Consideremos os casos con $n$ pequeno:
>  - Se $n=1$, obviamente gaña Alice.
>  - Se $n=2$, de novo gaña Alice.
>  - Se $n=3$, Alice retira unha pedra, obrigando a Bob a retirar só unha pedra. Finalmente Alice retira a pedra final, polo que gaña.
> Vexamos que para todo $n$, Alice ten unha estratexia gañadora. A clave será obrigar a Bob a que xogue sempre cun número impar de pedras, facendo que nunca poida gañar retirando máis dunha pedra nunha quenda.
> Agora ben, a priori esta estratexia deixa aberta a posibilidade de que Bob gañe retirando unha única pedra, polo que deberemos estudar esta situación en profundidade. Estudaremos dous casos por separado.
> **Caso 1: $n>2$ par.**
> A estratexia **xeral** de Alice é a seguinte: no primeiro turno, retira unha pedra. En calquera outro turno, se Bob retira unha pedra Alice fará o mesmo, e se Bob retira un número par de pedras Alice retirará 2.
>  Como Bob sempre se atopa cun montón dun número impar de pedras, a única forma de gañar é encontrándose cunha única pedra. Debido á estratexia presentada, no turno inmediatamente anterior Alice atopou 2 o 3 pedras necesariamente.
> Agora ben, debido á análise previamente realizada para valores de $n$ pequenos, sabemos que nestas dúas situacións Alice sempre pode gañar. Se Alice se atopa con 2 pedras, simplemente as retira e gaña ela. Se hai 3 pedras, retira só unha, obrigando a Bob a que retire outra pedra e así finalmente Alice retirará a última.
> 
> **Caso 2: $n>3$ impar**
> Neste caso a estratexia é moi similar, xa que só cambia o inicio: no primeiro turno, Alice retira **dúas pedras**. En calquera outro turno, se Bob retira unha pedra Alice fará o mesmo, e se Bob retira un número par de pedras Alice retirará 2.
> De novo Bob sempre se encontrará cun número impar de pedras, polo que a única forma de gañar é que só haxa unha pedra restante. A mesma análise que no caso 1 garántenos que Alice sempre pode evitar esta situación, gañando ela.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
