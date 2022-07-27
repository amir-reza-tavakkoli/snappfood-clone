import { Button } from "./button"
import { OrderIcon } from "./svg"

export const defaultVariant = () => (
  <Button></Button>
)

export const fadedVariant = () => (
  <Button icon={<OrderIcon />} variant="faded">
    button
  </Button>
)

export const accentVariant = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button
      icon={<OrderIcon />}
      variant="accent"
      rounding="full"
      className="fff"
      disabled={false}
    >
      button
    </Button>
  </div>
)
export const RTLAccentVariant = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button
      dir="rtl"
      icon={<OrderIcon />}
      variant="accent"
      rounding="full"
      disabled={false}
    >
      ممد
    </Button>
  </div>
)
export const primaryVariant = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<OrderIcon />} variant="primary">
      button
    </Button>
  </div>
)
