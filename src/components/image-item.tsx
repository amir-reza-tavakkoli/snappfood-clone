import "./image-item.css"
import { Icon } from "./icon"

export type ImageItemProps = {
  title: string
  type?: string
  image: string
}

export const ImageItem = ({ title, image, type }: ImageItemProps) => {
  return (
    <figure className="image-item">
      {type ? <p className="nonvisual">{type}</p> : null}
      <img src={image} alt={title} />
      <figcaption className="_title">
        {title}{" "}
        <span role="presentation">
          <Icon name="flash" color="accent" role="presentation"/>
        </span>
      </figcaption>
    </figure>
  )
}
