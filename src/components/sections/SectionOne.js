import React from "react";
import "./text-shadow.css";
import { motion } from "framer-motion";

export const SectionOne = () => {
  const imgbase = `assets/base.png`;
  const imgbase2 = `assets/base2.png`;
  const imgGirlStudy = `assets/girl-study.png`;

  return (
    <section id="section-one" className="bg-primary_theme -z-50 px-6 lg:px-10 min-h-screen 2xl:items-center flex flex-wrap justify-center relative overflow-hidden">
      <img
        className="absolute top-0 left-0 h-auto w-full -z-10"
        src={imgbase}
        alt="base"
      />
      <img
        className="hidden md:block absolute top-12 left-0 lg:top-16 xl:top-20 w-1/4"
        src={imgbase2}
        alt="base"
      />

      <div className="flex flex-wrap flex-col md:flex-row w-full md:justify-center max-w-screen-xl">
        <motion.article
          initial={{ opacity: 0, x: "-80%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-white mt-12 md:mt-20 w-3/4 max-w-md md:w-2/5"
        >
          <h1 className="mb-5 font-bold text-2xl md:text-3xl lg:text-4xl text-shadow-title">
            Descubre el legado que dejarás al mundo
          </h1>
          <p className="md:text-lg lg:text-xl">
            Desde un entorno virtual, guiamos virtudes, habilidades, intereses y
            afinidades para una proyección integral y sólida del individuo
          </p>
          <button className="mt-8 md:mt-5 lg:text-base border-solid border-2 border-terceary text-sm text-terceary rounded-xl px-2 py-1">
            Inscripciones abiertas
          </button>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: "80%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-2 md:mt-36 md:w-3/5"
        >
          <img
            src={imgGirlStudy}
            className="max-w-lg md:max-w-none max-h-screen w-full"
            alt="studing girl"
          />
        </motion.article>
      </div>
    </section>
  );
};
