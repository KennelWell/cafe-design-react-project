import React from "react";
import { Container } from "./container";
import { ItemsCard, ItemsCardProps } from "./itemsCard";
import { Product } from "../assets/constants";

interface Props {
    className?: string,
    item: ItemsCardProps
}


export const Popular: React.FC<Props> = ({className}) => {
    const popular = Product.filter((item) => item.popular).slice(0, 3);
    return (
        <Container> 
            <div className="relative">
            <p className="font-semibold text-xl">Popular <span className="border-b-4 border-orange-400">Now</span></p>
            </div>
            <div className="flex justify-around py-5 relative sm:flex-col xl:flex-row">
            <div className="absolute bg-accents w-[100%] h-[250px] bottom-0 rounded-3xl"></div>
                {popular.map((item) => (
                    <ItemsCard key={item.id} {...item} />
                ))}
                
            </div>
        </Container>
    )
}
            