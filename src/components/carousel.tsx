import "./carousel.css"

export type item = { name: string; src?: string; href?: string; key: number }

type CarouselProps = {
  type: string
  items: item[]
}

export const Carousel = ({ items, type }: CarouselProps) => {
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
