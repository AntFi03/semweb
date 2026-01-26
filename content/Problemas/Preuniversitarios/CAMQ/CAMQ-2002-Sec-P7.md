---
title: CAMQ-2002-Sec-P7
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Fácil
  - XogosDeEstratexia
date: 2025-10-08
author: Carla Dopazo Pavón
---
## Enunciado
Rempraza as letras por número do 0 ao 9 na seguinte ecuación: $$JEUDI \cdot 13 = SEMAINE$$De forma que cada letra teña unha cifra diferente (se é a mesma letra ten o mesmo valor, é dicir, todos os E teñen o mesmo valor) e o número non pode comezar por 0.

---

## Resolución

> [!solution1]- Solución
 Como cada letra será unha cifra distinta podemos dicir que $JEUDI \leq 98765$ , polo que $SEMAINE \leq 98765 \cdot 13 = 1283945$, polo que $S=1$. Polo mesmo argumento $E\leq 2$, entón pode ser $E=0$ ou $E=2$. 
 >
> Se vemos na multiplicación, se $E=0$, inmediatamente $I=0$, e como non poden coincidir $E=2$. Se $J\leq 8$, entón $J2UDI\leq82976$ e
> $$12MAIN2 \leq 82976 \cdot 13 = 1078688.$$
> Chegando a unha contradición, polo que $J=9$. Repetimos o argumento anterior
> $$92UDI\leq 92876 \rightarrow 12MAIN2\leq 1207388.$$
> Do cal deducimos que $M=0$. Ademais, se facemos a multiplicación, $I=4$, porque é o único valor posíbel que multiplicado por 3 remata en 2:
> $$02UD4 \cdot 13= 120A4N2.$$

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
