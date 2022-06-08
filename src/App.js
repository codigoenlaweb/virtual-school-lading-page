import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { SectionOne } from "./components/sections/SectionOne";

export const App = () => {
  return (
    <>
        <Navbar />
        <main>
            <SectionOne />
        </main>
    </>
  );
};
