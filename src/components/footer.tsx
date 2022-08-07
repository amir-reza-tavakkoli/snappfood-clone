import type { ReactNode } from "react"
import "./footer.css"

type Reference = { name: string; href: string; logo: string }

type FooterProps = {
  name: string
  logo: string
  homepage: string
  description?: string
  links: { description?: string; items: Reference[] }
  contacts: { description?: string; items: Reference[] }
  credentials: { description?: string; items: Reference[] }
}

export const Footer = ({
  logo,
  name,
  homepage,
  description,
  links,
  credentials,
  contacts,
}: FooterProps) => {
  return (
    <footer className="footer">
      <p className="_vendor">
        <a href={homepage} aria-label="Homepage" rel="canonical">
          <img src={logo} role="presentation" alt="" />
        </a>
        {name}
        <span>{description}</span>
      </p>

      <address
        aria-label={contacts.description ?? undefined}
        className="_contacts"
      >
        {contacts.items.map((item, index) => (
          <li key={index}>
            <a href={item.href} rel="external" aria-label={item.name}>
              <img src={item.logo} role="presentation" alt="" />
            </a>
          </li>
        ))}
      </address>

      <ul aria-label={links.description ?? undefined} className="_links">
        {links.items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <ul
        className="_credentials"
        aria-label={credentials.description ?? undefined}
      >
        {credentials.items.map((item, index) => (
          <li key={index}>
            <a href={item.href} rel="external license" aria-label={item.name}>
              <img src={item.logo} role="presentation" alt="" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
