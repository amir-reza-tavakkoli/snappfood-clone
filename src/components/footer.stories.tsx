import { ComponentProps } from "react"
import { Footer } from "./footer"

const props: ComponentProps<typeof Footer> = {
  name: "SnappFood",
  description: "Experince the delightful sex",
  homepage: "snappfood.ir",
  logo: { name: "snappfood" },
  contacts: [
    { href: "#", logo: { name: "twitter" } },
    { href: "#", logo: { name: "telegram" } },
    { href: "#", logo: { name: "linkedin" } },
    { href: "#", logo: { name: "instagram" } },
    { href: "#", logo: { name: "aparat" } },
  ],
  credentials: [
    {
      name: "Enamad",
      href: "",
      logo: "https://trustseal.enamad.ir/logo.aspx?id=65397&Code=xzjJOBtSHm9NSiFaYy2l",
    },
    {
      name: "E-Trust",
      href: "",
      logo: "https://snappfood.ir/static/images/senf.png",
    },
  ],
  links: [
    { name: "درباره اسنپ فود", href: "#" },
    { name: "وبلاگ", href: "#" },
    { name: "قوانین سایت", href: "#" },
    { name: "حریم شخصی", href: "#" },
    { name: "ثبت نام فروشندگان", href: "#" },
    { name: "تماس با اسنپ فود", href: "#" },
    { name: "ٍثبت شکایات", href: "#" },
    { name: "پرسش های متداول", href: "#" },
  ],
}

export const DefaultFooter = () => {
  return (
    <Footer {...props}></Footer>
  )
}