import { VendorCard } from "./vendor-card"
import type { ComponentProps } from "react"

const cardProps: ComponentProps<typeof VendorCard> = {
  name: "نان قندی و یوخه پزی چهار فصل",
  type: "رستوران",
  logo:
    "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/623209826af52.jpg"
  ,
  image: "https://cdn.snappfood.ir/300x200/cdn/vendor_sub_types/7/01.jpg",
  rating: {
    value: 3.6,
    count: 12366,
    range: 5,
  },
  tags: ["کباب", "ایرانی", "خورشت"],
  discount: 12,
  delivery: {
    method: "پیک فروشنده",
    price: {
      value: 7000,
      currency: "تومان",
    },
  },
}

export const card = () => {
  return <VendorCard {...cardProps}></VendorCard>
}
export const cardAndConstrained = () => {
  return (
    <div
      style={{
        width: "350px",
      }}
    >
      <VendorCard {...cardProps}></VendorCard>
    </div>
  )
}
export const cardAndConstrainedAndRTL = () => {
  return (
    <div
      dir="rtl"
      style={{
        width: "350px",
      }}
    >
      <VendorCard {...cardProps}></VendorCard>
    </div>
  )
}
