import { Carousel } from "./carousel"
import type { item } from "./carousel"


const items: item[] = [
  {
    name: "ستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 2,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 3,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 4,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 5,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 6,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 7,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 8,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 9,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 10,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 11,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 12,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 13,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 14,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 15,
    href: "#",
  },
  {
    name: "رستوران",
    src: "https://snappfood.ir/static/images/pin.svg",
    key: 16,
    href: "#",
  },
]

export const carousel = () => {
  return <Carousel items={items} />
}
