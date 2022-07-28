import type { ReactNode } from "react"
import "./carousel.css"

export type item = { name: string; src: string; href: string; key: number }

type CarouselProps = {
    items: item[]
}

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <ul className="carousel">
      {items.map((item, index, array) => {
        return (
          <li key={item.key}>
            <a href={item.href}>
              <figure>
                <img src={item.src}></img>
                <figcaption>{item.name}</figcaption>
              </figure>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
