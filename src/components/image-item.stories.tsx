import { ImageItem } from "./image-item"
import type { ImageItemProps } from "./image-item"
import { LeftPinkFlashIcon } from "./svg"

const defaultIcon = <LeftPinkFlashIcon />

const imageItemProps: ImageItemProps = {
  src: "https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg",
  title: "ایرانی",
  icon: defaultIcon,
}

export const ImageItemStory = () => {
  return <ImageItem {...imageItemProps}></ImageItem>
}
export const ImageItemStoryConstrained = () => {
  return (
    <div style={{ width: "500px" }}>
      <ImageItem {...imageItemProps}></ImageItem>
    </div>
  )
}
