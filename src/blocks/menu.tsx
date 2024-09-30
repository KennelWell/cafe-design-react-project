import React from "react";
import { MenuItems } from "../assets/constants";
import { cn } from "../utils/utils";

interface Props {
    className?: string
}

export const Menu: React.FC<Props> = ({className}) => {
    const [active, setActive] = React.useState(1);

    return (
        
        <div className={cn("flex items-center space-x-4", className)}>
          {
            MenuItems.map(({id, title, link}) => (
                <a className={cn(" hover:text-orange-900 hover:underline", active === id ? "text-orange-400" : "text-secondary")} href={link} key={id} onClick={() => setActive(id)}>{title}</a>
            ))
          }
          
        </div>
    )
}