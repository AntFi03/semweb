---
title: PMO-2025-Nat-P6
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Fácil
  - EcuaciónsFuncionais
date: 2025-12-13
without-solution: false
notas:
author: Carla Dopazo Pavón
---
## Enunciado

Atopa todas as función $f: \mathbb{R} \rightarrow \mathbb{R}$ tales que:
$${f(2f(x))=f(x-f(y)) +f(x)+y}$$
para todo $x,y \in \mathbb{R}$.

---

## Resolución

> [!solution1]- Solución
> Sexa $P(x,y)$ o problema do enunciado. Cómpre ver que se $f(a)=f(b)$ onde $a,b \in \mathbb{R}$, entón $P(x,a)$ e $P(x,b)$ implican $a=b$. Por isto $f$ é inxectiva.
> Despois, $P(x,-f(x))$ é
> $$f(2f(x)= f(x-f(-f(x)))),$$
> e empregando a inxectividade obtemos:
> $$f(-f(x))=x-2f(x).$$
> Agora $P(x,0)$ conleva $f(2f(x))=f(x-f(0))+f(x)$. Combinando esta igualdade con $P(x,y)$, obtemos 
> $$f(x-f(0))= f(x-f(y))+y.$$
> Fixando $x=0$, $f(-f(0))=f(-f(y))+y,$ e entón $f(-f(0))=2y-f(y).$ En particular, isto implica $f(y)=y+c$, para algún $c$ constante. Substituíndo en $P(x,y)$, obtemos:
> $$2x+3c=x-y+x+y+c$$
> obtendo así que $c=0$. É doado ver que $f(x)=x$ funciona e que, polo tanto, é a única solución.


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
