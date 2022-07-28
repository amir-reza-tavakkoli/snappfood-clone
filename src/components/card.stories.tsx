import { Card } from "./card"
import { DeliveryGuyIcon } from "./svg"
import image from "../assets/img.webp"
import storeIcon from "../assets/store-icon.webp"

export const card = () => {
  const storeIco = <img src={storeIcon} role="presentation"></img>
  return (
    <Card
      name="رستوران بگ میرزا"
      storeImageSrc={image}
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
export const constraintedCard = () => {
  const storeIco = <img src={storeIcon} role="presentation"></img>
  return (
    <div
      style={{
        width: "350px",
        height: "300px",
      }}
    >
      <Card
        name="رستوران بگ میرزا"
        storeImageSrc={image}
        storeIcon={storeIco}
        offer="%۱۲"
        delivery="پیک فروشنده"
        deliveryIcon={<DeliveryGuyIcon role="presentation" />}
        deliveryOption=" ۷,۰۰۰  تومان"
        categories={["کباب", "ایرانی", "خورشت"]}
        score="۳.۶"
        scoreCount="۱۲,۳۶۶"
        dir="rtl"
      ></Card>
    </div>
  )
}
