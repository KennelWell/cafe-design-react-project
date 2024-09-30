import React from "react";
import { cn } from "../utils/utils";
import { ShoppingSign } from "./components/shopingSign";
import { RatingSign } from "./components/rating";

export interface ItemsCardProps {
    className?: string,
    id?: number,
    title: string,
    image: string,
    price: number,
    rating: number
    popular?: boolean
}

export const ItemsCard: React.FC<ItemsCardProps> = ({title, image, price, rating, className}) => {
    
    return (
        <div className={cn("bg-white h-[350px] w-[350px] border-4 border-third rounded-3xl shadow-md z-10", className)}> 
            <div className="w-[300px] h-[300px] py-4 mx-auto">
                <div className="relative flex items-center justify-center  border-white rounded-3xl">
                    <RatingSign rating={rating} className="absolute top-2 left-2 z-20"/>
                    <img src={image} className="object-scaled h-48 w-96 rounded-3xl" />
                </div>
                <div className="flex justify-between py-3">
                    <span className="text-center font-semibold text-xl">{title}</span>
                    <span className="text-center font-semibold text-xl">{price}$</span>
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-between gap-3">
                        <button className="text-orange-400 border px-3 border-orange-400">Hot</button>
                        <button className="text-orange-300 border px-3 border-orange-300">cold</button>
                    </div>
                    <ShoppingSign className="bg-brand text-white"/>
                </div>
            </div>
        </div>
    )
}