import type { ComponentProps } from "react"
import { StoreCard } from "./store-card"

const props: ComponentProps<typeof StoreCard> = {
  name: "مگیران برگر",
  logo: "https://cdn.snappfood.ir/300x200/cdn/vendor_sub_types/7/01.jpg",
  type : "رستوران",
  rating: {
    value: 3.6,
    count: 12366,
    range: 5,
  },
}

export const StoreCardDefault = () => {
  return <StoreCard {...props}></StoreCard>
}

export const Constrained = () => {
  return (
    <div style={{width:"300px"}}>
      <StoreCard {...props}></StoreCard>
    </div>
  )
}
