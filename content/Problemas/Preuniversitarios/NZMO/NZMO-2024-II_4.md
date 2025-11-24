---
title: NZMO-2024-II_4
description:
comments: true
draft: true
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Intrincado
  - TeoríaDeNúmeros
date: 2025-10-03
---
## Enunciado
  Determina todos os enteiros positivos $n$ menores a 2024 tal que para todos os enteiros positivos $x$, o máximo común divisor de $9x+1$ e $nx+1$ é 1.

---

## Resolución
> [!solution3]- Solución
> Sexa $m=n-9$ e, para achar unha contradición, asumimos que $m$ ten un factor primo $p\neq3$. Expresemos $p=9q+r$ onde $0\leq r \leq 8$ ($r$ é o resto de dividir $p$ por 9 e $q$ o cociente). Como mcd(9,$p$)=1, $r\in \{ 1,2,4,5,7,8\}$. Analicemos por casos para chegar a unha contradición:
> -  $r=1$: escollemos $x=1$ así $9x+1=9q+1=p$
> - $r=2$: escollemos $x=5q+1$ así $9x+1=45q+10=5p$
> -  $r=4$: escollemos $x=7q+3$ así $9x+1=63q+28=7p$
> -  $r=5$: escollemos $x=2q+1$ así $9x+1=18q+10=2p$
> -  $r=7$: escollemos $x=4q+3$ así $9x+1=36q+28=4p$
> -  $r=8$: escollemos $x=8q+7$ así $9x+1=72q+64=8p$
>   En todas podemos escoller $x$ tal que $9x+1$ é múltiplo de $p$. Para este valor particular de $x$ temos
>   $$nx+1=mx+9x+1$$
>   Entón $nx+1$ é múltiplo de p tamén. Entón $p$ sería un factor común $9x+1$ e $nx+1$. Entón hai unha contradición xa que non pode existir tal $p$. 
>   Entón $m=n-9$ non pode ter máis factores primos que 3. Entón $m=3^k$ ou $m=-3^k, k\in \mathbb{Z}^+$, é dicir,
>       $$n=9+m = 9+3^k \text{ ou } 9-3^k$$
>   Os enteiros positivos desta forma menores de 2024 son: 6,8,10,12,18,36,90,252,738.\\
>   Para amosar que todos funcionan, asumimos $n=9 \pm 3^k$ e $g=mcd(9x+1,nx+1)$. Xa que $9x+1$ non é múltiplo de 3, g non é múltiplo de 3. Aínda así,
>       $$g\space |\space (nx+1)-(9x+1)=\pm 3^k$$
>       Os únicos divisores desta forma son 1 e -1. Así $g=1$ para calquera $n=9 \pm 3^k$

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
