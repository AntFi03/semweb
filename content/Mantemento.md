---
title: Mantemento
description: Panel onde ubicar os problemas defectuosos ou por revisar. Amosa os ficheiros que no campo "notas" teñan indicado "revisar enunciado", "revisar solución" ou "revisar dificultade".
draft: true
comments: false
tags:
---
## Problemas sen solución 
```dataview
TABLE draft, date, notas
FROM #Problema 
WHERE without-solution = true
```
## Problemas por revisar
### Revisar enunciado 
```dataview
TABLE draft, date, notas
FROM #Problema 
WHERE contains(notas, "revi") and contains(notas, "enun")
```


### Revisión da(s) solución(s)
```dataview
TABLE draft, date, notas
FROM #Problema 
WHERE contains(notas, "revi") and contains(notas, "sol")
```

### Revisión da dificultade
```dataview
TABLE draft, date, notas
FROM #Problema 
WHERE contains(notas, "revi") and contains(notas, "difi")
```
