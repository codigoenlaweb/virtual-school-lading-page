import React from "react";
import { CardBenefit } from "../cards/CardBenefit";

export const SectionFour = () => {
    const cards = [
        {
            title: "Acompañamiento continúo",
            description: "Tu hijo nunca estará solo. El 100% de las clases son guiadas y acompañadas por profesores en tiempo real.",
            imgPath: "assets/accompaniment.png"
        },
        {
            title: "Educación internacional",
            description: "Curriculum Internacional, enfocado en tecnología, emprendimiento e innovación.",
            imgPath: "assets/international.png"
        },
        {
            title: "Bilingüismo",
            description: "Aprendizaje y perfeccionamiento del Inglés a través de experiencias. Contamos con profesores nativos. Nuestros estudiantes se gradúan con High School Diploma con el que pueden ingresar a la universidad latinoamericana de su elección. ",
            imgPath: "assets/english.png"
        },
        {
            title: "Apoyamos las ideas",
            description: "Con nuestra incubadora de proyectos basados en modelos disruptivos e innovadores tu hijo llevará sus ideas a otro nivel.",
            imgPath: "assets/support.png"
        },
    ]

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-primary_theme to-secondary px-6 lg:px-10 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <article className="w-full max-w-screen-xl mb-8 text-center text-white">
        <h2 className="text-center text-3xl">
          ¿Por qué tu hijo debe estudiar en uDiscover?
        </h2>
        <p className="mt-4">
          Tu hijo merece tener una educación de calidad y a la vez, tiempo para
          desarrollar diferentes actividades. Estudiar en uDiscover les
          permitirá eso y mucho más:
        </p>
      </article>

      <article className="w-full max-w-screen-xl flex flex-wrap justify-center">
        {cards.map((card, index) => <CardBenefit key={index} {...card} />)}
      </article>
    </section>
  );
};
