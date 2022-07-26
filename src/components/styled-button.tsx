import { ReactNode } from "react"
import "./styled-button.css"

type ButtonProps = {
  text: string
  icon?: ReactNode
  iconSide?: "left" | "right"
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  rounded?: "normal" | "rounded"
  variant?: "primary" | "accent" | "faded" | "warning" | "error" | "action"
  href?: string
}

export const Button = ({
  text,
  icon,
  disabled = false,
  type,
  rounded = "normal",
  variant = "faded",
}: ButtonProps) => {
  return (
    <button
      data-rounded={rounded}
      type={type ? type : "button"}
      disabled={disabled}
      className="styled-button"
      data-variant={variant}
    >
      {text} {icon && iconSide === "right" ? <span>{icon}</span> : null}
    </button>
  )
}
