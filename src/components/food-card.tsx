import { Button } from "./button"
import "./food-card.css"

type FoodCardProps = {
  name: string
  ingredients?: string[]
  available: boolean
  image?: string
  price?: {
    vaule: number
    currency: string
  }
}

export const FoodCard = ({
  name,
  image,
  ingredients,
  price,
  available,
}: FoodCardProps) => {
  return (
    <dl className="food-card">
      <div>
        <div>
          <dt className="nonvisual">Name</dt>
          <dd className="_name">{name}</dd>
          {ingredients ? (
            <>
              <dt className="nonvisual">Ingredients</dt>
              <dd className="_ingredients">
                <ul>
                  {ingredients.map((item, index) => (
                    <li key={index}>
                      {item} {index - 1 === ingredients.length ? "" : ", "}
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
          {available ? (
            <Button variant="accent" rounding="full">
              افزودن
            </Button>
          ) : (
            <Button disabled variant="primary" rounding="full">
              افزودن
            </Button>
          )}
        </dd>
      </div>
    </dl>
  )
}
