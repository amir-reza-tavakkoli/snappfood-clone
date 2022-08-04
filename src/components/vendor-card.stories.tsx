import type { ComponentProps } from "react"
import { VendorCard } from "./vendor-card"

const cardProps: ComponentProps<typeof VendorCard> = {
  name: "نان قندی و یوخه پزی چهار فصل",
  type: "رستوران",
  logo: "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/623209826af52.jpg",
  image: "https://cdn.snappfood.ir/300x200/cdn/vendor_sub_types/7/01.jpg",
  rating: {
    value: 3.6,
    count: 12366,
    range: 5,
  },
  tags: ["کباب", "ایرانی", "خورشت"],
  discount: 12,
  delivery: {
    method: "پیک فروشنده",
    price: {
      value: 7000,
      currency: "تومان",
    },
  },
}

export const WithoutName = () => {
  const props = { ...cardProps, name: undefined }
  return <VendorCard {...props}></VendorCard>
}

export const WithoutImage = () => {
  const props = { ...cardProps, image: undefined }
  return <VendorCard {...props}></VendorCard>
}

export const WithBadImage = () => {
  const props = { ...cardProps, image: "noSuchImage.com" }
  return <VendorCard {...props}></VendorCard>
}

export const DefaultCard = () => {
  return <VendorCard {...cardProps}></VendorCard>
}

export const WithImageNode = () => {
  const props = {
    ...cardProps,
    image: (
      <img
        src="https://cdn.snappfood.ir/300x200/cdn/vendor_sub_types/7/03.jpg"
        alt="cool alt text"
      />
    ),
  }
  return <VendorCard {...props}></VendorCard>
}

export const WithoutRating = () => {
  const props = { ...cardProps, rating: undefined }
  return <VendorCard {...props}></VendorCard>
}

export const WithoutRatingCount = () => {
  const props = {
    ...cardProps,
    rating: {
      value: 3.6,
    },
  }
  return <VendorCard {...props}></VendorCard>
}

export const WithoutRatingValue = () => {
  const props = {
    ...cardProps,
    rating: {
      count: 3600,
    },
  }
  return <VendorCard {...props}></VendorCard>
}

export const WithoutLogo = () => {
  const props = { ...cardProps, logo: undefined }
  return <VendorCard {...props}></VendorCard>
}

export const WithoutTags = () => {
  const props = { ...cardProps, tags: undefined }
  return <VendorCard {...props}></VendorCard>
}

export const WithoutDiscount = () => {
  const props = { ...cardProps, discount: undefined }
  return <VendorCard {...props}></VendorCard>
}

export const WithTagsOverflow = () => {
  const props = {
    ...cardProps,
    tags: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ],
  }
  return <VendorCard {...props}></VendorCard>
}

export const WithNameOverflow = () => {
  const props = {
    ...cardProps,
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }
  return <VendorCard {...props}></VendorCard>
}

export const WithoutDelivery = () => {
  const props = {
    ...cardProps,
    delivery: undefined,
  }
  return <VendorCard {...props}></VendorCard>
}

export const WithoutDeliveryMethod = () => {
  const props = {
    ...cardProps,
    delivery: {
      price: {
        value: 6000,
      },
    },
  }
  return <VendorCard {...props}></VendorCard>
}

export const WithoutDeliveryPrice = () => {
  const props = {
    ...cardProps,
    delivery: {
      method: "پیش سفارش",
    },
  }
  return <VendorCard {...props}></VendorCard>
}

export const Constrained = () => {
  return (
    <div style={{ width: "350px" }}>
      <VendorCard {...cardProps}></VendorCard>
    </div>
  )
}

export const ConstrainedRTL = () => {
  return (
    <div dir="rtl" style={{ width: "350px" }}>
      <VendorCard {...cardProps}></VendorCard>
    </div>
  )
}
