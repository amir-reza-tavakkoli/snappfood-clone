import type { ReactNode } from "react"
import "./vendor-card.css"
import { StarIcon, TimeRemainingIcon, DeliveryGuyIcon } from "./svg"

export type VendorCardProps = {
  name: string
  type?: string
  image: string
  logo?: ReactNode | string
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
      <dd className="_name">{name}</dd>

      {type ? (
        <>
          <dt className="nonvisual">Type</dt>
          <dd className="nonvisual">{type}</dd>{" "}
        </>
      ) : null}

      {tags ? (
        <>
          <dt className="nonvisual">Categories</dt>
          <dd>
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

      <div className="_images">
        <dt className="nonvisual">Image</dt>
        <dd className="_image">
          <img src={image} alt={name} />
          {logo ? (
            <span className="_logo" role="presentation">
              {typeof logo === "string" ? (
                <img src={logo} alt="" role="presentation" />
              ) : (
                <>{logo}</>
              )}
            </span>
          ) : null}
        </dd>

        {discount ? (
          <>
            <dt className="nonvisual">Offer</dt>
            <dd className="_discount">{` ${discount}%`}</dd>
          </>
        ) : null}
      </div>

      {rating ? (
        <>
          <dt className="nonvisual">Rating</dt>
          <dd className="_rating">
            <dl>
              {<StarIcon role="presentation" />}
              <dt className="nonvisual">{rating.type}</dt>
              <dd>
                {rating.value ?? "Unknown"}
                <span className="nonvisual">/ {rating.range ?? "unknown"}</span>
              </dd>
              <dt className="nonvisual">Count</dt>
              <dd className="_rating-count">( {rating.count ?? ""} )</dd>
            </dl>
          </dd>
        </>
      ) : null}

      <dt className="nonvisual">Delivery</dt>
      <dd>
        <dl>
          {delivery.price ? (
            <>
              <dt className="nonvisual">Method / Price:</dt>
              <>
                <dd className="_delivery">
                  <DeliveryGuyIcon role="presentation" />
                  <div>
                    <span>{delivery.method} </span>

                    <span>{delivery.price.value ?? ""} </span>

                    <span>{delivery.price.currency ?? ""}</span>
                  </div>
                  <dt className="nonvisual">Curruncy</dt>
                </dd>
              </>
            </>
          ) : (
            <>
              <dt className="nonvisual">Type</dt>
              <dd className="_delivery faded">
                <>
                  <TimeRemainingIcon role="presentation" />
                  <span>{delivery.method}</span>
                </>
              </dd>
            </>
          )}
        </dl>
      </dd>
    </dl>
  )
}
