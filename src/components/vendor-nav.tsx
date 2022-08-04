import type { ReactNode } from "react"
import "./vendor-nav.css"

export type item = {
  name: string
  image?: string | ReactNode
  href?: string
  key: number
}

type VendorNavProps = {
  type?: string
  items: item[]
}

export const VendorNav = ({ items, type }: VendorNavProps) => {
  return (
    <nav className="vendor-nav">
      {type ? <p className="nonvisual">{type}</p> : null}
      <ul className="_items">
        {items.map((item, index, array) => {
          return (
            <li key={item.key ?? index}>
              <a href={item.href ?? "#"} className="_link">
                <div>
                  {item.image && typeof item.image === "string" ? (
                    <img src={item.image} alt={item.name}></img>
                  ) : item.image ? (
                    item.image
                  ) : null}
                  <span className="_name">{item.name}</span>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
