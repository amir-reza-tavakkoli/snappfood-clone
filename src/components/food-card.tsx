import { Button } from "./button"
import "./food-card.css"

type FoodCardProps = {
  name: string
  type: string
  ingredients?: string[]
  available: boolean
  image?: string
  price?: {
    vaule: number
    currency: string
  }
  variations?: {
    name: "string"
    price: {
      vaule: number
      currency: string
    }
  }[]
}

export const FoodCard = ({
  name,
  type,
  image,
  ingredients,
  price,
  available,
  variations,
}: FoodCardProps) => {
  return (
    <dl className="food-card" aria-label="Food">
      <div>
        <div>
          <dt className="nonvisual">Name</dt>
          <dd className="_name">{name}</dd>
          <dt className="nonvisual">Type</dt>
          <dd className="nonvisual">{type}</dd>
          {ingredients ? (
            <>
              <dt className="nonvisual">Ingredients</dt>
              <dd className="_ingredients">
                <ul>
                  {ingredients.map((item, index) => (
                    <li key={index}>
                      {item} {index !== ingredients.length - 1 ? ", " : " "}
                    </li>
                  ))}
                </ul>
              </dd>
            </>
          ) : null}
        </div>
        <img
          src={image ?? "https://snappfood.ir/static/images/placeholder.png"}
          alt=""
          role="presentation"
        />
      </div>
      <div>
        {price ? (
          <>
            <dt className="nonvisual">Price</dt>
            <dd>
              <dl className="_price">
                <dt className="nonvisual">Value</dt>
                <dd>{price.vaule}</dd>
                <dt className="nonvisual">Currency</dt>
                <dd>{price.currency}</dd>
              </dl>
            </dd>
          </>
        ) : null}
        <dt className="nonvisual">Availbility</dt>
        <dd>
          {!variations && available ? (
            <Button
              variant="primary"
              rounding="full"
              aria-lable={!available ? "Not available" : "available"}
            >
              افزودن
            </Button>
          ) : (
            <Button
              disabled
              variant="primary"
              rounding="full"
              aria-lable={(!available ? "Not available" : "available")}
            >
              افزودن
            </Button>
          )}
        </dd>
      </div>
    </dl>
  )
}
