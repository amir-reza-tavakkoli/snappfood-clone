import { ComponentProps } from "react"
import { Icon } from "./icon"
import "./options-card.css"

type OptionsCardProps = {
  options: {
    name: string
    value: string
    interactive: boolean
    icon: ComponentProps<typeof Icon>
  }[]
}

export const OptionsCard = ({ options }: OptionsCardProps) => {
  return (
    <dl className="options-card">
      <dt className="nonvisual">Options</dt>
      <dd>
        <dl>
          {options.map((item, index) =>
            item.interactive ? (
              <div key={index} data-interactive>
                {<Icon name={item.icon.name} color={item.icon.color} />}
                <dt>{item.name}</dt>
                <dd>{item.value}</dd>
                <button type="button">
                  {<Icon name="flash" color="action" />}
                </button>
              </div>
            ) : (
              <div key={index}>
                {<Icon name={item.icon.name} color={item.icon.color} />}
                <dt>{item.name}</dt>
                <dd>{item.value}</dd>
              </div>
            ),
          )}
        </dl>
      </dd>
    </dl>
  )
}
