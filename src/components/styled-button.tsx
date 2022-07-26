import { ReactNode } from "react"
import "./styled-button.css"

type ButtonProps = {
  text: string
  icon?: ReactNode
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  rounded?: "normal" | "rounded"
  variant?: "primary" | "accent" | "faded" | "warning" | "error" | "action"
}

export const Button = ({
  text,
  icon,
  disabled = false,
  type = "button",
  rounded = "normal",
  variant = "faded",
}: ButtonProps) => {
  return (
    <button
      data-rounded={rounded}
      type={type}
      disabled={disabled}
      className="styled-button"
      data-variant={variant}
    >
      {text} {icon ? <span>{icon}</span> : null}
    </button>
  )
}
