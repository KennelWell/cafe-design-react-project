import React from "react";
import { BlockTitle } from "./components/BlockTitle";
import { Container } from "./container";
import { Product } from "../assets/constants";
import { ItemsCard, ItemsCardProps } from "./itemsCard";


interface Props {
    className?: string,
    item: ItemsCardProps
}


export const Special: React.FC<Props> = () => {
    const SpecialItems = Product.filter((item) => item.special).slice(0, 6);
    return (
        <div className="bg-white py-16">
            <Container> 
                <BlockTitle className="py-10" title="Special menu" underline="for you" />
                <div className="flex px-5 justify-between flex-wrap">
                    {SpecialItems.map((item) => (
                        <ItemsCard className="my-3" key={item.id} {...item} />
                    ))}
                </div>
            </Container>
        </div>
    )
}