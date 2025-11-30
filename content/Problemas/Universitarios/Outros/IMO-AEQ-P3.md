---
title: IMO-AEQ-P3
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Universitario
  - Álxebra
  - Asequible
date: 2025-11-13
notas: https://imomath.com/index.cgi?page=arithmeticGaussianIntegers
author: Javier Polo Noche
---
## Enunciado
 Atopa todas as solucións enteiras da ecuación $x^5-1=y^2$.

---

## Resolución

> [!pista]-
> Poden ser de utilidade certos coñecementos sobre o anel dos enteiros gaussianos rescribindo a ecuación como $x^5=(y+i)(y-i)$.

 > [!solution2]- Solución
> Se nos fixamos na ecuación, se $x$ fose par entón $y^2\equiv 3 \ (\bmod \ 4)$, e isto é coñecido que é imposible. Polo tanto $x$ debe ser impar e $y$, polo tanto, par. Rescribindo e factorizando a ecuación temos que $x^5=(y+i)(y-i)$. En $\mathbb{Z} [i]$ $y+i$ e $y-i$ son coprimos.
>  
>  Isto xustifícase da seguinte maneira: que se $a$ e $b$ son enteiros coprimos (en $\mathbb{Z}$) e con diferente paridade, entón $a+bi$ e $a-bi$ son coprimos en $\mathbb{Z}[i]$. Supoñamos que non o son, é dicir, que existe unha unidade $z\in\mathbb{Z}[i]$ que divide a ambos. En particular dividirá $2a$ e $2b$. Aínda non podemos utilizar o feito de que $a$ e $b$ sexan coprimos en $\mathbb{Z}$ porque a división acontece en $\mathbb{Z}[i]$. $\mathbb{Z}[i]$ é DIP e polo tanto DFU, ou sexa, cúmprese o Teorema Fundamental da Aritmética, logo todo elemento pode ser escrito en produto de irredutibles (é dicir, primos) de xeito único salvo a orde e as unidades. As únicas unidades son $1,i,-1,-i$. Así, supoñamos sen perda da xeralidade que o divisor $z$ é irredutible. Collamos a súa norma, é dicir, $N(z)=\pi$. Entón $pi$ divide a $4a^2$ e $4b^2$, por ser a norma multiplicativa. Como $a$ e $b$ son coprimos $N(z)=2$ ou $N(z)=4$, ou sexa, ou ben $z=1+i$ ou $z=(1+i)^2$. Posto que $z$ é irredutible $z=1\pm i$. Ademais $z$ divide a $(a+bi)(a-bi)=a^2+b^2$, que é impar por ter $a$ e $b$ diferente paridade, e $N(z)$, que é par, divide a $N(a+bi)=a^2+b^2$, contradición.
>  
> Posto que son coprimos, cada un deles debe ser unha potencia quinta, é dicir, existen enteiros $a,b\in\mathbb{Z}$ tales que $y+i=(a+bi)^5=a(a^4-10a^2b^2+5b^4)+b(5a^4-10a^2b^2+b^4)i$, do que se deduce que $b(5a^4-10a^2b^2+b^4)=1$, é dicir, $b=\pm 1$. Se $b=1$ entón $5a^4-10a^2+1=1$, e a única solución enteira é $a=0$, o que nos proporciona a solución $x=1, y=0$. Se $b=-1$ temos entón $5a^4-10a^2=-2$, que non ten solucións enteiras. O caso $y-i$ é completamente análogo. Polo tanto $(1,0)$ é a única solución enteira.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
