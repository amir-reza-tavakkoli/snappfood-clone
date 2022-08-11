import "./tabular-list.css"

type TabularListProps = {
  title: string
  type: string
  items: {
    name: string
    href?: string
  }[]
}

export const TabularList = ({ title, type, items }: TabularListProps) => {
  return (
    <article className="tabular-list">
      <p>{title}</p>
      <ul aria-label={type ?? undefined}>
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? <a href={item.href}>{item.name}</a> : item.name}
          </li>
        ))}
      </ul>
    </article>
  )
}
