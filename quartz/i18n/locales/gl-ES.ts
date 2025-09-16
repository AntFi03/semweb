import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Sen título",
    description: "Sen descripción",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Resumo",
      info: "Información",
      todo: "Por facer",
      tip: "Consello",
      success: "Éxito",
      question: "Pregunta",
      warning: "Advertencia",
      failure: "Fallo",
      danger: "Perigo",
      bug: "Error",
      example: "Exemplo",
      quote: "Cita",
    },
    backlinks: {
      title: "Páxinas que enlazan aquí",
      noBacklinksFound: "Non se atoparon enlaces a esta páxina",
    },
    themeToggle: {
      lightMode: "Modo claro",
      darkMode: "Modo escuro",
    },
    readerMode: {
      title: "Modo lector",
    },
    explorer: {
      title: "Explorador",
    },
    footer: {
      createdWith: "Creado con",
    },
    graph: {
      title: "Vista Gráfica",
    },
    recentNotes: {
      title: "Notas Recentes",
      seeRemainingMore: ({ remaining }) => `Vexa ${remaining} máis →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transcluido de ${targetSlug}`,
      linkToOriginal: "Enlace ao orixinal",
    },
    search: {
      title: "Buscar",
      searchBarPlaceholder: "Busca algo",
    },
    tableOfContents: {
      title: "Táboa de Contidos",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `Lese en ${minutes} min`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Notas recentes",
      lastFewNotes: ({ count }) => `Últimas ${count} notas`,
    },
    error: {
      title: "Non se atopou.",
      notFound: "Esta páxina é privada ou non existe.",
      home: "Regresa á páxina principal",
    },
    folderContent: {
      folder: "Carpeta",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 artigo en esta carpeta." : `${count} artigos en esta carpeta.`,
    },
    tagContent: {
      tag: "Etiqueta",
      tagIndex: "Índice de Etiquetas",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 artigo con esta etiqueta." : `${count} artigos con esta etiqueta.`,
      showingFirst: ({ count }) => `Mostrando as primeiras ${count} etiquetas.`,
      totalTags: ({ count }) => `Atopáronse ${count} etiquetas en total.`,
    },
  },
} as const satisfies Translation
