import React from "react";
import { cn } from "../utils/utils";
import { Container } from "./container";
import { Logo } from "./logo";
import { Menu } from "./menu";
import {Search} from "lucide-react";
import { ShoppingSign } from "./components/shopingSign";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <>
        <header className={cn("", className)}> 
            <Container>
                <div className="flex items-center justify-between py-3 backdrop-blur-lg">
                    <Logo  image="logo.svg" alt="Logo"/>
                    <Menu  />
                    <div className="relative flex justify-between">
                        <div className="absolute inset-y-0 start-0 flex items-center pl-2">
                        <Search className="w-5 h-5"/>
                        </div>
                        <input className="rounded-full py-1 -ml-1 block ps-10" type="search" placeholder="Search..."/>
                        <ShoppingSign />
                    </div>
                </div>
            </Container>
        </header>
        </>
    
    )
}