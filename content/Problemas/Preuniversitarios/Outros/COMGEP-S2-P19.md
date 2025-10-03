---
title: COMGEP-S2-P19
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Intrincado
  - Xeometría
date: 2025-10-03
---
## Enunciado

Sexa $ABC$ un triángulo con $\angle ABC = 45^\circ$. Dende $A$ trazamos o segmento $AD$, sendo $D$ un punto sobre o segmento $BC$ de tal xeito que $DC=2BD$ e $\angle BAD = 15^\circ$. Canto vale o ángulo $\angle BCA$ ?

---

## Resolución

> [!pista]-
> Utilizar sucesivamente os teoremas do seno e coseno.

> [!solution3]- Solución
> Aplicando o teorema dos senos ao triángulo ABD
> $$
> \frac{x}{\sin{15^\circ}} = \frac{c}{\sin{120^\circ}}
> $$
> Polo tanto despexando e calculando os valores dos senos utilizando as fórmulas do ángulo dobre
> $$
> c = \frac{\sqrt{6}}{\sqrt{3}-1}x
> $$
> Destacamos o cálculo do $\sin{15^\circ}$ porque pode ser algo elaborado:
> $$
> \sin{15^\circ} = \sqrt{\frac{1-\cos{30^\circ}}{2}} = \frac{\sqrt{2-\sqrt{3}}}{2} = \frac{\sqrt{\frac{3}{2}}-\frac{1}{\sqrt{2}}}{2} =
> \frac{\sqrt{3}-1}{2\sqrt{2}}
> $$
> Aplicando agora o teorema dos cosenos ao triángulo ABC e substituíndo o valor de $c$ temos que
> $$
> b^2 = 9x^2 + c^2 -2\cdot 3x \cdot c \cos{45^\circ} = 6x^2
> $$
> Por último, basta aplicar o teorema dos senos ao triángulo ABC
> $$
> \frac{c}{\sin{\alpha}} = \frac{b}{\sin{45^\circ}}
> $$
> Polo tanto, tendo en conta que dividimos $c$ entre $b$, a dependencia de $x$ cancélase e podemos obter
> $$
> \sin{\alpha} = \frac{\sqrt{3}+1}{2\sqrt{2}} = \frac{\sqrt{3}}{2}\frac{\sqrt{2}}{2} + \frac{1}{2}\frac{\sqrt{2}}{2} = \sin{\left(30^\circ + 45^\circ \right)} = \sin{75^\circ}
> $$
> Finalmente concluimos que $\sin{\alpha} = 75^\circ$.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar un man!
