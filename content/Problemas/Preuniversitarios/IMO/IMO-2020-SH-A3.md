---
title: IMO-2020-SH-A3
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Análise
  - Desigualdades
  - Accesible
date: 2025-12-03
without-solution: false
notas:
author: Inácio Suárez Camiña
---
## Enunciado

Sexan $a,b,c,d\in\mathbb{R}^+$ tales que $(a+c)(b+d)=ac+bd$. Atopa o valor mínimo posible de
$$S=\frac{a}{b}+\frac{b}{c}+\frac{c}{d}+\frac{d}{a}$$

---

## Resolución
> [!pista]- 
> Intenta usar a desigualdade aritmético-xeométrica (AM-GM) de xeito que podas aproveitar a condición sobre $a,b,c,d$.

> [!solution2]- Solución
> Aplicando AM-GM,
> 
> $$\frac{a}{b}+\frac{b}{c}+\frac{c}{d}+\frac{d}{a} \geq 2 \frac{\sqrt{ ac }}{\sqrt{ bd }}+2 \frac{\sqrt{ bd }}{\sqrt{ ac }}=\frac{2(ac+bd)}{\sqrt{ abcd }}$$
> 
> Agora podemos usar que $(a+c)(b+d)=ac+bd$
> 
> $$\frac{2(ac+bd)}{\sqrt{ abcd }}=\frac{2(a+c)(b+d)}{\sqrt{ abcd }} \geq 2 \frac{2\sqrt{ ac }\cdot 2\sqrt{ bd }}{\sqrt{ abcd }}=8$$
>
> Para volver as desigualdades igualdades, necesitamos que $a=c$ e $b=d$, polo que $(a+c)(b+d)=ac+bd$ pasa a ser $4ab=a^2+b^2$, que se pode transformar en $4 \frac{a}{b}=\left( \frac{a}{b} \right)^{2}+1$ e que é certa se e só se $\frac{a}{b}=2 \pm \sqrt{ 3 }$. Así, tomando $a=c=1$ e $b=d=2+\sqrt{ 3 }$, $S=8$, alcanzando o seu mínimo valor posible. 

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
