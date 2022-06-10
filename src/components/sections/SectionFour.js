import { motion } from "framer-motion";
import React from "react";
import { useObserver } from "../../hooks/useObserver";
import { CardBenefit } from "../cards/CardBenefit";

export const SectionFour = () => {
  const { intersecting } = useObserver("#section-four");
  const cards = [
    {
      title: "Acompañamiento continúo",
      description:
        "Tu hijo nunca estará solo. El 100% de las clases son guiadas y acompañadas por profesores en tiempo real.",
      imgPath: "assets/accompaniment.png",
    },
    {
      title: "Educación internacional",
      description:
        "Curriculum Internacional, enfocado en tecnología, emprendimiento e innovación.",
      imgPath: "assets/international.png",
    },
    {
      title: "Bilingüismo",
      description:
        "Aprendizaje y perfeccionamiento del Inglés a través de experiencias. Contamos con profesores nativos. Nuestros estudiantes se gradúan con High School Diploma con el que pueden ingresar a la universidad latinoamericana de su elección. ",
      imgPath: "assets/english.png",
    },
    {
      title: "Apoyamos las ideas",
      description:
        "Con nuestra incubadora de proyectos basados en modelos disruptivos e innovadores tu hijo llevará sus ideas a otro nivel.",
      imgPath: "assets/support.png",
    },
  ];

  const animateRight = {
    visible: { opacity: 1, x: 0, scale: 1 },
    hidden: { opacity: 0, x: "100%", scale: 0.8 },
  };

  const animateTop = {
    visible: { opacity: 1, y: 0, scale: 1 },
    hidden: { opacity: 0, y: "+200px", scale: 0.4 },
  };

  return (
    <section
      id="section-four"
      className="py-8 md:py-12 bg-gradient-to-b from-primary_theme to-secondary px-6 lg:px-10 min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <motion.article
        initial={{ opacity: 0, x: "100%", scale: 0.8 }}
        animate={intersecting ? "visible" : "hidden"}
        variants={animateRight}
        transition={{ duration: 0.8 }}
        className="w-full max-w-screen-xl mb-8 text-center text-white"
      >
        <h2 className="text-center text-3xl">
          ¿Por qué tu hijo debe estudiar en uDiscover?
        </h2>
        <p className="mt-4">
          Tu hijo merece tener una educación de calidad y a la vez, tiempo para
          desarrollar diferentes actividades. Estudiar en uDiscover les
          permitirá eso y mucho más:
        </p>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: "+200px", scale: 0.4 }}
        animate={intersecting ? "visible" : "hidden"}
        variants={animateTop}
        transition={{ duration: 0.8 }}
        className="w-full max-w-screen-xl flex flex-wrap justify-center"
      >
        {cards.map((card, index) => (
          <CardBenefit key={index} {...card} />
        ))}
      </motion.article>
    </section>
  );
};
