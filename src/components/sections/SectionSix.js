import React, { useState } from "react";
import { motion } from "framer-motion";

const prueba = require.context("../../assets/img", true);

export const SectionSix = () => {
  //   load image
  const [isVisible, setIsVisible] = useState(false);
  //   Data
  const data = [
    {
      img: "carrousel_img_1.png",
      text: "Lo que más me gusta de uDiscover en la metodologia, lo innovador.",
      name: "Karen Reales",
      rol: "MADRE DEL ESTUDIANTE",
    },
    {
      img: "carrousel_img_2.png",
      text: "La eficiencia de los procesos a todo nivel y la clase de profesores que tienen me parecen muy beunos. Adicionalmente, las clases que ofrecen son las necesarias para una consecución de la vida profesional.",
      name: "Jose Ussa",
      rol: "PADRE DEL ESTUDIANTE",
    },
    {
      img: "carrousel_img_3.png",
      text: "Además de la facilidad de las clases virtuales, la propuesta educativa innovadora de uDiscover nos ofrece una oportunidad única como docentes de compartir aula con estudiantes de diferentes lugares del continente. En una clase regula de uDiscover, re respira la diverdad cultural, no solo de nuestros país sino de latinoamérica.",
      name: "Vanesa Pérez",
      rol: "DOCENTE CIENCIAS NATURALES",
    },
  ];
  //  select image
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectContent, setSelectcontent] = useState(data[0]);

  //   handleprev
  const handlePrev = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (selectIndex === 0) {
        setSelectIndex(data.length - 1);
        setSelectcontent(data[data.length - 1]);
      } else {
        setSelectIndex(selectIndex - 1);
        setSelectcontent(data[selectIndex - 1]);
      }
    }, 300);
  };

  //   handlenext
  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (selectIndex === data.length - 1) {
        setSelectIndex(0);
        setSelectcontent(data[0]);
      } else {
        setSelectIndex(selectIndex + 1);
        setSelectcontent(data[selectIndex + 1]);
      }
    }, 300);
  };

  //   animation
  const animationVisibility = {
    yesvisible: { opacity: 1 },
    notvisible: { opacity: 0 },
  };

  return (
    <section className="py-8 md:py-12 bg-primary_theme px-6 lg:px-10 min-h-screen flex flex-col items-center md:justify-center overflow-hidden">
      <article className="w-full flex flex-wrap flex-col max-w-screen-lg md:flex-row md:items-center">
        <div className="flex flex-col w-full md:w-1/2">
          <motion.img
            animate={isVisible ? "yesvisible" : "notvisible"}
            variants={animationVisibility}
            transition={{ duration: 0.3 }}
            src={prueba(`./${selectContent.img}`)}
            alt={selectContent}
            onLoad={() => {
              setTimeout(() => {
                setIsVisible(true);
              }, 300);
            }}
            className="w-full max-w-xs mx-auto"
          />
          <div className="w-full flex flex-wrap justify-between mx-auto max-w-sm md:max-w-[260px]">
            <button
              className="h-10 w-10 text-3xl text-center text-white font-black rounded-full bg-secondary-dark"
              onClick={handlePrev}
            >
              {"<"}
            </button>
            <button
              className="h-10 w-10 text-3xl text-center text-white font-black rounded-full bg-secondary-dark"
              onClick={handleNext}
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-2/5 mx-auto">
          <motion.p
            animate={isVisible ? "yesvisible" : "notvisible"}
            variants={animationVisibility}
            transition={{ duration: 0.3 }}
            className="mt-8 text-lg md:text-xl lg:text-2xl text-center text-secondary font-bold"
          >
            {selectContent.text}
          </motion.p>

          <motion.p
            animate={isVisible ? "yesvisible" : "notvisible"}
            variants={animationVisibility}
            transition={{ duration: 0.3 }}
            className="mt-5 text-right w-full text-white font-bold text-sm md:text-base lg:text-lg"
          >
            {selectContent.name}
          </motion.p>

          <motion.p
            animate={isVisible ? "yesvisible" : "notvisible"}
            variants={animationVisibility}
            transition={{ duration: 0.3 }}
            className="text-right w-full text-secondary font-bold text-sm md:text-base lg:text-lg"
          >
            {selectContent.rol}
          </motion.p>
        </div>
      </article>
    </section>
  );
};
