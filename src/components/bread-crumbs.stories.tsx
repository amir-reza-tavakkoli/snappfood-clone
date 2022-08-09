import type { ComponentProps } from "react"
import { BreadCrumbs } from "./bread-crumbs"

const props: ComponentProps<typeof BreadCrumbs> = {
  items: [
    {
      name: "Snappfood",
      href: "#",
    },
    {
      name: "Bakeries",
      href: "#",
    },
    {
      name: "Shiraz bakeries",
      href: "#",
    },
  ],
}

const rtlProps: ComponentProps<typeof BreadCrumbs> = {
  items: [
    {
      name: "اسنپ فود",
      href: "#",
    },
    {
      name: " نانوایی ها",
      href: "#",
    },
    {
      name: "نانوایی های شیراز",
      href: "#",
    },
  ],
}

export const BreadCrumbsDefault = () => {
  return <BreadCrumbs {...props}></BreadCrumbs>
}

export const DefaultRTL = () => {
  return (
    <div dir="rtl">
      <BreadCrumbs {...rtlProps}></BreadCrumbs>
    </div>
  )
}
