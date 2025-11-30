---
title: IMOmath-In-S1-P3
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Desigualdades
  - Accesible
date: 2025-10-03
---
## Enunciado

 Sexan $a,b,c\in\mathbb{R}^+$. Sabendo que $a^2+b^2+c^2=1$, atopar o valor mínimo de
$$
\frac{a^2b^2}{c^2}+\frac{a^2c^2}{b^2}+\frac{b^2c^2}{a^2}.
$$

---

## Resolución

> [!pista]-
>  Lembrar que $\forall x,y\in\mathbb{R}, x^2+y^2\geq 2xy$.

> [!solution2]- Solución
>  Tendo en conta que $\forall x,y\in\mathbb{R}, x^2+y^2\geq 2xy$, obtemos as 3 seguintes desigualdades:
> $$\frac{a^2b^2}{c^2}+\frac{a^2c^2}{b^2}\geq 2\frac{abac}{cb}=2a^2,$$$$\frac{b^2c^2}{a^2}+\frac{a^2b^2}{c^2}\geq 2b^2,$$
> $$\frac{b^2c^2}{a^2}+\frac{a^2c^2}{b^2}\geq 2c^2.$$
> Sumando as tres expresións e considerando a hipótese, temos que
> $$2\left(\frac{a^2b^2}{c^2}+\frac{a^2c^2}{b^2}+\frac{b^2c^2}{a^2}\right)\geq 2\left(a^2+b^2+c^2\right)=2.$$
> Polo tanto 1 é unha cota inferior da suma que buscamos minimizar. Para ver que este valor é o mínimo, basta convertir as desigualdades iniciais en igualdades, tendo en conta que $x^2+y^2=2xy\iff x=y$. Así,
> $$\frac{a^2b^2}{c^2}+\frac{a^2c^2}{b^2}=2a^2\iff \frac{a^2b^2}{c^2}=\frac{a^2c^2}{b^2}\iff b=c,$$
> $$\frac{b^2c^2}{a^2}+\frac{a^2b^2}{c^2}=2b^2\iff \frac{b^2c^2}{a^2}=\frac{a^2b^2}{c^2}\iff a=c,$$
> $$\frac{b^2c^2}{a^2}+\frac{a^2c^2}{b^2}=2c^2\iff \frac{b^2c^2}{a^2}=\frac{a^2c^2}{b^2}\iff a=b.$$
> O valor mínimo dase en $a=b=c=\frac{1}{\sqrt{3}}$.



---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
