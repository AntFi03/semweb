---
title: PSS-S1-E11
description:
comments: true
draft: false
enableToc: true
tags:
  - Problema
  - Preuniversitario
  - Accesible
  - XogosDeEstratexia
date: 2025-12-13
without-solution: false
notas:
author:
---
## Enunciado

Na cuadrícula $4 \times 4$ seguinte podes cambiar o signo de tódolos números dunha columna, fila ou paralela a unha das diagonais. En particular, podes cambiar o signo de calquera esquina. Probar que polo menos un $-1$ quedará na cuadrícula.
$$
\begin{array}{|c|c|c|c|}
\hline
1 & 1 & 1 & 1 \\
\hline
1 & 1 & 1 & 1 \\
\hline
1 & 1 & 1 & 1 \\
\hline
1 & -1 & 1 & 1 \\
\hline
\end{array}
$$

---

## Resolución

> [!pista]-
> Buscar un invariante coa multiplicación de cadradiños.

> [!solution2]- Solución
> O produto dos $8$ cadrados do perímetro (excepto as esquinas) é $-1$ e mantense invariante ao aplicarlle calquera das operacións.
> $$
> \require{color}
> \begin{array}{|c|c|c|c|}
> \hline
> 1 & \cellcolor[gray]{0.85} 1 & \cellcolor[gray]{0.85} 1 & 1 \\
> \hline
> \cellcolor[gray]{0.85} 1 & 1 & 1 & \cellcolor[gray]{0.85} 1 \\
> \hline
> \cellcolor[gray]{0.85} 1 & 1 & 1 & \cellcolor[gray]{0.85} 1 \\
> \hline
> 1 & \cellcolor[gray]{0.85} -1 & \cellcolor[gray]{0.85} 1 & 1 \\
> \hline
> \end{array}
> $$


---

## Dúbidas & Comentarios
Nesta sección pódesnos deixar as túas dúbidas e comentarios a cerca do problema anterior. Non teñas teima en preguntar, estamos aí para botar unha man!
