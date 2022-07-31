import type { ReactNode } from "react"
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

type x = {
  name: string
  icons: {
    image: string
    icon: string
  }

  rating: {
    value: number
    count: number
  }

  offer: number
  tags: string[]
  delivery: {
    type: string
    price: {
      value: string
      curruncy: string
    }
  }
}


// export const X;



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
    <article className="card" dir={dir} aria-label={`an store, named ${name}`}>
      <div className="card-image">
        <img src={storeImageSrc} alt={`an image of ${name} store or market`} />
        {storeIcon ? (
          <span className="card-store-icon">{storeIcon}</span>
        ) : null}
        {offer ? (
          <span className="store-offer">
            <span className="nonvisual">currunt offer is:</span>
            {offer}
          </span>
        ) : null}
      </div>

      <h3>{name}</h3>

      <small
        aria-label={`the store is rated at ${score} by ${scoreCount}`}
        role="presentation"
      >
        {starIcon}
        {score}
        <span className="score-count">({scoreCount})</span>{" "}
      </small>

      <small>
        <span className="nonvisual">types of foods in this store are:</span>
        {categoriesString}
      </small>

      {deliveryOption ? (
        <p
          className="card-delivery"
          aria-label={`deliveried via ${delivery} priced at ${deliveryOption}`}
        >
          {deliveryIcon} {delivery} {deliveryOption}
        </p>
      ) : (
        <p className="card-delivery" aria-label="you can only reserve">
          {deliveryIcon} {delivery}
        </p>
      )}
    </article>
  )
}
