import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'AntFi03/semweb',
        repoId: 'R_kgDOPxRdQA',
        category: 'Announcements',
        categoryId: 'DIC_kwDOPxRdQM4CvmlO',
        lang: 'en',
        // themeUrl: "https://sementeira.maega.gal/static/giscus",
        // lightTheme: "light-theme",
        // darkTheme: "dark-theme",
        mapping: "title",
        strict: false,
        reactionsEnabled: false,
        inputPosition: "bottom",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      Etiquetas: "/tags",
      Maega: "https://maega.gal/gl",
      GitHub: "https://github.com/AntFi03/semweb",
      Contacto: "mailto:sementeira.problemas@gmail.com",
      "Colabora con nós!": "https://maega.gal/gl/proxectos/sementeira/gu%C3%ADa-de-uso-da-web/"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
    // Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.DesktopOnly(Component.ReaderMode()) },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    Component.TagList(),
    Component.TableOfContents(),
    Component.Backlinks(),
    Component.AuthorBlock(),
    // Component.RecentNotes(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
