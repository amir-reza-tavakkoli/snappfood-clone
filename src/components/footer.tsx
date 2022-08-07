import type { ReactNode } from "react"
import "./footer.css"

type Refrence = { name: string; href: string; logo: string; key?: number }

type FooterProps = {
  name: string
  logo: string
  homepage: string
  description?: string
  links: { description?: string; items: Refrence[] }
  contacts: { description?: string; items: Refrence[] }
  credentials: { description?: string; items: Refrence[] }
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
      <address>
        <div className="address">
          <a href={homepage} aria-label="Homepage" rel="canonical">
            <img src={logo} role="presentation" alt="" />
          </a>
          {name}
          <p>{description}</p>
        </div>

        <ul aria-label={contacts.description ?? undefined} className="contacts">
          {contacts.items.map((item, index, array) => {
            return (
              <li key={item.key ?? index}>
                <a href={item.href} rel="external" aria-label={item.name}>
                  <img src={item.logo} role="presentation" alt="" />
                </a>
              </li>
            )
          })}
        </ul>
      </address>

      <nav>
        <ul aria-label={links.description ?? undefined} className="links">
          {links.items.map((item, index, array) => {
            return (
              <li key={item.key ?? index}>
                <a href={item.href}>{item.name}</a>
              </li>
            )
          })}
        </ul>
      </nav>

      <address>
        <ul
          className="credentials"
          aria-label={credentials.description ?? undefined}
        >
          {credentials.items.map((item, index, array) => {
            return (
              <li key={item.key ?? index}>
                <a
                  href={item.href}
                  rel="external license"
                  aria-label={item.name}
                >
                  <img src={item.logo} role="presentation" alt="" />
                </a>
              </li>
            )
          })}
        </ul>
      </address>
    </footer>
  )
}
