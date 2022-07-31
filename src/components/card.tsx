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
    value?: number | string
    range?: number
    count?: number
  }

  offer?: number
  tags?: string[]
  delivery: {
    type: string
    price?: {
      value?: number
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
        <dt className="nonvisual">Image of the place</dt>
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

      {type ? (
        <>
          <dt className="nonvisual">type is:</dt>
          <dd className="nonvisual">{type}</dd>{" "}
        </>
      ) : null}

      {rating ? (
        <>
          <dt className="nonvisual">Rating</dt>
          <dd data-field="rating">
            <dl>
              {<StarIcon role="presentation" />}
              <dt className="nonvisual">Stars</dt>
              <dd>
                {rating.value ?? "Unknown rating"}
                <span className="nonvisual">
                  / {rating.range ?? "unknown range"}
                </span>
              </dd>
              <dt className="nonvisual">Count</dt>
              <dd className="score-count">( {rating.count ?? 0} )</dd>
            </dl>
          </dd>
        </>
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
            <>
              <dt className="nonvisual">Type / Price:</dt>
              <>
                <dd className="card-delivery">
                  {<DeliveryGuyIcon role="presentation" />} {delivery.type}{" "}
                  {delivery.price.value}
                </dd>
                <dt className="nonvisual">Curruncy:</dt>
                <dd className="nonvisual">
                  {delivery.price.curruncy ?? "Unknown curruncy"}
                </dd>
              </>
            </>
          ) : (
            <>
              <dt className="nonvisual">Type:</dt>
              <dd className="card-delivery">
                <>
                  {<TimeRemainingIcon role="presentation" />} {delivery.type}
                </>
              </dd>
            </>
          )}
        </dl>
      </dd>
    </dl>
  )
}
