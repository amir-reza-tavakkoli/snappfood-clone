import { Button } from "./button"
import { OrderIcon } from "./svg"

export const faded = () => (
  <Button icon={<OrderIcon />} variant="faded">
    button
  </Button>
)

export const accent = () => (
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
export const RTLAccent = () => (
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
export const primary = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button icon={<OrderIcon />} variant="primary">
      button
    </Button>
  </div>
)
