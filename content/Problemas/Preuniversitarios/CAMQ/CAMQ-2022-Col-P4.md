---
title: CAMQ-2023-Col-P4
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
date: 2025-10-08
---
## Enunciado
Consideremos a función polinomial $f(x)=2x^2-1$. Avalía e simplifica a seguinte expresión:
    $$\underbrace{f\circ f\circ ... \circ f}_\text{2023}(\cos(\frac{\pi}{2^{2023}}))$$

---

## Resolución
> [!pista]
> Revisa as identidades trigonométricas.

> [!solution1] Solución
>   Da identidade trigonométrica $\cos(2\theta) = 2\cos^2(\theta) -1$ (deducida de $\cos(A+B)=\cos(A)\cos(B)-\sin(A)\sin(B)$ con $A=B=\theta$ e $\sin^2(\theta)=1-\cos^2(\theta)$) observamos que:
>     $$f(\cos(\theta))=\cos(2\theta)$$
>     Substituíndo $\theta=\frac{\pi}{2^{2023}}$:
>     $$f(\cos(\frac{\pi}{2^{2023}}))=\cos(\frac{\pi}{2^{2022}})$$
>     $$f\circ f(\cos(\frac{\pi}{2^{2023}}))=\cos(\frac{\pi}{2^{2021}})$$
>     ...
>     $$\underbrace{f\circ f\circ ... \circ f}_\text{i}(\cos(\frac{\pi}{2^{2023}})) = \cos(\frac{\pi}{2^{2023-i}})$$
>     ...
>     $$\underbrace{f\circ f\circ ... \circ f}_\text{2023}(\cos(\frac{\pi}{2^{2023}})) = \cos(\frac{\pi}{2^{2023-2023}})= \cos(\pi) = -1$$

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar un man!
