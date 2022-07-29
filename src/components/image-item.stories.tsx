import { ImageItem } from "./image-item"
import type { ImageItemProps } from "./image-item"

const imageItemProps: ImageItemProps = {
  src: "https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg",
  title: "ایرانی",
}

export const ImageItemStory = () => {
  return (
    <ImageItem
      title={imageItemProps.title}
      src={imageItemProps.src}
    ></ImageItem>
  )
}
