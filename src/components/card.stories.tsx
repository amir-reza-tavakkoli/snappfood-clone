import { Card } from "./card"
import { DeliveryGuyIcon } from "./svg"
import  "../assets/img.jpg"

export const faded = () => (
  <Card
    title="yy"
    categories={[]}
    score="4.7"
    scoreNumber="3834"
    delivery="فروشنده"
    deliveryIcon = {<DeliveryGuyIcon/>}
    deliveryPrice="7000 تومان"
    img={<img src="../assets/img.jpg"></img>}
  ></Card>
)
