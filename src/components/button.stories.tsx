import { Button } from "./button"
import { OrderIcon, LeftPinkFlashIcon, UserIconFaded } from "./svg"

export const WithDefaultVariant = () => <Button>پیتزا</Button>

export const WithFadedVariantRTL = () => <Button variant="faded">انصراف</Button>

export const WithAccentVariantIcon = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<OrderIcon />} variant="accent">
      offers
    </Button>
  </div>
)

export const WithAccentVariantConstraintedIconRTL = () => (
  <div style={{ inlineSize: "280px" }}>
    <Button dir="rtl" icon={<UserIconFaded />} variant="accent">
      ورود به حساب کاربری
    </Button>
  </div>
)

export const WithAccentRuondedIconRTL = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<OrderIcon />} variant="accent" rounding="full">
      سفارش
    </Button>
  </div>
)

export const WithFadedVariantIconConstraintedRTL = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<UserIconFaded />} variant="faded">
      سفارش
    </Button>
  </div>
)
