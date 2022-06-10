import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { SectionFive } from "./components/sections/SectionFive";
import { SectionFour } from "./components/sections/SectionFour";
import { SectionOne } from "./components/sections/SectionOne";
import { SectionSix } from "./components/sections/SectionSix";
import { SectionThree } from "./components/sections/SectionThree";
import { SectionTwo } from "./components/sections/SectionTwo";

export const App = () => {
  return (
    <>
        <Navbar />
        <main>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </main>
    </>
  );
};
