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
    <ul className="tabular-list">
      <>
        <h3>
          {title} <span className="nonvisual"> {type}</span>{" "}
        </h3>
        <div>
          {items.map((item, index, array) => {
            return (
              <li key={index}>
                {item.href ? <a href={item.href}>{item.name}</a> : item.name}
              </li>
            )
          })}
        </div>
      </>
    </ul>
  )
}
