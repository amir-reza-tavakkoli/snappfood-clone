import { Card } from "./card"
import { DeliveryGuyIcon } from "./svg"
import image from "../assets/img.webp"

const img = <img src={image}></img>

export const faded = () => (
  <Card
    title="رستوران بگ میرزا"
    categories={["کباب", "ایرانی", "خورشت"]}
    score="۳.۶"
    scoreNumber="۱۲,۳۶۶"
    delivery="پیک فروشنده"
    deliveryIcon={<DeliveryGuyIcon />}
    deliveryPrice=" ۷,۰۰۰  تومان"
    img={img}
    dir="rtl"
  ></Card>
)
