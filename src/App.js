import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { SectionOne } from "./components/sections/SectionOne";
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
        </main>
    </>
  );
};
