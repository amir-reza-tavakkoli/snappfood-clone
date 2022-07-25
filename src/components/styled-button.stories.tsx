import { StyledButton } from "./styled-button"
import { OrderIcon } from "../assets/svg"
export const faded = () => <StyledButton text="button" icon={<OrderIcon />} variant="faded" />
export const accent = () => (
  <StyledButton
    text="button"
    icon={<OrderIcon />}
    variant="accent"
    rounded="rounded"
  />
)
