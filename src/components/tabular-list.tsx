import "./tabular-list.css"

type TabularListProps = {
  title: string
  type: string
  items: {
    name: string
    href?: string
    key?: number
  }[]
}

export const TabularList = ({ title, type, items }: TabularListProps) => {
  return (
    <article className="tabular-list">
      <p>
        {title} <span className="nonvisual">{type}</span>{" "}
      </p>
      <ul className="_list">
        {items.map((item, index, array) => {
          return (
            <li key={item.key ?? index} className="_item">
              {item.href ? <a href={item.href}>{item.name}</a> : item.name}
            </li>
          )
        })}
      </ul>
    </article>
  )
}
