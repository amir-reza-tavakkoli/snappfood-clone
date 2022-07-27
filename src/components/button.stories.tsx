import { Button } from "./button"
import { OrderIcon, LeftPinkFlashIcon, UserIconFaded } from "./svg"

export const defaultVariant = () => <Button>پیتزا</Button>

export const fadedVariantRTL = () => <Button variant="faded">انصراف</Button>

export const accentVariantIcon = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<OrderIcon />} variant="accent">
      offers
    </Button>
  </div>
)

export const accentVariantConstraintedIconRTL = () => (
  <div style={{ inlineSize: "280px" }}>
    <Button dir="rtl" icon={<UserIconFaded />} variant="accent">
      ورود به حساب کاربری
    </Button>
  </div>
)

export const accentRuondedIconRTL = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<OrderIcon />} variant="accent" rounding="full">
      سفارش
    </Button>
  </div>
)

export const fadedVariantIconConstraintedRTL = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<UserIconFaded />} variant="faded">
      سفارش
    </Button>
  </div>
)
