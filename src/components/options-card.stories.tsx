import type { ComponentProps } from "react"
import { OptionsCard } from "./options-card"

const props: ComponentProps<typeof OptionsCard> = {
  options: [
    {
      name: "پیک فروشنده",
      interactive: false,
      value: "4000تومان",
      icon: { name: "delivery", color: "text" },
    },
    {
      name: "پیک فروشنده",
      interactive: false,
      value: "4000تومان",
      icon: { name: "delivery", color: "text" },
    },
    {
      name: "پیک فروشنده",
      interactive: true,
      value: "4000تومان",
      icon: { name: "delivery", color: "text" },
    },
  ],
}

export const OptionsCardDefault = () => {
  return <OptionsCard {...props}></OptionsCard>
}
