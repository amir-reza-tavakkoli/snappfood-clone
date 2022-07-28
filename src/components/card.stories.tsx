import { Card } from "./card"
import { DeliveryGuyIcon } from "./svg"
import image from "../assets/img.webp"
import storeIcon from "../assets/store-icon.webp"

const storeIco = <img src={storeIcon} role="presentation"></img>

export const faded = () => {
  const img = <img src={image} alt=""/>
  return (
    <Card
      name="رستوران بگ میرزا"
      storeImage={img}
      storeIcon={storeIco}
      offer="۱۲%"
      delivery="پیک فروشنده"
      deliveryIcon={<DeliveryGuyIcon role="presentation" />}
      deliveryOption=" ۷,۰۰۰  تومان"
      categories={["کباب", "ایرانی", "خورشت"]}
      score="۳.۶"
      scoreCount="۱۲,۳۶۶"
      dir="rtl"
    ></Card>
  )
}
