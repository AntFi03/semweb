---
title: CAMQ-2022-Col-P2
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Combinatoria
  - Fácil
  - Probabilidade
date: 2025-10-08
author: Carla Dopazo Pavón
---
## Enunciado
Unha caixiña de bombóns contén 4 trozos de chocolate colocados un ao lado doutro en fila. Hai varias seleccións de sabores para os bombóns. Cada caixa faise seleccionando ao chou o sabor de cada bombón. Calcula o número mínimo de sabores que garante que haxa polo menos unha probabilidade de 0.512 de que non haxa dous bombóns do mesmo sabor tocándose. 

---

## Resolución
  > [!solution1]- Solución
> Sexa S o número de sabores dispoñíbeis, ao haber 4 chocolates, temos 3 lugares onde se tocan. Posto que a probabilidade de que dous chocolates non sexan do mesmo sabor é de $\frac{S-1}{S}$, entón a probabilidade golbal será:
>    $$P= (\frac{S-1}{S})^3$$
>    Polo qu aplicando a desigualdade:
>    $$P\geq 0.512 \Longrightarrow (\frac{S-1}{S})^3 \geq \frac{64}{125} \Longrightarrow 1-\frac{1}{S} \geq \frac{4}{5} \Longrightarrow S \geq 5$$

 

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
