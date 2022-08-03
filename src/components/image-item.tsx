import type { ReactNode } from "react"
import "./image-item.css"
import { LeftPinkFlashIcon } from "./svg"

export type ImageItemProps = {
  title: string
  src: string
}

export const ImageItem = ({ title, src }: ImageItemProps) => {
  return (
    <figure className="image-item">
      <img src={src} alt={title} />
      <figcaption className="_title">
        {title} <span role="presentation"> <LeftPinkFlashIcon/></span>
      </figcaption>
    </figure>
  )
}
