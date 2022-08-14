import { Button } from "./button"
import { Icon } from "./icon"
import "./store-card.css"

type StoreCardProps = {
  name: string
  logo: string
  type?: string
  rating?: {
    value?: number | string
    range?: number
    count?: number
  }
}

export const StoreCard = ({ name, logo, type, rating }: StoreCardProps) => {
  return (
    <dl className="store-card">
      <div>
        <div className="_identity">
          <dt className="nonvisual">Name</dt>
          <dd className="_name">{name}</dd>
          <dt className="nonvisual">Type</dt>
          <dd className="nonvisual">{type}</dd>

          <dt className="nonvisual">Ratings</dt>
          <dl>
            {rating ? (
              <>
                <dt className="nonvisual">Rating</dt>
                <dd className="_rating">
                  <dl>
                    <dt className="nonvisual">Starts</dt>
                    <dd className="_star-icon">
                      {<Icon name="star" role="presentation" />}
                    </dd>
                    {rating.value ? (
                      <>
                        <dt className="nonvisual">Value</dt>
                        <dd aria-label="Stars">{rating.value}</dd>{" "}
                      </>
                    ) : null}
                    {rating.range ? (
                      <>
                        <dd className="nonvisual">Range</dd>
                        <dt className="nonvisual">/ {rating.range}</dt>
                      </>
                    ) : null}
                    {rating.count ? (
                      <>
                        <dt className="nonvisual">Count</dt>
                        <dd className="_rating-count">
                          ( {rating.count} نظر)
                        </dd>{" "}
                      </>
                    ) : null}
                  </dl>
                </dd>
              </>
            ) : null}
          </dl>
        </div>
        <div className="_image">
          <dt className="nonvisual">Logo</dt>
          <dd>
            <img alt="" role="presentation" src={logo}></img>
          </dd>
        </div>
      </div>
      <div>
        <dt className="nonvisual">Information</dt>
        <dd>
          <Button variant="primary" type="button" rounding="full">
            اطلاعات و نظرات
          </Button>
        </dd>
      </div>
    </dl>
  )
}
