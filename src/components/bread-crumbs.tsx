import "./bread-crumbs.css"
import { Icon } from "./icon"

type Item = {
  name: string
  href: string
  key?: number
}

type BreadCrumbsProps = {
  title: string
  items: Item[]
}

export const BreadCrumbs = ({ title, items }: BreadCrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="bread-crumbs">
      <ol aria-label={title}>
        {items.map((item, index, array) => (
          <li key={item.key ?? index}>
            <a
              href={item.href}
              aria-current={index === array.length - 1 ? "page" : undefined}
            >
              {item.name}
            </a>

            {index !== array.length - 1 ? (
              <Icon name="flash" color="faded" role="presentation"/>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
