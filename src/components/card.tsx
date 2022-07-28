import { ReactNode } from "react"
import "./card.css"
import { StarIcon, TimeRemainingIcon } from "./svg"

type CardProps = {
  img?: ReactNode
  title: string
  categories?: Array<string>
  score?: string
  scoreNumber?: string
  delivery?: string
  deliveryOption?: string
  deliveryIcon?: ReactNode
  offer?: string
  storeIcon?: ReactNode
  dir?: "ltr" | "rtl" | "auto"
  defaultIcon?: ReactNode
}
export const Card = ({
  img,
  storeIcon,
  title,
  delivery = "پیش سفارش",
  deliveryIcon,
  deliveryOption,
  defaultIcon = <TimeRemainingIcon />,
  categories,
  score,
  scoreNumber,
  offer,
  dir = "ltr",
}: CardProps) => {
  const categoriesString = categories?.join(", ")
  return (
    <article className="card" dir={dir}>
      <div className="card-image">
        {img} <span className="card-store-icon">{storeIcon}</span> <span>{offer}</span>
      </div>
      <h3>{title}</h3>
      <small>
        <StarIcon />
        {score}({scoreNumber}){" "}
      </small>
      <small>{categoriesString}</small>
      {deliveryOption ? (
        <p className="card-delivery">
          {deliveryIcon} {delivery} {deliveryOption}
        </p>
      ) : (
        <p className="card-delivery">
          {defaultIcon} {delivery}
        </p>
      )}
    </article>
  )
}
