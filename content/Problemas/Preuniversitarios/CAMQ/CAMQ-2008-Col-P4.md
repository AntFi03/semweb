---
title: CAMQ-2008-Col-P4
description:
comments: true
draft: true
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Fácil
  - Probabilidade
date: 2026-04-09
without-solution: false
notas: revisar solución
author: Carla Dopazo Pavón
---
## Enunciado

Hai dúas cestas idénticas. Unha contén catro mazás vermellas e tres mazás verdes; a outra contén dúas vermellas e tres verdes. Alguén escolle unnha cesta ao chou. Sacas unha mazá da cesta.
- a) Cal é a probabilidade de que sexa unha mazá vermella?

Miras a mazá que sacasches e ves que é vermella. Ten moi boa pinta. Cómela; efectivamente, está deliciosa. A continuación, sacas unha segunda mazá da mesma cesta.
- b) Cal é a probabilidade de que sexa unha mazá vermella?

---

## Resolución

> [!solution1]- Solución
> - a) Sexa $R$ o evento "sacar unha mazá vermella", $A$ o evento "elixir a primeira cesta" e $B$ o evento "elixir a segunda cesta". Sabemos que $\mathbb{P}(A)= \mathbb{P}(B)= \frac{1}{2},$ e tamñen coñecemos as probabilidades condicionadas $\mathbb{P}(R|A)= \frac{4}{7}$ e $\mathbb{P}(R|B)= \frac{2}{5}.$ Buscamos $\mathbb{P}(R)$. Dado que $A$ e $B$ forman unha partición (a súa intersección é nula e cubren todo o espazo mostral), aplícase a fórmula da probabilidade total $$\mathbb{P}(R)= \mathbb{P}(R|A) \cdot \mathbb{P}(A) + \mathbb{P}(R|B) \cdot \mathbb{P}(B) = \frac{4}{7} \cdot \frac{1}{2} + \frac{2}{5} \cdot \frac{1}{2} = \frac{17}{35}.$$
> - b) A primeira cesta contiña unha maior proporción de mazás vermellas que a outra, polo feito de ter sacado unha mazá vermella aumenta a probabilidade de telo elixido. Empregemos a fórmula de Bayes para achar $\mathbb{P}(A|R),$ a probabilidade de que elixíramos a primeira cesta sabemos que acabamos de sacar unha mazá vermella é $$\mathbb{P}(A|R)= \frac{\mathbb{P}(R|A) \cdot \mathbb{P}(A)}{\mathbb{P}(R)} = \frac{\frac{4}{7} \cdot \frac{1}{2}}{\frac{17}{35}}= \frac{10}{17}. $$



---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
