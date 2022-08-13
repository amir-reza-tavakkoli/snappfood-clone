import { FoodCard } from "./food-card"

const props = {
  name: "پیتزا استیک",
  ingredients: ["گوشت خوک مرینت شده", "پنیر گودا", "سس ناپولی", "ریحان"],
  available: true,
  image:
    "https://cdn.snappfood.ir/641x641/cdn/71/82/3/vendor/62b604a15b978.jpeg",
  price: {
    vaule: 70000,
    currency: "تومان",
  },
}

export const FoodCardDefault = () => {
    return (
        <FoodCard {...props}></FoodCard>
    )
}

export const constrained = () => {
    return (
      <div style={{ width: "250px", height: "250px" }}>
        <FoodCard {...props}></FoodCard>
      </div>
    )
}