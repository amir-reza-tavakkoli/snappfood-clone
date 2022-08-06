import "./listbox.css"

type ListBoxProps = {
  title: string
  items: {
    name: string
    img: string
    key?: number
    selected?: boolean
  }[]
}

export const ListBox = ({ title, items }: ListBoxProps) => {
  let selected: string | undefined
  const listItems = items.map((item, index, array) => {
    const id = `ListBox${item.key}${index}`
    return (
      <li
        role="option"
        key={item.key ?? index}
        aria-selected={
          item.selected ? ((selected = id), item.selected) : item.selected
        }
        id={id}
      >
        <img src={item.name} alt="" role="presentation" />
        {item.name}
      </li>
    )
  })
  return (
    <ul
      tabIndex={0}
      role="listbox"
      aria-label={title}
      aria-activedescendant={selected}
    >
      {listItems}
    </ul>
  )
}
