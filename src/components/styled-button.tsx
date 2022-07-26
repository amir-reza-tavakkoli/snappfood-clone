import { ReactNode } from "react"
import "./styled-button.css"

type DefaultButtonProps = JSX.IntrinsicElements["button"]

type CustomButtonProps = {
  text: string
  icon?: ReactNode
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  rounded?: "normal" | "rounded"
  intent? : "action" | "warning" | "neutral" | "error"
  variant?: "primary" | "accent" | "faded"
}

type ButtonProps = CustomButtonProps & DefaultButtonProps
export const Button = ({
  text,
  icon,
  disabled = false,
  type = "button",
  rounded = "normal",
  variant = "faded",
  intent = "neutral",
  ...rest
}: ButtonProps) => {
  return (
    <button
      data-rounded={rounded}
      type={type}
      disabled={disabled}
      className="styled-button"
      data-variant={variant}
      {...rest}
    >
      {text} {icon ? <span>{icon}</span> : null}
    </button>
  )
}
