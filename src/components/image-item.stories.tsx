import { ImageItem } from "./image-item"
import { ComponentProps } from "react"

const imageItemProps: ComponentProps<typeof ImageItem> = {
  src: "https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg",
  type: "غذا",
  title: "ایرانی",
}

export const imageItemDefault = () => {
  return <ImageItem {...imageItemProps}></ImageItem>
}

export const Constrained = () => {
  return (
    <div style={{ width: "500px" }}>
      <ImageItem {...imageItemProps}></ImageItem>
    </div>
  )
}
