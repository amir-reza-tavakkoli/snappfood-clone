import type { ReactNode } from "react"
import "./vendor-card.css"
import { StarIcon, TimeRemainingIcon, DeliveryGuyIcon } from "./svg"

export type VendorCardProps = {
  name: string
  image: string
  type?: string
  logo?: ReactNode | string
  rating?: {
    value?: number | string
    range?: number
    count?: number
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
      {name ? <dd className="_name">{name}</dd> : null}

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
          <>
            {image ? <img src={image} alt={`${name}  ${type}`} /> : null}
            {logo ? (
              <span className="_logo" role="presentation">
                {typeof logo === "string" ? (
                  <img src={logo} alt="" role="presentation" />
                ) : (
                  <>{logo}</>
                )}
              </span>
            ) : null}
          </>
        </dd>

        {discount ? (
          <>
            <dt className="nonvisual">Discount</dt>
            <dd className="_discount">{` ${discount}%`}</dd>
          </>
        ) : null}
      </div>

      {rating ? (
        <>
          <dt className="nonvisual">Rating</dt>
          <dd className="_rating">
            <dl>
              <dt className="nonvisual" role="presentation"></dt>
              <dd role="presentation" className="_star-icon">
                {<StarIcon role="presentation" />}
              </dd>
              <dt className="nonvisual">Value</dt>
              <dd aria-label="Stars">
                {rating.value ?? "New"}
                {rating.range ? (
                  <span className="nonvisual">/ {rating.range}</span>
                ) : null}
              </dd>
              {rating.count ? (
                <>
                  <dt className="nonvisual">Count</dt>
                  <dd className="_rating-count">( {rating.count} )</dd>{" "}
                </>
              ) : null}
            </dl>
          </dd>
        </>
      ) : null}

      {delivery ? (
        <>
          <dt className="nonvisual">Delivery</dt>
          <dd>
            <dl>
              {delivery.price && delivery.method ? (
                <>
                  <dt className="nonvisual">Method / Price:</dt>
                  <>
                    <dd className="_delivery">
                      <DeliveryGuyIcon role="presentation" />
                      <div>
                        <span>{delivery.method} </span>
                        {delivery.price.value ? (
                          <span>{delivery.price.value} </span>
                        ) : null}
                        {delivery.price.currency ? (
                          <span>{delivery.price.currency ?? ""}</span>
                        ) : null}
                      </div>
                    </dd>
                    <dt className="nonvisual">Currency</dt>
                  </>
                </>
              ) : (
                <>
                  <dt className="nonvisual">Method</dt>
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
        </>
      ) : null}
    </dl>
  )
}
