import { Button } from "./button"
import { OrderIcon, UserIconFaded } from "./svg"


export const WithDefaultVariant = () => <Button>faded</Button>

export const WithFadedVariant = () => <Button variant="faded">انصراف</Button>
export const WithAccentVariant = () => <Button variant="accent">انصراف</Button>
export const WithPrimaryVariant = () => (
  <Button variant="primary">انصراف</Button>
)

export const WithAccentVarianAndtIconAndConstrainted = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<OrderIcon />} variant="accent">
      offers
    </Button>
  </div>
)
export const WithAccentVarianAndtIconAndConstraintedAndRTL = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<OrderIcon />} variant="accent">
      ثبت سفارش
    </Button>
  </div>
)

export const WithAccentVariantAndConstraintedAndIconAndRTL = () => (
  <div style={{ inlineSize: "280px" }}>
    <Button dir="rtl" icon={<UserIconFaded />} variant="accent">
      ورود به حساب کاربری
    </Button>
  </div>
)

export const WithAccentAndRouningAndIconAndConstrainted = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<OrderIcon />} variant="accent" rounding="full">
      سفارش
    </Button>
  </div>
)
export const WithAccentAndRouningAndIconAndConstraintedAndRTL = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<OrderIcon />} variant="accent" rounding="full">
      سفارش
    </Button>
  </div>
)

export const WithFadedVariantAndIconAndConstraintedAndRTL = () => (
  <div style={{ width: "40px" }}>
    <Button dir="rtl" icon={<UserIconFaded />} variant="faded">
      سفارش
    </Button>
  </div>
)
