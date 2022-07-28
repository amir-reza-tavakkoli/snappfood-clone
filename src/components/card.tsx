import { ReactNode } from "react"
import "./card.css"
import { StarIcon, TimeRemainingIcon } from "./svg"

type CardProps = {
  name: string
  storeImageSrc: string
  storeIcon?: ReactNode | undefined
  offer?: string
  delivery?: string
  deliveryOption?: string | undefined
  categories?: Array<string>
  score?: string
  scoreCount?: string
  deliveryIcon?: ReactNode
  dir?: "ltr" | "rtl" | "auto"
  starIcon?: ReactNode
}

export const Card = ({
  name,
  storeImageSrc,
  storeIcon = undefined,
  offer = undefined,
  delivery = "پیش سفارش",
  deliveryOption = undefined,
  categories = [],
  deliveryIcon = <TimeRemainingIcon role="presentation" />,
  score = "جدید",
  scoreCount = undefined,
  dir = "ltr",
  starIcon = <StarIcon role="presentation" />,
}: CardProps) => {
  const categoriesString = categories?.join(", ")
  return (
    <article className="card" dir={dir}>

      <div className="card-image">
        <img src={storeImageSrc} alt={`an image of ${name} store or market`} />
        {storeIcon? <span className="card-store-icon">{storeIcon}</span> : null}
        {offer ? <span className="store-offer">{offer}</span> : null}
      </div>

      <h3>{name}</h3>

      <small>
        {starIcon}
        {score}
        <span className="score-count">({scoreCount})</span>{" "}
      </small>

      <small>{categoriesString}</small>

      {deliveryOption ? (
        <p className="card-delivery">
          {deliveryIcon} {delivery} {deliveryOption}
        </p>
      ) : (
        <p className="card-delivery">
          {deliveryIcon} {delivery}
        </p>
      )}
    </article>
  )
}
