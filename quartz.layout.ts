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
        // from data-repo
        repo: 'AntFi03/semweb',
        // from data-repo-id
        repoId: 'R_kgDOPxRdQA',
        // from data-category
        category: 'General',
        // from data-category-id
        categoryId: 'DIC_kwDOPxRdQM4CvmlO',
        // from data-lang
        lang: 'en',
      
        // Other options
        themeUrl: "https://example.com/static/giscus", // corresponds to quartz/static/giscus/
        lightTheme: "light-theme", // corresponds to light-theme.css in quartz/static/giscus/
        darkTheme: "dark-theme", // corresponds to dark-theme.css quartz/static/giscus/
    }
    }),
  ],
  footer: Component.Footer({
    links: {
      Maega: "https://maega.gal/gl",
      GitHub: "https://github.com/maega-gal/",
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
    Component.ContentMeta(),
    Component.TagList(),
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
    Component.TableOfContents(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
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
