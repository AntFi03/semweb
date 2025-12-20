---
title: SK-Fin-2024-P1
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - XogosDeEstratexia
  - Fácil
date: 2025-12-20
without-solution: false
notas:
author: Carla Dopazo Pavón
---
## Enunciado

Mira ten contas de vidro de tres cores diferentes: vermella, azul e branca. As contas teñen pesos en gramos enteiros.
As contas da mesma cor pesan a mesma cantidade. Mira pesa algunhas das súas contas. Resulta que
$3$ vermellas, $1$ azul e $1$ branca pesan $27 g$ en total, mentres que $2$ vermellas, $6$ azuis e $1$ branca pesan $58 g.$
Cantos gramos pesan $3$ contas vermellas e $7$ azuis xuntas?

---

## Resolución

> [!solution1]- Solución 1
> Sexan $r, b, v$ o número de contas vermellas, azuis e brancas, respectivamente. Obtemos o sistema de ecuacións:
> $$3r + b + v = 27, 2r + 6b + v = 58. $$Dedúcese que $5b − r = 31,$ o que significa que $b \geq 7.$ Se substituímos  $r = 5b − 31$ na segunda ecuación, obtemos $16b + v = 120$, e dedúcese que $v$ é divisible por 8 e, polo tanto, que $v \geq 8$.
> A primeira ecuación agora dá $3r ≤ 27 − 7 − 8 = 12$, de xeito que $r \leq 4$. Así obtemos $5b = 31 + r ≤ 35,$ e $b \leq 7$. Agora dedúcese que $b = 7$ e o sistema de ecuacións redúcese a $3r + v = 20, 2r + v = 16,$ que ten a única solución $r = 4, v = 8.$ Polo tanto, tres contas vermellas e sete azuis pesan $61 g$ xuntas.

> [!solution2]- Solución 2
> A ecuación $5b − r = 31$ implica que $r ≡ 4 (mód. 5).$ Ao mesmo tempo, dedúcese de $3r + b + v = 27$ que $r < 9$, o que significa que $r = 4$. Para $b$ e $v$ obtemos o sistema de ecuacións $b + v = 15, 6b + v = 50$, que ten unha solución única.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
