import { useMemo } from "react"
import type { ReactNode } from "react"
import "./bread-crumbs.css"
import { LeftGrayFlash } from "./svg"

type Item = {
  name: string
  href: string
  key: number
  successor?: Item
}

type BreadCrumbsProps = {
  title: string
  item?: Item
}

export const BreadCrumbs = ({ title, item }: BreadCrumbsProps) => {
  const memoizedItems = useMemo(() => {
    const items: ReactNode[] = []
    while (item) {
      items.push(
        <li key={item.key}>
          <a
            href={item.href}
            aria-current={item && item.successor ? undefined : "page"}
          >
            {" "}
            {item.name}{" "}
          </a>
          {item.successor ? (
            <LeftGrayFlash role="presentation"></LeftGrayFlash>
          ) : null}
        </li>,
      )

      if (item) {
        item = item.successor
      }
    }
    return items
  }, [item])

  return (
    <nav aria-label="Breadcrumb" className="bread-crumbs">
      <ol aria-label={title}>{memoizedItems}</ol>
    </nav>
  )
}
