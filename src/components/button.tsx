import { Children, ReactNode } from "react"
import "./button.css"

type DefaultButtonProps = JSX.IntrinsicElements["button"]

type CustomButtonProps = {
  icon?: ReactNode
  rounding?: "normal" | "full"
  variant?: "primary" | "accent" | "faded"
}

type ButtonProps = CustomButtonProps & DefaultButtonProps

export const Button = ({
  icon,
  rounding = "normal",
  variant = "faded",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      data-rounding={rounding}
      className="button"
      data-variant={variant}
      {...rest}
    >
      {children} {icon ? <span>{icon}</span> : null}
    </button>
  )
}
