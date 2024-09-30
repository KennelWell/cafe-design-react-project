import { ShoppingCart } from "lucide-react";
import React from "react";
import { cn } from "../../utils/utils";

interface Props {
    className?: string
}

export const ShoppingSign: React.FC<Props> = ({className}) => {

    return (
        <div className={cn(className, "self-center rounded-3xl h-9 w-9 transition-all transition-200 relative flex justify-center")}>
            <span className="pt-2">
                <ShoppingCart size={20}/>
            </span>
        </div>
    )
}