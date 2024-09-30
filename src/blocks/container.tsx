import React from "react";
import { cn } from "../utils/utils";

interface Props {
    className?: string,
}


export const Container: React.FC<React.PropsWithChildren<Props>> = ({className, children}) => {
    return <div className={cn("max-w-[1280px] xl:mx-auto md:mx-10", className)}>{children}</div>
}