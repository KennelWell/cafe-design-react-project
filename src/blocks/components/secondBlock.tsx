import React from "react";
import { Container } from "../container";
import { cn } from "../../utils/utils";
import { BlockTitle } from "./BlockTitle";


interface Props {
    className?: string,
}

export const SecondBlock: React.FC<Props> = ({className}) => {
    return (
        <Container>  
            <section className={cn(className, "pt-20")}>
                <BlockTitle className="px-10" title="How to use delivery" underline="Service"/>
                <div className="flex justify-around py-10">
                    <div className="flex  flex-col text-center py-5">
                        <img className="w-56" src="coffee-cup.png"></img>
                        <p className="py-3 font-semibold text-2xl">choose your coffee</p>
                        <p className="">there are 20+ coffees for you</p>
                    </div>
                    <div className="flex  flex-col text-center py-5">
                        <img className="w-56" src="food-truck.png"></img>
                        
                        <p className="py-3 font-semibold text-2xl">we delivery it for you</p>
                        <p className="">choose delivery service</p>
                    </div>
                    <div className="flex  flex-col text-center py-5">
                        <img className="w-56" src="coffee-cup.png"></img>
                        <p className="py-3 font-semibold text-2xl">enjoy your coffee</p>
                        <p className="">and have a good day</p>
                    </div>
                </div>
            </section>
        </Container>
            
    )
}