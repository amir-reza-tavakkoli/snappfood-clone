import "./vendor-nav.css"

export type item = {
  name: string
  image?: string
  href: string
}

type VendorNavProps = {
  type?: string
  items: item[]
}

export const VendorNav = ({ items, type }: VendorNavProps) => {
  return (
    <nav className="vendor-nav">
      <ul className="_items" aria-label={type}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              <span>
                {item.image ? <img role="presentation" src={item.image} alt="" /> : null}
                <span className="_name">{item.name}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
