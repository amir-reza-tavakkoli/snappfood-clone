import React from "react"
import "./image-item.css"

export type ImageItemProps = {
  title: string
  src: string
}

export const ImageItem = ({ title, src }: ImageItemProps) => {
  return (
    <figure className="image-item">
      <img src={src} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  )
}
