---
title: Problemas por autor
description: Ficheiro onde podedes ver os problemas que propuxestes cada un de vos. Para etiquetar os problemas tal que os subíchedes vos só tendes que poñer o voso nome o apartado "author" das propiedades.
draft: true
comments: false
tags:
---

```dataviewjs
// Collect all pages that have an 'author' field
const pages = dv.pages().where(p => p.author);

// Build a map: author -> list of pages
const map = new Map();

for (const p of pages) {
    const authors = Array.isArray(p.author) ? p.author : [p.author];
    for (const a of authors) {
        if (!a) continue;
        if (!map.has(a)) map.set(a, []);
        map.get(a).push(p);
    }
}

// Convert to array and sort authors by number of notes (descending)
const authors = Array.from(map.entries())
    .map(([author, pages]) => ({ author, pages, count: pages.length }))
    .sort((x, y) => y.count - x.count);

// Output a table for each author
for (const a of authors) {
    dv.header(3, `${a.author} (${a.count} notes)`);

    // Sort each author's pages by file name
    const sortedPages = a.pages.sort((x, y) =>
        x.file.name.localeCompare(y.file.name)
    );

    dv.table(
        ["File", "Draft", "Date", "Notes"],
        sortedPages.map(p => [
            p.file.link,
            p.draft ?? "",
            p.date ?? "",
            p.notes ?? ""
        ])
    );
}
```
