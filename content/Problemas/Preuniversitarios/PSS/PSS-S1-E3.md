---
title: PSS-S1-E3
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - XogosDeEstratexia
  - Accesible
  - Invariantes
date: 2025-12-13
without-solution: false
notas: Quen é Hugo?
author: Antón Figueroa Martínez
---
## Enunciado
Un círculo divídese en 6 seccións. Entón, escríbense os números naturais $1,0,1,0,0,0$ nos 6 sectores que se formaron. Tes unha operación que se permite incrementar o valor de dous sectores contiguos en $1$. É posible chegar a que tódolos números sexan iguais, só aplicando a operación anterior?

---

## Resolución


> [!pista]-
> Constrúe un invariante que non varíe ao aplicar a operación. E razona que o caso inicial e o caso obxectivo teñen distintos valores do invariante.

> [!solution2]- Solución 1: Invariante
>  Sexan $a_1, \dots, a_6$ os números nos sectores. Entón definimos o *invariante*:
> $
> I=a_1-a_2+a_3-a_4+a_5-a_6.
> $
> É invariante xa que non cambia ao aplicar a nosa operación. Na configuración inicial, temos $I=2$. Nas configuracións onde tódolos números son iguals, teríamos $I=0$. Como non podemos chegar a unha configuración onde $I \neq 2$, non podemos chegar a que tódolos números sexan iguais.

 > [!solution2]- Solución 2: Proposta por Hugo
> Sexan $a, b, c, d, e, f$ o número de veces que aplicamos a operación aos sectores $(1,2)$, $(2,3)$$\dots$ Entón temos que no caso de que se puidese chegar a unha configuración na que tódolos números sexan iguais, teríamos:
> $
> 1+a+f = a+b = 1+b+c = c+d = d+e = e+f.$
> Despexando, temos que:
> $
> 1+f = b \quad \text{ e } \quad 1+b=d=f \implies 1+f = b = f-1 \implies 2=0 \text{ {Absurdo!}}
> $
> Chegando a unha contradición, demostrando que non se pode chegar a unha configuración con tódolos números iguais, como se pedía.



---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
