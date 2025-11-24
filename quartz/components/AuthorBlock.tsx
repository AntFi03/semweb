import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"

const AuthorBlock: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const author = fileData.frontmatter?.author
  if (!author) return null

  return (
    <aside class="author-block">
      <p class="author-label">{i18n(cfg.locale).pages?.authorLabel ?? "Problema proposto por:"}</p>
      <p class="author-name">{author}</p>
    </aside>
  )
}

// AuthorBlock.css = `
// .author-block {
//   display: flex;
//   flex-direction: column;
//   background: var(--light);
//   border: 0px solid var(--lightgray);
//   padding: 0rem 0rem;
//   border-radius: 0px;
//   margin-bottom: 0rem;
//   font-family: var(--headerFont);
//   flex: 0 0 auto;
// }
// .author-block .author-label {
//   font-size: 1rem;
//   color: var(--darkgray);
//   margin: 0 0 0 0;
//   font-family: var(--headerFont);
//   font-weight: 600; /* match semi-bold headings */
// }
// .author-block .author-name {
//   margin: 0;
//   font-weight: 400;
//   font-family: var(--codeFont);
//   color: var(--darkgray);
//   font-size: 0.95rem;
// }
// `

export default (() => AuthorBlock) satisfies QuartzComponentConstructor
