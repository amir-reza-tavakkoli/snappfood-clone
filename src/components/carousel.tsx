import "./carousel.css"

export type item = { name: string; src: string; href: string; key: number }

type CarouselProps = {
  type: string
  items: item[]
}

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <nav>
      <ul className="carousel">
        {items.map((item, index, array) => {
          return (
            <li key={item.key}>
              <a href={item.href} className="_link">
                <div>
                  <img src={item.src} alt={item.name}></img>
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
