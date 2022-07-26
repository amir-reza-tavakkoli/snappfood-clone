import { Button } from "./styled-button"
import { OrderIcon } from "./svg"

export const faded = () => (
  <Button text="button" icon={<OrderIcon />} variant="faded" />
)

export const accent = () => (
  <div style={{width:"40px"}}>
    <Button
      text="button"
      icon={<OrderIcon />}
      variant="accent"
      rounded="rounded"
      disabled={false}
    />
  </div>
)
