import { Carousel } from "./carousel";
// import storeIcon from "../assets/store-icon.webp";
import type { item } from "./carousel";

const item1 : item =
    {name:"1رستوران" , src:"../assets/store-icon.webp" , key: 1, href:"#"}
const item2 : item =
    {name:"2رستوران" , src:"../assets/store-icon.webp" , key: 1, href:"#"}


export const carousel = () => {
    return (
        <Carousel items={[item1, item2]} />
    );
}