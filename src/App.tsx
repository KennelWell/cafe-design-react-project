import React from "react";
import { Header } from "./blocks/header";
import { cn } from "./utils/utils";
import { Hero } from "./blocks/hero";
import { Popular } from "./blocks/popular";
import { SecondBlock } from "./blocks/components/secondBlock";
import { About } from "./blocks/about";
import { Special } from "./blocks/special";

interface Props {
  className?: string;
}

const App:React.FC<Props> = ({className}) => {

  return (
    <>
    <div className={cn("bg-[#F6EBDA] pt-3", className)}>
      <Header />
      <Hero />
      <Popular />
      <div className="h-[650px] w-[100%] bg-white -my-10">
      <SecondBlock />
      </div>
      <About />
      <Special />
    </div>
    </>
  )
};

export default App;
