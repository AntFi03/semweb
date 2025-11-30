---
title: Problemas por autor
description: Ficheiro onde podedes ver os problemas que propuxestes cada un de vos. Para etiquetar os problemas tal que os subíchedes vos só tendes que poñer o voso nome o apartado "author" das propiedades.
draft: true
comments: false
tags:
---
Para ver correctamente a seguinte táboa automática tendes que activar a opción `Enable JavaScript Queries` do plugin *Dataview*.

```dataviewjs
// Función auxiliar para convertir el número de posición a formato ordinal ("1º", "2º", etc.)
function getOrdinal(n) {
    if (n === 1) return "🥇";
    if (n === 2) return "🥈";
    if (n === 3) return "🥉";
    return n + "º";
}

// Función auxiliar para mostrar el estado de publicación
function formatPublished(isDraft) {
    if (isDraft || isDraft === undefined) {
        return "❌";
    }
    return "✅";
}

// -------------------------------------------------------------------------
// --- FUNCIÓN PRINCIPAL DE RENDERIZADO DE TABLA (COMPATIBLE CON CALLOUT) ---
// -------------------------------------------------------------------------

/**
 * Genera la tabla de problemas como una cadena de Markdown envuelta en un callout colapsable.
 * @param {Array<Object>} pages - Lista de páginas a incluir.
 * @param {string} title - Título del callout.
 * @param {string} type - Tipo de callout (INFO, NOTE, etc.).
 * @returns {string} Cadena Markdown completa del callout.
 */
function renderCalloutTable(pages, title, type = "INFO") {
    let tableMarkdown = "";
    
    // Encabezado de la tabla Markdown
    tableMarkdown += "| File | Publicado | Creado | Notas |\n";
    tableMarkdown += "| :--- | :---: | :---: | :--- |";

    // Filas de la tabla Markdown
    for (const p of pages) {
        // Sanear notas para evitar romper la fila Markdown
        let notasSanitizadas = (p.notas ?? "")
            .toString()
            .replace(/(\r\n|\n|\r)/gm, " ") 
            .replace(/\|/g, "\\|"); 

        const fileLink = `[[${p.file.name}]]`; 
        const published = formatPublished(p.draft);
        const created = p.file.cday ? p.file.cday.toFormat("yyyy-MM-dd") : "";
        
        tableMarkdown += `\n| ${fileLink} | ${published} | ${created} | ${notasSanitizadas} |`;
    }

    // Crear el callout COLAPSABLE
    let finalCallout = `> [!${type}]- ${title}\n`; 
    
    // Añadir cada línea de la tabla con el prefijo de bloque de cita (>)
    const lines = tableMarkdown.split('\n');
    for (const line of lines) {
        finalCallout += `> ${line}\n`;
    }
    return finalCallout;
}
// -------------------------------------------------------------------------

// Recoger todas las páginas que tienen la etiqueta 'Problema'
const problemPages = dv.pages("#Problema");

// Definir una función de filtro común para excluir el archivo "Problema"
const excludeSelf = p => p.file.name !== "Problema";

// --- SECCIÓN A: PROBLEMAS SIN AUTOR ---
const pagesWithoutAuthor = problemPages.filter(p =>
    excludeSelf(p) &&
    (!p.author ||
    (Array.isArray(p.author) && p.author.length === 0) ||
    (typeof p.author === 'string' && p.author.trim() === ""))
);

if (pagesWithoutAuthor.length > 0) {
    dv.header(2, "Problemas sen Autor Específico 🕵️");

    const sortedPages = pagesWithoutAuthor
        .filter(p => p && p.file) 
        .sort((x, y) =>
            (x.file?.name || "").localeCompare(y.file?.name || "")
        );

    dv.table(
        ["Problema", "Publicado", "Creado", "Notas"],
        sortedPages.map(p => [
            p.file.link,
            formatPublished(p.draft),
            p.file.cday ? p.file.cday.toFormat("yyyy-MM-dd") : "",
            p.notas ?? ""
        ])
    );
}
// --- FIN SECCIÓN A ---

dv.paragraph("");
dv.paragraph("<hr>");

// --- SECCIÓN B: PROBLEMAS AGRUPADOS POR AUTOR (CON DOBLE CALLOUT) ---
const pagesWithAuthor = dv.pages().where(p => p.author && excludeSelf(p));
const map = new Map();

for (const p of pagesWithAuthor) {
    const authors = Array.isArray(p.author) ? p.author : [p.author];
    for (const a of authors) {
        if (!a || (typeof a === 'string' && a.trim() === "")) continue;
        if (!map.has(a)) map.set(a, []);
        map.get(a).push(p);
    }
}

const authors = Array.from(map.entries())
    .map(([author, pages]) => ({ author, author, pages, count: pages.length }))
    .sort((x, y) => y.count - x.count);

dv.header(2, "Problemas Agrupados por Autor 🧑‍💻");

for (let i = 0; i < authors.length; i++) {
    const a = authors[i];
    const rank = getOrdinal(i + 1); 
    
    // 1. Cabecera (Siempre visible)
    dv.header(3, `${rank} - ${a.author} (${a.count} problemas)`);

    const authorPages = a.pages.filter(p => p && p.file);

    // --- PRIMER CALLOUT: Ordenado Alfabéticamente ---
    const sortedPagesAlphabetical = authorPages
        .sort((x, y) =>
            (x.file?.name || "").localeCompare(y.file?.name || "")
        );
    
    let authorName = a.author .toString() .replace(/^\[\[(.*?)(\|(.*?))?\]\]$/, '$1') .trim().split(' ')[0];

    dv.paragraph(
        renderCalloutTable(sortedPagesAlphabetical, `Problemas de ${authorName} (por orde alfabética)`, "INFO")
    );
    
    // --- SEGUNDO CALLOUT: Ordenado por Fecha de Creación (Más reciente primero) ---
    const sortedPagesRecent = authorPages
        .filter(p => p.file && p.file.cday) // Aplicar filtro estricto
        .sort((x, y) => {
            const dateY = y.file.cday.toString();
            const dateX = x.file.cday.toString();
            return dateY.localeCompare(dateX);
        });

    dv.paragraph(
        renderCalloutTable(sortedPagesRecent, `Problemas de ${authorName} (por data de creación)`, "INFO")
    );
    
    dv.paragraph("");
}
// --- FIN SECCIÓN B ---

dv.paragraph("<hr>");

// =========================================================================
// --- SECCIÓN C: PROBLEMAS RECIENTES (Limitado a #Problema y 2 meses/50) ---
// =========================================================================

// 1. Calcular la fecha de hace 2 meses
const twoMonthsAgo = dv.date("1 weeks ago");

// 2. Recoger todas las páginas con la etiqueta #Problema
const allProblems = dv.pages("#Problema").filter(p => excludeSelf(p));

// 3. Filtrar solo problemas con fecha de creación válida Y creados después de 'twoMonthsAgo'
const recentProblems = allProblems.filter(p => p.file && p.file.cday && p.file.cday >= twoMonthsAgo);

// 4. Ordenar por fecha de creación (cday) de forma descendente (más reciente primero)
const sortedByCreation = recentProblems
    .sort((x, y) => {
        // Chequeo de seguridad
        const dateY = y.file?.cday ? y.file.cday.toString() : '';
        const dateX = x.file?.cday ? x.file.cday.toString() : '';
        
        if (dateY === '' && dateX === '') return 0;
        if (dateY === '') return 1; 
        if (dateX === '') return -1; 

        return dateY.localeCompare(dateX);
    })
    // 5. Aplicar el límite de 20 resultados
    //.limit(20);


// 6. Generar la tabla de contenido como texto Markdown
let recentTableMarkdown = "";
recentTableMarkdown += "| Problema | Autor | Publicado | Creado |\n";
recentTableMarkdown += "| :--- | :--- | :---: | :---: |";

for (const p of sortedByCreation) {
    let authorDisplay = Array.isArray(p.author) 
        ? p.author.join(', ') 
        : (p.author ?? "N/A");
    authorDisplay = authorDisplay.toString().replace(/(\r\n|\n|\r)/gm, " ");

    const fileLink = `[[${p.file.name}]]`; 
    const published = formatPublished(p.draft);
    const created = p.file.cday ? p.file.cday.toFormat("yyyy-MM-dd") : "";
    
    recentTableMarkdown += `\n| ${fileLink} | ${authorDisplay} | ${published} | ${created} |`;
}

// 7. Crear el callout COLAPSADO
dv.header(2, "Últimos Problemas Engadidos 📅");

let recentCallout = `> [!INFO]- Problemas engadidos na última semana\n`; 

const recentLines = recentTableMarkdown.split('\n');
for (const line of recentLines) {
    recentCallout += `> ${line}\n`;
}

dv.paragraph(recentCallout);
```

