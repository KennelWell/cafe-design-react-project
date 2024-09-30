import React from "react";
import { cn } from "../../utils/utils";

interface Props {
    className?: string;
    title: string;
    underline?: string;
}

export const BlockTitle: React.FC<Props> = ({className, title, underline}) => {
    return <p className={cn(className, "font-semibold text-2xl")}>{title} <span className="border-b-4 border-orange-400">{underline}</span></p>
}