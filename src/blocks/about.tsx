import React from "react";
import { cn } from "../utils/utils";
import { Container } from "./container";

interface Props {
    className: string,
}

export const About: React.FC<Props> = ({className}) => {
    return (
        <section className={cn(className, "w-full bg-[#F6EBDA]")}>
            <Container>
                <div className="flex py-16 px-10 relative ">
                    <div className="w-1/2 border-gray-300">
                        <div className="border-4 border-gray-300 rounded-3xl absolute -top-10">
                            <img src="unsplash.png" alt="" />
                        </div>
                    </div>
                    <div className="w-96 py-16">
                        <h1 className="font-semibold text-4xl py-3">About <span className="border-b-4 border-orange-400">us</span></h1>
                        <h3 className="font-semibold text-xl py-3">We provide quality coffee, and ready to deliver.</h3>
                        <p className="text-gray-600">We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.</p>
                        <button className="text-white bg-second px-3 py-3 rounded-3xl mt-5">Learn more</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}