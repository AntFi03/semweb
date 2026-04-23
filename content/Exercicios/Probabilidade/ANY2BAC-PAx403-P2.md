---
title: ANY2BAC-PAx403-P2
description:
comments: true
draft: false
enableToc: true
tags:
  - Exercicio
date: 2026-04-23
without-solution: false
notas:
author: Carla Dopazo Pavón
---
## Enunciado

Extráese unha bóla dun recipiente con 3 bólas verdes, 2 vermellas e unha negra para introducila noutro con 2 bólas negras, unha verde e outra vermella. 
a) Sabendo que a segunda bóla foi negra, cal é a probabilidade de que a primeira tamén o fose?
b) Sabendo que a segunda bóla foi vermella, cal é a probabilidade de que a primera fose negra?
c) Cal é a probabilidade de que a primeira fose verde sendo verde a segunda?

---

## Resolución

> [!solution1]- Solución por Carla Dopazo Pavón
> Para estes apartados, imos empregar a fórmula da probabilidade condicionada de Bayes:
> $$\mathbb{P}[A |B]= \frac{\mathbb{P}[A \cap B]}{\mathbb{P}[B]}$$
> a) Sabemos que a probabilidade de que ambas sexan negras (tendo en conta que existen dous casos: coller ou non unha negra na primeira extracción) é de:
> $$\mathbb{P}[\text{"A segunda é negra"}]= \frac{1}{6} \cdot \frac{3}{5} + \frac{5}{6} \cdot \frac{2}{5} = \frac{13}{30}.$$
> $$\mathbb{P}[\text{"Ambas son negras"}]= \frac{1}{6} \cdot \frac{3}{5}= \frac{1}{10}.$$
> Polo tanto empregando a fórmula de Bayes:
> $$\mathbb{P}[\text{"A primeira é negra | A segunda é negra"}]= \frac{\frac{1}{10}}{\frac{13}{30}}= \frac{3}{13}.$$
> b) Seguimos calculando as probabilidades, sabendo que temos que distinguir casos no cálculo da probabilidade de "extraer unha bóla vermella na segunda extracción".
> $$\mathbb{P}[\text{"A segunda é vermella"}]= \frac{2}{6} \cdot \frac{2}{5} + \frac{4}{6} \cdot \frac{1}{5}= \frac{8}{30}.$$
> $$\mathbb{P}[\text{"A primera é negra e a segunda, vermella"}]= \frac{1}{6} \cdot \frac{1}{5} = \frac{1}{30}.$$
> Polo tanto,
> $$\mathbb{P}[\text{"A primeira é negra | A segunda é vermella}]= \frac{\frac{1}{30}}{\frac{8}{30}}= \frac{1}{8}.$$
> c) Calculamos analogamente este apartado.
> $$\mathbb{P}[\text{"A segunda é verde"}]= \frac{3}{6} \cdot \frac{2}{5} + \frac{3}{6} \cdot \frac{1}{5} = \frac{9}{30}.$$
> $$\mathbb{P}[\text{"Ambas son verdes"}]= \frac{3}{6} \cdot \frac{2}{5}= \frac{6}{30}.$$
> $$\mathbb{P}[\text{"A primera é verde | A segunda é verde}]= \frac{\frac{6}{30}}{\frac{9}{30}}= \frac{2}{3}.$$



---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
