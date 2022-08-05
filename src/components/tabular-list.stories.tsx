import type { ComponentProps } from "react"
import { TabularList } from "./tabular-list"

const props: ComponentProps<typeof TabularList> = {
  title: "اسنپ‌فود در شهرهای ایران",
  type: "cities",
  items: [
    { name: "شیراز", href: "#" },
    { name: "تهران", href: "#" },
    { name: "بندر عباس", href: "#" },
    { name: "شهرکرد", href: "#" },
    { name: "آباده", href: "#" },
    { name: "قزوین", href: "#" },
    { name: "ساری", href: "#" },
    { name: "کرمان", href: "#" },
    { name: "عباس شهر", href: "#" },
    { name: "مشهد", href: "#" },
    { name: "بیرجند", href: "#" },
    { name: "شیراز", href: "#" },
    { name: "تهران", href: "#" },
    { name: "بندر عباس", href: "#" },
    { name: "شهرکرد", href: "#" },
    { name: "آباده", href: "#" },
    { name: "قزوین", href: "#" },
    { name: "ساری", href: "#" },
    { name: "کرمان", href: "#" },
    { name: "عباس شهر", href: "#" },
    { name: "مشهد", href: "#" },
    { name: "بیرجند", href: "#" },
  ],
}

export const TabularListDefault = () => {
  return <TabularList {...props}></TabularList>
}
