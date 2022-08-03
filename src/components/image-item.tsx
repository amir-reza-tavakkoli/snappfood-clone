import "./image-item.css"
import { LeftPinkFlashIcon } from "./svg"

export type ImageItemProps = {
  title: string
  type?: string
  src: string
}

export const ImageItem = ({ title, src, type }: ImageItemProps) => {
  return (
    <figure className="image-item">
      {type ? <p className="nonvisual">{type}</p> : null}
      <img src={src} alt={title} />
      <figcaption className="_title">
        {title}{" "}
        <span role="presentation">
          <LeftPinkFlashIcon />
        </span>
      </figcaption>
    </figure>
  )
}
