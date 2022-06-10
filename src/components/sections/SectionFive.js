import React from "react";
import { motion } from "framer-motion";
import { useObserver } from "../../hooks/useObserver";

export const SectionFive = () => {
  const { intersecting } = useObserver("#section-five");
  const imgPath = "assets/creative-girl.png";

  const animateLeft = {
    visible: { opacity: 1, x: 0, scale: 1 },
    hidden: { opacity: 0, x: "-100%", scale: 0.8 },
  };

  const animateRight = {
    visible: { opacity: 1, x: 0, scale: 1 },
    hidden: { opacity: 0, x: "100%", scale: 0.8 },
  };

  return (
    <section
      id="section-five"
      className="py-8 md:py-12 bg-gradient-to-t from-primary_theme to-secondary px-6 lg:px-10 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <article className="mx-auto flex flex-col md:flex-row flex-wrap md:items-center md:justify-between max-w-screen-xl">
        <motion.img
          initial={{ opacity: 0, x: "-100%", scale: 0.8 }}
          animate={intersecting ? "visible" : "hidden"}
          variants={animateLeft}
          transition={{ duration: 0.8 }}
          src={imgPath}
          alt="creatividad"
          className="w-full md:w-45% max-w-md mx-auto md:mx-auto"
        />
        <motion.div
          initial={{ opacity: 0, x: "100%", scale: 0.8 }}
          animate={intersecting ? "visible" : "hidden"}
          variants={animateRight}
          transition={{ duration: 0.8 }}
          className="flex flex-col w-full md:w-1/2"
        >
          <p className="mt-6 text-terceary font-bold w-36 justify-start md:text-xl md:w-48 lg:text-2xl lg:w-56">
            <span className="text-secondary-light">S</span>aberes y{" "}
            <span className="text-secondary-light">E</span>xperiencias para{" "}
            <span className="text-secondary-light">R</span>econocerse
          </p>
          <h2 className="mt-4 text-6xl lg:text-7xl font-bold text-secondary-light">
            Educación para la vida
          </h2>
          <p className="text-secondary-light font-bold mt-4 lg:mt-6 lg:text-lg">
            Más que la mera transmisión de información, el conocimiento es una
            herramienta para descubrir por sí mismos el rol dentro de una
            sociedad, las virtudes y las pasiones. Con una mentalidad de
            libertad e interminable curiosidad, aquí lo importante, más que las
            respuestas, son las preguntas.
          </p>
          <a
            className="max-w-xs text-center font-black text-white bg-gradient-to-r from-secondary to-primary_theme px-2 py-1 border-4 border-solid border-white rounded-xl mt-6 hover:scale-105 focus:scale-105 hover:shadow-xl focus:shadow-xl outline-none transition duration-200"
            href="/#"
          >
            CONOCE NUESTRA METODOLOGÍA
          </a>
        </motion.div>
      </article>
    </section>
  );
};
