---
title: NZMO-2024-II_5
description:
comments: true
draft: true
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Intrincado
  - Desigualdades
date: 2025-10-03
---
## Enunciado
Determina o menor número real L tal que: 
$$\frac{1}{a} +\frac{a}{b} +\frac{b}{c}+\frac{c}{d} \leq L$$
para $a,b,c,d \in \mathbb{Z}$ que satisfagan $1<a<b<c<d$

---

## Resolución
 > [!solution3] Solución
> Primeiro probaremos que L=3 é válido e despois que non pode ser L<3.
> -  Consideremos dous casos $b=a+1$ e $b\geq a+2$. \\
>     Se $b\geq a+2$ entón:
>     $$\frac{1}{a} +\frac{a}{b} +\frac{b}{c}+\frac{c}{d} \leq \frac{1}{a}+\frac{a}{a+2} +$$$$+ \frac{b}{c} +\frac{c}{d} < \frac{1}{a}+\frac{a}{a+2} + 1 +1 = \frac{2-a}{a(a+2)} \leq 3$$
>     O denominador $(2-a)$ é non positivo porque $1<a$ e $a \in \mathbb{Z}$. \\
>     Se $b=a+1$ entón: 
>     $$\frac{1}{a} +\frac{a}{b} +\frac{b}{c}+\frac{c}{d} = \frac{1}{a} + \frac{a}{a+1} + \frac{a+1}{c} + \frac{c}{d} <$$
>     $$ < \frac{1}{a} + \frac{a}{a+1}+ \frac{a+1}{c} +1 \leq \frac{1}{a} + \frac{a}{a+1}+\frac{a+1}{a+2}+1 = $$
>     $$ =\frac{2-a^2}{a(a+1)(a+2)} +3 <3$$
> 	 O denominador $(2-a^2)$ é non positivo porque $1<a$ e $a \in \mathbb{Z}$.
> - Supoñemos que $\exists L'<3$ que funciona e collemos $a,b,c,d$ tal que sexan grandes enteiros consecutivos. \\
>     Se $L'=3- \epsilon, \epsilon>0$, e así $\exists n \in \mathbb{Z}$ tal que $n>\frac{3}{\epsilon}$. Isto asegura que $\frac{1}{n+1}, \frac{1}{n+2} \text{ e } \frac{1}{n+3}$ son máis pequenos que $\frac{\epsilon}{3}$. Agora consideremos $(a,b,c,d)=(n,n+1,n+2,n+3)$.
>     $$\frac{1}{a} +\frac{a}{b} +\frac{b}{c}+\frac{c}{d} > \frac{a}{b}+\frac{b}{c}+\frac{c}{d} = \frac{n}{n+1}+\frac{n+1}{n+2}+\frac{n+2}{n+3} =$$
>     $$= 3-(\frac{1}{n+1}+\frac{1}{n+2}+\frac{1}{n+3}) > 3-(\frac{\epsilon}{3}+\frac{\epsilon}{3}+\frac{\epsilon}{3})=L'$$


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar un man!
