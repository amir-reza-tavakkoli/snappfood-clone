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

export const WithBadImages = () => {
  const noImages = props.items.map(item => {
    return { ...item, image: "noSuchUrl.com" }
  })

  const filteredProps: ComponentProps<typeof VendorNav> = {
    items: noImages,
  }
  return <VendorNav {...filteredProps} />
}

export const WithLongName = () => {
  const noImages = props.items.map(item => {
    return {
      ...item,
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }
  })

  const filteredProps: ComponentProps<typeof VendorNav> = {
    items: noImages,
  }
  return <VendorNav {...filteredProps} />
}

export const WithOverflowinName = () => {
  const noImages = props.items.map(item => {
    return {
      ...item,
      name: "LoremIpsumissimplydummytextoftheprintingandtypesettingindustry.LoremIpsumhabeetheindustry'sstandarddummytexteversincethe1500s,whenanunknownprintertookagalleyofkjkgkjnkjmjkjn bmjgkn mgjkjn mgjkjgnmnm type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }
  })

  const filteredProps: ComponentProps<typeof VendorNav> = {
    items: noImages,
  }
  return <VendorNav {...filteredProps} />
}
