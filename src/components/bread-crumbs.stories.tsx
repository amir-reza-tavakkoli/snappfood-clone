import type { ComponentProps } from "react"
import { BreadCrumbs } from "./bread-crumbs"

const props: ComponentProps<typeof BreadCrumbs> = {
  title: "links",
  item: {
    name: "Snappfood",
    href: "#",
    key: 1,
    successor: {
      name: "Bakery",
      href: "#",
      key: 2,
      successor: {
        name: "Shiraz bakeries",
        href: "#",
        key: 3,
      },
    },
  },
}

const rtlProps: ComponentProps<typeof BreadCrumbs> = {
  title: "لینک ها",
  item: {
    name: "اسنپ فود",
    href: "#",
    key: 1,
    successor: {
      name: "نانوایی",
      href: "#",
      key: 2,
      successor: {
        name: "نانوایی های شیراز",
        href: "#",
        key: 3,
      },
    },
  },
}

export const BreadCrumbsDefault = () => {
    return (
      <BreadCrumbs {...props}></BreadCrumbs>
  )
}

export const DefaultRTL = () => {
    return (
      <html dir="rtl">
        <BreadCrumbs {...rtlProps}></BreadCrumbs>
      </html>
    )
}
