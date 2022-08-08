import type { ComponentProps } from "react"
import { BreadCrumbs } from "./bread-crumbs"

const props: ComponentProps<typeof BreadCrumbs> = {
  title: "links",
  items: [
    {
      name: "Snappfood",
      href: "#",
      key: 1,
    },
    {
      name: "Bakeries",
      href: "#",
      key: 2,
    },
    {
      name: "Shiraz bakeries",
      href: "#",
      key: 3,
    },
  ],
}

const rtlProps: ComponentProps<typeof BreadCrumbs> = {
  title: "لینک ها",
  items: [
    {
      name: "اسنپ فود",
      href: "#",
      key: 1,
    },
    {
      name: " نانوایی ها",
      href: "#",
      key: 2,
    },
    {
      name: "نانوایی های شیراز",
      href: "#",
      key: 3,
    },
  ],
}

export const BreadCrumbsDefault = () => {
  return <BreadCrumbs {...props}></BreadCrumbs>
}

export const DefaultRTL = () => {
  return (
    <html dir="rtl">
      <BreadCrumbs {...rtlProps}></BreadCrumbs>
    </html>
  )
}
