import { ComponentProps } from "react";
import { ListBox } from "./listbox";

const listBoxProps: ComponentProps<typeof ListBox> = {
    title: "تمام رستوران ها",
    items: [
        {
            name: "کبابی",
            img: "https://cdn.snappfood.ir/uploads/images/tags/pitza.png",
            key: 1,
        },
        {
            name: "فست فود",
            img: "https://cdn.snappfood.ir/uploads/images/tags/pitza.png",
            key: 2,
            selected : true
        },
        {
            name: "سنتی" ,
            img: "https://cdn.snappfood.ir/uploads/images/tags/pitza.png",
            key: 3,
        },
    ]
}

export const ListBoxDefault = () => {
    return (
        <ListBox {...listBoxProps}></ListBox>
    )
}