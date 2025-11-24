---
title: BKT_Sholapurkar_3_1
description:
comments: true
draft: true
enableToc: true
tags:
  - Problema
date: 2025-11-13
notas: https://www.ias.ac.in/public/Volumes/reso/029/10/1359-1371.pdf
---
## Enunciado

Sexa $f \in\mathcal{C}([0,1])$. Calcular $$\lim_{ n \to \infty }\int_{0}^{1}nt^nf(t)\,dt$$

---

## Resolución

> [!solution2]- Solución
> 

> [!solution3]- Solución 2
> Primeiro, denotemos por $T_{n} \in\mathcal{C}([0,1])'$ a $T_{n}f=\int_{0}^{1}nt^nf(t)\,dt$ e por $T\in\mathcal{C}([0,1])'$ a $Tf=f(1)$.
> Se $f(x)=x^{k}$ con $k\in\mathbb{Z}^+$, $$\lim_{ n \to \infty } T_{n}f =\lim_{ n \to \infty }\int_{0}^{1}nt^nf(t)\,dt=\lim_{ n \to \infty } \frac{n}{n+k+1}=1=T(f)$$
> Así, se $f$ é un polinomio, $\lim_{ n \to \infty }T_{n}f=Tf$. Como os polinomios son densos en $\mathcal{C}([0,1])$, comprobando que $\lim_{ n \to \infty }T_{n}\in\mathcal{C}([0,1])'$, xa estaría, por ser ambos funcionais continuos e coincidir nun conxunto denso. Para ver que $\lim_{ n \to \infty }T_{n}$ é continuo, veremos que é limitado.
> $$\lvert\lim_{ n \to \infty }T_{n}f\rvert=\left\lvert  \lim_{ n \to \infty }\int_{0}^{1}nt^nf(t)\,dt  \right\rvert=\lim_{ n \to \infty } \left\lvert  \int_{0}^{1}nt^nf(t)\,dt  \right\rvert \leq \lim_{ n \to \infty }  \int_{0}^{1}\lvert nt^nf(t)\rvert\,dt \leq \lim_{ n \to \infty }  \int_{0}^{1} nt^n\lvert\lvert f\rvert\rvert_{\infty}\,dt = \lvert\lvert f\rvert\rvert_{\infty} \lim_{ n \to \infty }  \int_{0}^{1} nt^n\,dt= \lvert\lvert f\rvert\rvert_{\infty} \lim_{ n \to \infty } \frac{n}{n+1}=\lvert\lvert f\rvert\rvert_{\infty}$$
> Así, $\lvert\lvert T\rvert\rvert \leq 1$ e $T$ é limitado.

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
