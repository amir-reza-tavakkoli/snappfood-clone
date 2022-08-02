import { VendorCard } from "./vendor-card"
import type { ComponentProps } from "react"

const cardProps: ComponentProps<typeof VendorCard> = {
  name: "نان قندی و یوخه پزی چهار فصل",
  type: "رستوران",
  icon: (
    <img src="https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/623209826af52.jpg" />
  ),
  image: "https://cdn.snappfood.ir/300x200/cdn/vendor_sub_types/7/01.jpg",
  rating: {
    value: 3.6,
    count: 12366,
    range: 5,
  },
  tags: ["کباب", "ایرانی", "خورشت"],
  offer: 12,
  delivery: {
    type: "پیک فروشنده",
    price: {
      value: 7000,
      curruncy: "تومان",
    },
  },
}

export const card = () => {
  return <VendorCard {...cardProps}></VendorCard>
}
export const cardAndConstrainted = () => {
  return (
    <div
      style={{
        width: "350px",
        height: "300px",
      }}
    >
      <VendorCard {...cardProps}></VendorCard>
    </div>
  )
}
export const cardAndConstraintedAndRTL = () => {
  return (
    <div
      dir="rtl"
      style={{
        width: "350px",
        height: "300px",
      }}
    >
      <VendorCard {...cardProps}></VendorCard>
    </div>
  )
}
