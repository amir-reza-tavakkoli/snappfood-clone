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
  iconSide = "right",
  disabled = false,
  type,
  href,
  rounded = "normal",
  variant = "faded",
}: ButtonProps) => {
  const content = (
    <>
      {icon && iconSide === "left" ? <span>{icon}</span> : null}
      {text} {icon && iconSide === "right" ? <span>{icon}</span> : null}
    </>
  )
  return href ? (
    <a
      href={href}
      className="styled-button"
      data-rounded={rounded}
      data-disabled={disabled}
      data-variant={variant}
    >
      {content}
    </a>
  ) : (
    <button
      data-rounded={rounded}
      type={type ? type : "button"}
      disabled={disabled}
      className="styled-button"
      data-variant={variant}
    >
      {content}
    </button>
  )
}
