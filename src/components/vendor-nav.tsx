import "./vendor-nav.css"

export type item = { name: string; src?: string; href?: string; key: number }

type VendorNavProps = {
  type: string
  items: item[]
}

export const VendorNav = ({ items, type }: VendorNavProps) => {
  return (
    <nav className="vendor-nav">
      <p className="nonvisual" aria-label="type">{type}</p>
      <ul className="_items">
        {items.map((item, index, array) => {
          return (
            <li key={item.key ?? index}>
              <a href={item.href ?? "#"} className="_link">
                <div>
                  {item.src ? <img src={item.src} alt={item.name}></img> : null}
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
