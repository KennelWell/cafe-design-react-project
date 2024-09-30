import React from "react";
import { cn } from "../utils/utils";

interface Props {
    className?: string,
    image: string,
    alt: string,
}

export const Logo: React.FC<Props> = ({className, image, alt}) => {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <img className="w-12 h-12" src={image} alt={alt} />
            <div className="pl-3 flex flex-col items-center">
            <p className="font-extrabold text-2xl"><span className="text-orange-400">Company</span>Name</p>
            {/* <p className="font-thin text-sm text-secondary">so cool <span className="text-orange-400">slogan</span></p> */}
            </div>
        </div>
    )
}