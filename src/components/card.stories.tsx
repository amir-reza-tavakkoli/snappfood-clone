import { Card } from "./card"
import { DeliveryGuyIcon } from "./svg"
import image from "../assets/img.webp"
import storeIcon from "../assets/store-icon.webp"

const img = <img src={image}></img>
const storeIco = <img src={storeIcon}></img>

export const faded = () => (
  <Card
    title="رستوران بگ میرزا"
    categories={["کباب", "ایرانی", "خورشت"]}
    score="۳.۶"
    scoreNumber="۱۲,۳۶۶"
    storeIcon = {storeIco}
    delivery="پیک فروشنده"
    deliveryIcon={<DeliveryGuyIcon />}
    deliveryOption=" ۷,۰۰۰  تومان"
    img={img}
    dir="rtl"
  ></Card>
)
