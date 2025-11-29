---
title: BKT_Sholapurkar_3_1
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Análise
  - Intrincado
  - Universitario
  - Seminario
date: 2025-11-13
notas: https://www.ias.ac.in/public/Volumes/reso/029/10/1359-1371.pdf
author: Inácio Suárez Camiña
---
## Enunciado

Sexa $f \in\mathcal{C}([0,1])$. Calcular $$\lim_{ n \to \infty }\int_{0}^{1}nt^nf(t)\,\text{d}t$$

---

## Resolución

> [!solution2]- Solución
> Sabemos que $\lim_{ n \to \infty } \frac{n}{n+1}f(1)=f(1)$ e que $\int_{0}^{1}nt^{n}\,\text{d}t=\frac{n}{n+1}$, polo que vexamos que $\lim_{ n \to \infty }\int_{0}^{1}nt^{n}f(t)\,\text{d}t-\frac{n}{n+1}f(1)=0$.
> $$\lim_{ n \to \infty }\int_{0}^{1}nt^{n}f(t)\,\text{d}t-\frac{n}{n+1}f(1)=\lim_{ n \to \infty }\int_{0}^{1}nt^{n}f(t)\,\text{d}t-\int_{0}^{1}nt^{n}f(1)\,\text{d}t=\lim_{ n \to \infty }\int_{0}^{1}nt^{n}(f(t)-f(1))\,\text{d}t$$
> Como $f$ é continua en $[0,1]$, $\forall\varepsilon>0,\exists \delta>0 / |f(t)-f(1)|<\varepsilon,\forall t\in(1-\delta,1]$ e $\exists M>0/|f(t)|\leq M,\forall t \in[0,1]$. Así: $$\lim_{ n \to \infty }\left\lvert \int_{0}^{1}nt^{n}(f(t)-f(1))\,\text{d}t \right\rvert \leq \lim_{ n \to \infty }\int_{0}^{1}\left\lvert nt^{n}(f(t)-f(1))\right\rvert\,\text{d}t=\lim_{ n \to \infty } \int_{0}^{1-\delta} nt^{n}\left\lvert f(t)-f(1)\right\rvert\,\text{d}t+\int_{\delta}^{1} nt^{n}\left\lvert f(t)-f(1)\right\rvert\,\text{d}t < \lim_{ n \to \infty }2M\int_{0}^{1-\delta} nt^{n}\,\text{d}t+\int_{\delta}^{1} nt^{n}\varepsilon\,\text{d}t =\lim_{ n \to \infty } 2M \frac{n}{n+1}(1-\delta)^{n}+\varepsilon \frac{n}{n+1}= \varepsilon, \forall\varepsilon>0$$
> Polo tanto, $\lim_{ n \to \infty }\int_{0}^{1}nt^{n}f(t)\,\text{d}t-\frac{n}{n+1}f(1)=0$ e $\lim_{ n \to \infty }\int_{0}^{1}nt^{n}f(t)\,\text{d}t=\lim_{ n \to \infty } \frac{n}{n+1}f(1)=f(1)$.

> [!solution3]- Solución 2
> Primeiro, denotemos por $T_{n} \in\mathcal{C}([0,1])'$ a $T_{n}f=\int_{0}^{1}nt^nf(t)\,\text{d}t$ e por $T\in\mathcal{C}([0,1])'$ a $Tf=f(1)$.
> Se $f(x)=x^{k}$ con $k\in\mathbb{Z}^+$, $$\lim_{ n \to \infty } T_{n}f =\lim_{ n \to \infty }\int_{0}^{1}nt^nf(t)\,\text{d}t=\lim_{ n \to \infty } \frac{n}{n+k+1}=1=T(f)$$
> Así, se $f$ é un polinomio, $\lim_{ n \to \infty }T_{n}f=Tf$. Como os polinomios son densos en $\mathcal{C}([0,1])$, comprobando que $\lim_{ n \to \infty }T_{n}\in\mathcal{C}([0,1])'$, xa estaría, por ser ambos funcionais continuos e coincidir nun conxunto denso. Para ver que $\lim_{ n \to \infty }T_{n}$ é continuo, veremos que é limitado.
> $$\lvert\lim_{ n \to \infty }T_{n}f\rvert=\left\lvert  \lim_{ n \to \infty }\int_{0}^{1}nt^nf(t)\,\text{d}t  \right\rvert=\lim_{ n \to \infty } \left\lvert  \int_{0}^{1}nt^nf(t)\,\text{d}t  \right\rvert \leq \lim_{ n \to \infty }  \int_{0}^{1}\lvert nt^nf(t)\rvert\,\text{d}t \leq \lim_{ n \to \infty }  \int_{0}^{1} nt^n\lvert\lvert f\rvert\rvert_{\infty}\,\text{d}t = \lvert\lvert f\rvert\rvert_{\infty} \lim_{ n \to \infty }  \int_{0}^{1} nt^n\,\text{d}t= \lvert\lvert f\rvert\rvert_{\infty} \lim_{ n \to \infty } \frac{n}{n+1}=\lvert\lvert f\rvert\rvert_{\infty}$$
> Así, $\lvert\lvert T\rvert\rvert \leq 1$ e $T$ é limitado.

---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
