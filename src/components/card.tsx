import type { ReactNode } from "react"
import "./card.css"
import { StarIcon, TimeRemainingIcon, DeliveryGuyIcon } from "./svg"

export type CardProps = {
  name: string
  type?: string
  icons: {
    image: string
    icon?: ReactNode
  }

  rating?: {
    value?: number
    range?: number
    count?: number
  }

  offer?: number
  tags?: string[]
  delivery: {
    type?: string
    price?: {
      value?: number | string
      curruncy?: string
    }
  }
}

export const Card = ({
  name,
  icons,
  rating,
  type,
  offer,
  tags,
  delivery,
}: CardProps) => {
  return (
    <dl className="card">
      <div className="card-image">
        <dt className="nonvisual">An image of the place</dt>
        <dd data-field="image">
          <img src={icons.image} alt={name} />
          {icons.icon ? (
            <span className="card-store-icon" role="presentation">
              {icons.icon}
            </span>
          ) : null}
        </dd>

        {offer ? (
          <>
            <dt className="nonvisual">Currunt offer is:</dt>
            <dd className="store-offer">{` ${offer} %`}</dd>
          </>
        ) : null}
      </div>

      <dt className="nonvisual">Name is:</dt>
      <dd data-field="name">
        <h3>{name}</h3>
      </dd>

      <dt className="nonvisual">type is:</dt>
      <dd className="nonvisual">{type}</dd>

      <dt className="nonvisual">Rating</dt>
      {rating ? (
        <dd data-field="rating">
          <dl>
            {<StarIcon role="presentation" />}
            <dt className="nonvisual">Stars</dt>
            <dd>
              {rating.value}
              <span className="nonvisual">/ {rating.range}</span>
            </dd>
            <dt className="nonvisual">Count</dt>
            <dd className="score-count">( {rating.count} )</dd>
          </dl>
        </dd>
      ) : null}

      <dt className="nonvisual">Categories</dt>
      {tags ? (
        <dd data-field="category">
          <ol className="categories">
            {tags.map((tag, index, array) =>
              index == array.length - 1 ? (
                <li key={index}>{tag}</li>
              ) : (
                <li key={index}>{`${tag}, `}</li>
              ),
            )}
          </ol>
        </dd>
      ) : null}

      <dt className="nonvisual">Delivery</dt>
      <dd>
        <dl>
          {delivery.price ? (
            <dd className="card-delivery">
              <>
                {<DeliveryGuyIcon role="presentation" />} {delivery.type}{" "}
                {delivery.price.value}
                <span className="nonvisual">{delivery.price.curruncy}</span>
              </>
            </dd>
          ) : (
            <dd className="card-delivery">
              <>
                {<TimeRemainingIcon />} {delivery.type}
              </>
            </dd>
          )}
        </dl>
      </dd>
    </dl>
  )
}
