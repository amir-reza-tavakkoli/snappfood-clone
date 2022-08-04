import { VendorNav } from "./vendor-nav"

import type { ComponentProps } from "react"

const props: ComponentProps<typeof VendorNav> = {
  type: "foods",
  items: [
    {
      name: "فست فود",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png",
      key: 2,
      href: "#",
    },
    {
      name: "نان",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_5_60350898c61b5_img_st_bakery.png",
      key: 3,
      href: "#",
    },
    {
      name: "گوشت",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_11_603507afc9a32_img_st_meat.png",
      key: 4,
      href: "#",
    },
    {
      name: "میوه",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_6_6035088cbcde4_img_st_fruit.png",
      key: 5,
      href: "#",
    },
    {
      name: "آجیل",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_7_60350883d6e43_img_st_nut.png",
      key: 6,
      href: "#",
    },
    {
      name: "سوپری",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_4_603508a14ab73_img_st_supermarket.png",
      key: 7,
      href: "#",
    },
    {
      name: "فست فود",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png",
      key: 12,
      href: "#",
    },
    {
      name: "نان",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_5_60350898c61b5_img_st_bakery.png",
      key: 13,
      href: "#",
    },
    {
      name: "گوشت",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_11_603507afc9a32_img_st_meat.png",
      key: 14,
      href: "#",
    },
    {
      name: "میوه",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_6_6035088cbcde4_img_st_fruit.png",
      key: 15,
      href: "#",
    },
    {
      name: "آجیل",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_7_60350883d6e43_img_st_nut.png",
      key: 16,
      href: "#",
    },
    {
      name: "سوپری",
      image:
        "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_4_603508a14ab73_img_st_supermarket.png",
      key: 17,
      href: "#",
    },
  ],
}

export const DefaultVendorNav = () => {
  return <VendorNav {...props} />
}

export const WithoutImages = () => {
  const noImages = props.items.map(item => {
    return { ...item, image: undefined }
  })

  const filteredProps: ComponentProps<typeof VendorNav> = {
    items: noImages,
  }
  return <VendorNav {...filteredProps} />
}

export const WithoutBadImages = () => {
  const noImages = props.items.map(item => {
    return { ...item, image: "noSuchUrl.com" }
  })

  const filteredProps: ComponentProps<typeof VendorNav> = {
    items: noImages,
  }
  return <VendorNav {...filteredProps} />
}
