import React from "react";
import { Container } from "./container";
import { ItemsCard, ItemsCardProps } from "./itemsCard";
import { Product } from "../assets/constants";
import { BlockTitle } from "./components/BlockTitle";

interface Props {
    className?: string,
    item: ItemsCardProps
}


export const Popular: React.FC<Props> = () => {
    const popular = Product.filter((item) => item.popular).slice(0, 3);
    return (
        <Container> 
            <div className="relative">
            <BlockTitle title="Popular" underline="Now" />
            </div>
            <div className="flex justify-around py-5 relative sm:flex-col xl:flex-row">
            <div className="absolute bg-accents w-[100%] h-[250px] bottom-0 rounded-3xl"></div>
                {popular.map((item) => (
                    <ItemsCard  variants={true} key={item.id} {...item} />
                ))}
                
            </div>
        </Container>
    )
}
            