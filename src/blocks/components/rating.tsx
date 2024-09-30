import { Star } from "lucide-react";
import React from "react";
import { cn } from "../../utils/utils";

interface Props {
    className?: string,
    rating: number
}


export const RatingSign: React.FC<Props> = ({className, rating}) => {
    return (
        <div className={cn(className, "flex items-center bg-white px-4 rounded-3xl shadow-md h-10")}> 
            <span className=" font-semibold">{rating}</span>
            <Star size={18} color="orange" fill="orange" />
        </div>
         
    ) 
    
    
}

