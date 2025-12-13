---
title: OMOUS-2022-Teams-P9+
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Accesible
  - Análise
  - EcuaciónsFuncionais
date: 2025-12-12
without-solution: false
notas:
author:
---
## Enunciado

Atopa todas as funcións diferenciables $f:\mathbb{R}\to \mathbb{R}$ que cumpran que para todo par de números reais $x$ e $y$ $f(x+y)\geq 2024^xf(y)+f(x)$ tales que $f(0)=0$ e $f(1)=1$.

---

## Resolución

> [!solution2]- Solución
> Podemos rescribir a desigualdade como $f(x+y)-f(x)\geq 2024^xf(y)$. Supoñamos $y>0$. Dividindo a expresión anterior por $y$ axeitadamente obtemos:
> $$\frac{f(x+y)-f(x)}{y}\geq 2024^x\frac{f(y)-f(0)}{y-0}.$$
> Se facemos tender $y$ a 0 chegamos a que $f'(x)\geq 2024^xf'(0)$. De xeito completamente análogo, se supoñemos $y<0$ e facemos $y\to 0$ chegamos  que $f'(y)\leq 2024^xf'(0)$. Así, $f'(x)=2024^xf'(0)$. Doutra banda, se na desigualdade inicial supoñemos $x>0$ podemos rescribir a desigualdade inicial como:
> $$\frac{f(x+y)-f(y)}{x}\geq f(y)\cdot \frac{2024^x-1}{x}+\frac{f(x)-f(0)}{x-0}.$$
> Facendo $x\to 0$ obtemos $f'(y)\geq f(y)\ln{2024}+f'(0)$. De xeito análogo tense que se supoñemos $x<0$ $f'(y)\leq f(y)\ln{2024}+f'(0)$, polo que concluimos que $f'(y)= f(y)\ln{2024}+f'(0)$. Do anterior sabemos que $f'(y)= 2024^yf'(0)$, é dicir:
> $$f(y)\ln{2024}+f'(0)=2024^yf'(0)$$
> Substituíndo $y=1$ chegamos a que $ln{2024}+f'(0)=2024f'(0)$. Integrando obtemos que $f(x)=\frac{2024^x-1}{2023}$.



---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
