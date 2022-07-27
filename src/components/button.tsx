import { Children, ReactNode } from "react"
import "./button.css"

type DefaultButtonProps = JSX.IntrinsicElements["button"]

type CustomButtonProps = {
  icon?: ReactNode
  rounded?: "normal" | "rounded"
  variant?: "primary" | "accent" | "faded"
}

type ButtonProps = CustomButtonProps & DefaultButtonProps

export const Button = ({
  icon,
  rounded = "normal",
  variant = "faded",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      data-rounded={rounded}
      className="button"
      data-variant={variant}
      {...rest}
    >
      {children} {icon ? <span>{icon}</span> : null}
    </button>
  )
}
