---
title: ANY2ESO- Pax303- P3
description:
comments: true
draft: false
enableToc: true
tags:
  - Exercicio
date: 2026-04-09
without-solution: false
notas:
author: Carla Dopazo Pavón
---
## Enunciado

Gatos e cans nun refuxio de animais:

|         | Gatos | Cans |
| ------- | ----- | ---- |
| San     | 12    | 17   |
| Enfermo | 4     | 7    |
Tomando un ao chou, calcula a probabilidade de que:
- a) Sexa can.
- b) Está enfermo.
- c) Sexa un gato san.
- d) Sabendo que está enfermo, que sexa gato.

---

## Resolución

> [!solution1]- Solución por Carla Dopazo Pavón
> Para resolver este problema empregaremos a fórmula de probabilidade de Lagrange.
> _Casos totais para a), b) e c):_ Calculemos cantos animais hai en total, sumando todas as categorías (xa que non hai ningún animal que estea á vez en dúas ou maís categorías da táboa). É dicir hai $12+17+4+7= 40$ casos totais.
> Vexamos agora os _casos favorábeis_ en cada apartado. 
> a) Calculemos cantos cans hai, para iso sumaremos os cans enfermos e os sans, é dicir $17 + 7 = 24$ cans. Polo que
> $$\mathbb{P}(\text{"Escoller un can"})= \frac{24}{40} = \frac{3}{5}.$$
> 
> b) Vexamos agora cantos animais están enfermos, polo que sumamos o número de cans enfermos e de gatos enfermos, obtendo $4+7= 11$ animais enfermos. Asi,
> $$\mathbb{P}(\text{"Escoller un enfermo"})= \frac{11}{40}.$$
> 
> c) Para os gatos sans, podemos obter os datos directamente da táboa. Obtemos así
> $$\mathbb{P}(\text{"Escoller un gato san"})= \frac{12}{40} = \frac{3}{10}.$$
> 
> d) Para este apartado hai que ter en conta que condicionan os _casos totais_ ao dicirnos que sabemos que está enfermo. Isto quere dicir que sabemos que estamos escollendo un animal enfermo, polo que os _casos totais_ son $11$.
> Por outra banda, para os _casos favorábeis_, simplemente temos que coller o número de gatos enfermos polo tanto,
> $$\mathbb{P}(\text{"Escoller un gato sabendo que o animal está enfermo"})= \frac{4}{11}.$$
> 

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
