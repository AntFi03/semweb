---
title: CAMQ-2025-Col-P5
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - EcuaciónsFuncionais
  - Fácil
date: 2026-04-06
without-solution: false
notas:
author: Carla Dopazo Pavón
---
## Enunciado
A función $f(x) = x+2x^2 + 3x^3$ ten inversa, a cal denotamos por $f^{-1}.$ Calcula os seguintes valores:
- $f^{-1}(0).$
- $\frac{d(f^{-1})}{dx} (0).$
- $\frac{d(f^{-1})}{dx} (6).$
- $\frac{d^2(f^{-1})}{dx^2} (0).$

---

## Resolución

> [!pista]-
> Cómpre darse conta de que:
> $$f^{-1}(f(x))=x.$$
> 


> [!solution1]- Solución
> a) Pode verse que $x=0$ é raíz, polo que 
> $$f^{-1}(0)=0.$$
> b) Se derivamos a expresión da pista, obtemos
> $$\frac{d(f^{-1})}{dx} (f(x)) \cdot f'(x)=1.$$
> Tomando $x=0$,
> $$\frac{d(f^{-1})}{dx} (0)=1.$$
> c) Como $f(1)=6$, substituíndo por $x=1$ na expresión da derivada obtida en b):
> $$\frac{d(f^{-1})}{dx} (6)=\frac{1}{14}.$$
> d) Derivando a expresión obtida en b),
> $$\frac{d^2(f^{-1})}{dx^2} (f(x)) \cdot (f'(x))^2 + \frac{d(f^{-1})}{dx} (f(x)) \cdot f''(x) =0.$$
> Se tomamos $x=1$ nesta expresión, obtemos
> $$\frac{d^2(f^{-1})}{dx^2} (6) \cdot (14)^2 + \frac{d(f^{-1})}{dx} (6) \cdot 22 =0.$$
> E por último, empregando o valor obtido en c), chegamos a 
> $$\frac{d^2(f^{-1})}{dx^2} (6) = - \frac{22}{14^3}= - \frac{11}{1372}.$$


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
