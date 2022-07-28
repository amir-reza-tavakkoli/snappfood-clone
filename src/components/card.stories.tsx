import { Card } from "./card"
import { DeliveryGuyIcon } from "./svg"
import image from  "../assets/img.webp"

const img = <img src={image}></img>

export const faded = () => (
  <Card
    title="رستوران بگ میرزا"
    categories={["کباب", "ایرانی", "خورشت"]}
    score="4.7"
    scoreNumber="3834"
    delivery=":پیک فروشنده"
    deliveryIcon={<DeliveryGuyIcon />}
    deliveryPrice=" 7000 تومان"
    img = {img}
    ></Card>
    )
