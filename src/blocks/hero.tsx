import React from "react";
import { cn } from "../utils/utils";
import { Container } from "./container";
import { Product } from "../assets/constants";
import { RatingSign } from "./components/rating";


interface Props {
    className?: string
}

export const Hero: React.FC<Props> = ({className}) => {
    const item = Product[0];
    return (
        <Container>
            <div className={cn("flex items-center justify-between pt-5 pb-5", className)}>
                <div className="">
                    <h1 className="text-4xl font-semibold text-gray-900 tracking-wide">
                    Enjoy your <span className="text-orange-400">coffee</span><br />
                    before your activity
                    </h1>
                    <p className="mt-4 text-gray-600">
                    Boost your productivity and build your <br /> mood with a glass of coffee in the morning
                    </p>
                    <div className="flex justify-center mt-8">
                    </div>
                </div>
            
            <div>
                <div className="relative flex">
                    <div className="h-[400px] w-[400px] overflow-hidden">
                    <img className="translate-y-[15%] w-[350px] h-[350px] rounded-full" src={item.image} alt={item.title} />
                    </div>
                    <span className="bg-white h-10 px-5 py-2 items-center rounded-3xl absolute bottom-5 left-10">{item.price} $</span>   
                    <RatingSign rating={item.rating} className=" absolute top-1/3 right-5 flex"/>
                    <span className="bg-white h-10 px-5 py-2 items-center rounded-3xl absolute top-1/4 left-0">{item.title}</span>           
                </div>
            </div>
        </div>
        </Container>
        
    )
}