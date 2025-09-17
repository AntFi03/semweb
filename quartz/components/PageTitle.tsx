import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}> 
      <a href={baseDir}>
        <img className="Logo Logo--light" src={joinSegments(baseDir, "static/logo-light.png")} alt={title} />
        <img className="Logo Logo--dark" src={joinSegments(baseDir, "static/logo-dark.png")} alt={title} />
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
  
.Logo {
  max-width: 250px;
  min-width: 50px;
  margin-left: 10px;
  margin-right: 10px;
}


@media (max-width: 800px) {
  .Logo {
    max-width: 200px;
  }
}

/* Default = light */
.Logo--light { display: block; }
.Logo--dark { display: none; }

/* Dark mode (Quartz sets saved-theme on <html>) */
html[saved-theme="dark"] .Logo--light { display: none; }
html[saved-theme="dark"] .Logo--dark { display: block; }
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
