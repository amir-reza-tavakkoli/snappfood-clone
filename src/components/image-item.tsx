import type { ReactNode } from "react"
import "./image-item.css"
import { LeftPinkFlashIcon } from "./svg"

export type ImageItemProps = {
  title: string
  src: string
  icon?: ReactNode
}

export const ImageItem = ({ title, src, icon }: ImageItemProps) => {
  return (
    <figure className="image-item">
      <img src={src} alt={title} />
      <figcaption>
        {title} {icon ? <span role="presentation">{icon}</span> : null}
      </figcaption>
    </figure>
  )
}
