import { ReactNode } from "react"
import "./styled-button.css"

type DefaultButtonProps = JSX.IntrinsicElements["button"]

type CustomButtonProps = {
  text: string
  icon?: ReactNode
  rounded?: "normal" | "rounded"
  intent? : "action" | "warning" | "neutral" | "error"
  variant?: "primary" | "accent" | "faded"
}

type ButtonProps = CustomButtonProps & DefaultButtonProps

export const Button = ({
  text,
  icon,
  rounded = "normal",
  variant = "faded",
  intent = "neutral",
  ...rest
}: ButtonProps) => {
  return (
    <button
      data-rounded={rounded}
      className="styled-button"
      data-variant={variant}
      {...rest}
    >
      {text} {icon ? <span>{icon}</span> : null}
    </button>
  )
}
