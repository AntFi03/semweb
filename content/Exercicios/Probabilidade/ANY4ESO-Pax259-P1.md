---
title: ANY4ESO-Pax259-P1
description:
comments: true
draft: false
enableToc: true
tags:
  - Exercicio
date: 2026-04-22
without-solution: false
notas:
author: Carla Dopazo Pavón
---
## Enunciado

Extráense $3$ cartas con reemplazamento. Acha:
- a) $\mathbb{P}[\text{"As na 1ª e unha figura na 2ª e 3ª"}]$
- b) $\mathbb{P}[\text{"3 ases"}]$
- c) $\mathbb{P}[\text{"un as e dúas figuras"}]$
- d) $\mathbb{P}[\text{"ningún as"}]$

---

## Resolución

> [!solution1]- Solución por Carla Dopazo Pavón.
> Para a resolución destes apartados imos empregar que se só realizamos unha extracción, a $\mathbb{P}[\text{"sacar un as"}] = \frac{1}{10}$ e $\mathbb{P}[\text{"sacar unha figura"}]= \frac{3}{10}$ e que ao extraer as cartas *con* reemprazamento, ambos son sucesos son independentes. 
> - a) $\mathbb{P}[\text{"As na 1ª e unha figura na 2ª e 3ª"}] = \frac{1}{10} \cdot \frac{3}{10} \cdot \frac{3}{10} = \frac{9}{1000}.$
> - b) $\mathbb{P}[\text{"3 ases"}] = \frac{3}{10} \cdot \frac{3}{10} \cdot \frac{3}{10} = \frac{27}{1000}.$
> - c) Para este apartado temos que ter en conta que no suceso _sacar un as e dúas figuras_ non está establecida a orde, polo que os casos favorábeis serán tres: sacar o as de primeiro, de segundo e de terceiro. É dicir, os casos favorábeis serán $\{(A,F,F), (F,A,F), (F,F,A)\},$  sendo $F$ sacar unha figura e $A$ sacar un as. Así, $$\mathbb{P}[\text{"un as e dúas figuras"}] = \mathbb{P}[(A,F,F)] + \mathbb{P}[(F,A,F)] + \mathbb{P}[(F,F,A)]=$$$$=\frac{1}{10} \cdot \frac{3}{10} \cdot \frac{3}{10} + \frac{1}{10} \cdot \frac{3}{10} \cdot \frac{3}{10} + \frac{1}{10} \cdot \frac{3}{10} \cdot \frac{3}{10} = \frac{27}{1000}.$$
> - d) A probabiliade de escoller unha carta que non sexa un as é $1- \mathbb{P}[\text{"sacar un as"}] = \frac{9}{10}$. Polo tanto: $$\mathbb{P}[\text{"ningún as"}] = \frac{9}{10} \cdot \frac{9}{10} \cdot \frac{9}{10} = \frac{729}{1000}.$$



---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
