import type { ReactNode } from "react"
import "./vendor-card.css"
import { StarIcon, TimeRemainingIcon, DeliveryGuyIcon } from "./svg"

export type VendorCardProps = {
  name: string
  type?: string
  image: string
  logo?: ReactNode

  rating?: {
    value?: number | string
    range?: number
    count?: number
    type?: string
  }

  discount?: number
  tags?: string[]
  delivery: {
    method: string
    price?: {
      value?: number
      currency?: string
    }
  }
}

export const VendorCard = ({
  name,
  logo,
  image,
  rating,
  type,
  discount,
  tags,
  delivery,
}: VendorCardProps) => {
  return (
    <dl className="vendor-card">
      <dt className="nonvisual">Name</dt>
      <dd data-field="name">{name}</dd>

      {type ? (
        <>
          <dt className="nonvisual">Type</dt>
          <dd className="nonvisual" data-field="type">
            {type}
          </dd>{" "}
        </>
      ) : null}

      {tags ? (
        <>
          <dt className="nonvisual">Categories</dt>
          <dd data-field="category">
            <ol className="_categories">
              {tags.map((tag, index, array) =>
                index === array.length - 1 ? (
                  <li key={index}>{tag}</li>
                ) : (
                  <li key={index}>{`${tag}, `}</li>
                ),
              )}
            </ol>
          </dd>
        </>
      ) : null}

      <div className="_card-image">
        <dt className="nonvisual">Image</dt>
        <dd data-field="image">
          <img src={image} alt={name} />
          {logo ? (
            <span className="_card-store-icon" role="presentation">
              {logo}
            </span>
          ) : null}
        </dd>

        {discount ? (
          <>
            <dt className="nonvisual">Offer</dt>
            <dd data-field="discount">{` ${discount}%`}</dd>
          </>
        ) : null}
      </div>

      {rating ? (
        <>
          <dt className="nonvisual">Rating</dt>
          <dd data-field="rating">
            <dl>
              {<StarIcon role="presentation" />}
              <dt className="nonvisual">{rating.type}</dt>
              <dd data-field="rating value range">
                {rating.value ?? "Unknown"}
                <span className="nonvisual">/ {rating.range ?? "unknown"}</span>
              </dd>
              <dt className="nonvisual">Count</dt>
              <dd className="_score-count" data-field="rating count">
                ( {rating.count ?? ""} )
              </dd>
            </dl>
          </dd>
        </>
      ) : null}

      <dt className="nonvisual">Delivery</dt>
      <dd data-field="delivery">
        <dl>
          {delivery.price ? (
            <>
              <dt className="nonvisual">Method / Price:</dt>
              <>
                <dd data-field="delivery method" className="_delivery">
                  {<DeliveryGuyIcon role="presentation" />}
                  <div>
                    <span>{delivery.method} </span>

                    <span data-field="delivery price">
                      {delivery.price.value ?? ""}{" "}
                    </span>

                    <span data-field="delivery currency">
                      {delivery.price.currency ?? ""}
                    </span>
                  </div>
                  <dt className="nonvisual">Curruncy</dt>
                </dd>
              </>
            </>
          ) : (
            <>
              <dt className="nonvisual">Type</dt>
              <dd data-field="delivery" className="_delivery faded">
                <>
                  {<TimeRemainingIcon role="presentation" />}
                  <span data-field="delivery method">{delivery.method}</span>
                </>
              </dd>
            </>
          )}
        </dl>
      </dd>
    </dl>
  )
}
