---
title: PPFRJ-001
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Universitario
  - Intrincado
  - Topoloxía
date: 2025-12-12
without-solution: false
notas:
author:
---
## Enunciado

 Demostrar que existen infinitos números primos empregando ideas topolóxicas.

---

## Resolución

> [!solution3]- Solución
>  Para cada $a, b$ números enteiros con $b \neq 0$ consideramos o subconxunto de $\mathbb{Z}$:
> $a+b \mathbb{Z}=\{\ldots, a-2 b, a-b, a, a+b, a+2 b, \ldots\}$ e a clase $\mathcal{B}$ de subconxuntos de $\mathbb{Z}: \mathcal{B}=\{a+b \mathbb{Z}: a, b \in \mathbb{Z}, b \neq 0\}$, é dicir $\mathcal{B}$ é a clase de todas as progresións aritméticas non constantes en $\mathbb{Z}$. Dado que $a+b \mathbb{Z}=a-b \mathbb{Z}$ tamén podemos supoñer que $b>0$. Vexamos que $\mathcal{B}$ cumpre as dúas coñecidas condicións para formar base dunha topoloxía en $\mathbb{Z}$.
> - Como $0+1 \mathbb{Z}=\mathbb{Z}$ se verifica trivialmente que $\mathbb{Z}$ es unión de elementos de $\mathcal{B}$.
> - Sean $a+b \mathbb{Z}$ y $a^{\prime}+b^{\prime} \mathbb{Z}$ elementos de $\mathcal{B}$ y $c \in(a+b \mathbb{Z}) \cap\left(a^{\prime}+b^{\prime} \mathbb{Z}\right)$, entonces $a+b \mathbb{Z}=c+b \mathbb{Z}$ y $a^{\prime}+b^{\prime} \mathbb{Z}=c+b^{\prime} \mathbb{Z}$.
> Se $d$ é o mínimo común múltiplo de $b$ e $b^{\prime}$ é claro que $c \in c+d \mathbb{Z} \subset(c+b \mathbb{Z}) \cap\left(c+b^{\prime} \mathbb{Z}\right)$. Concluímos logo que $\mathcal{B}$ é base para unha topoloxía $\mathcal{T}$ en $\mathbb{Z}$.
> 
> Para cada primo $p$ o subconxunto de $\mathbb{Z}$,
>     $$F_p=\mathbb{Z}-((1+p \mathbb{Z}) \cup(2+p \mathbb{Z}) \cup \ldots \cup((p-1)+p \mathbb{Z})) $$
> é pechado pois é o complementario dunha unión de abertos (que é abierto). Sexa agora $F=\bigcup_p F_p$ onde $p$ varía no conxunto dos números primos. Se só existise un número finito de primos, entón $F$ sería unión finita de pechados e polo tanto, pechado. Dado que $F_p=p \mathbb{Z}$ todo enteiro $k \neq \pm 1$ pertenece a algún $F_p$, é dicir $\mathbb{Z}-F=\{-1,1\}$. Pero claramente $\{-1,1\}$ non é aberto por non ser unión de progresións aritméticas non constantes e polo tanto $F$ non é pechado.
> 
> Polo tanto, da hipótese de existir so un número finito de primos chegamos ao absurdo de que existe un conxunto $F$ nuna topoloxía $\mathcal{T}$ que é á vez pechado e non pechado. Conclúese entón que existen infinitos números primos.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
