import { Button } from "./button"
import { OrderIcon } from "./svg"

export const faded = () => (
  <Button text="button" icon={<OrderIcon />} variant="faded" />
)

export const accent = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button
      text="button"
      icon={<OrderIcon />}
      variant="accent"
      rounded="rounded"
      disabled={false}
    />
  </div>
)
export const RTLAccent = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button
      dir="rtl"
      text="ممد"
      icon={<OrderIcon />}
      variant="accent"
      rounded="rounded"
      disabled={false}
    />
  </div>
)
export const primary = () => (
  <div style={{ inlineSize: "40px" }}>
    <Button text="button" icon={<OrderIcon />} variant="primary" />
  </div>
)
