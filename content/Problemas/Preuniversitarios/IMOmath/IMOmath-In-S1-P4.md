---
title: IMOmath-In-S1-P4
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

 Sexan $x,y\in\left(0,1\right)$. Demostrar que
$$\frac{1}{1-x^2}+\frac{1}{1-y^2}\geq \frac{2}{1-xy}.$$

---

## Resolución

> [!pista]-
>  Como ferramenta básica para os problemas con desigualdades, usarase que $\forall x,y\in\mathbb{R}$, $a^2+b^2\geq2ab$, tendo a igualdade se, e só se, $a=b$. Para probalo basta usar que $a^2\geq 0, \forall a\in\mathbb{R}$ e que $a^2=0\iff a=0$, tomando $a=(x-y)$.

 > [!solution2]- Solución
> Farase uso de que $a^2+b^2\geq 2ab, \forall a,b\in\mathbb{R}$. Se tomamos $a^2=\frac{1}{1-x^2} e b^2=\frac{1}{1-y^2}$, entón temos que
> $$\frac{1}{1-x^2}+\frac{1}{1-y^2}\geq \frac{2}{\sqrt{\left(1-x^2\right)\left(1-y^2\right)}}=\frac{2}{\sqrt{\left(1-x^2-y^2+x^2y^2\right)}},$$
> que é válido porque $x,y\in\left(0,1\right)\implies \left(1-x^2\right)\left(1-y^2\right)>0$. Agora ben, usando o mesmo argumento inicial,
> $$x^2+y^2\geq 2xy\implies -x^2-y^2\leq -2xy \implies \frac{1}{-x^2-y^2}\geq\frac{1}{-2xy}.$$
> Así, usando a monotonía da raíz cadrada, temos o resultado:
> $$\frac{2}{\sqrt{\left(1-x^2-y^2+x^2y^2\right)}}\geq\frac{2}{\sqrt{\left(1-2xy+x^2y^2\right)}}=\frac{2}{\sqrt{\left(1-xy\right)^2}}=\frac{2}{1-xy}.$$
> 

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
