import { motion } from "framer-motion";
import React from "react";
import { useObserver } from "../../hooks/useObserver";
import { CardOfPrices } from "../cards/CardOfPrices";

export const SectionThree = () => {
  const { intersecting } = useObserver("#section-three");
  const cards = [
    {
      title: "Plan anual",
      numberOfPayments: "1 pago",
      paymentPerMonth: "COP$ 741.000/mes",
      regularPayment: "Precio regular COP$ 870.000",
      thrift: "Ahorras COP$ 129.000",
      detailsTitle: "1 pago de COP$ 8'894.000.",
      ValueToPayUpTo: "",
      details: [
        {
          text: "*En este valor incluye el pago de la matricula, los recursos digitales y 10 mensualidades.",
          span: "",
        },
      ],
    },
    {
      title: "Plan mensual anticipado",
      numberOfPayments: "12 pagos",
      paymentPerMonth: "COP$ 769.000/mes",
      regularPayment: "Precio regular COP$ 870.000",
      thrift: "Ahorras COP$ 101.000",
      detailsTitle: "12 pagos distribuidos en:",
      ValueToPayUpTo: "5",
      details: [
        {
          text: "1er pago: Matrícula COP$719.000",
          span: "/hasta el 30 abril.",
        },
        {
          text: "2do pago: Recursos digitales COP$869.000.",
          span: "",
        },
        {
          text: "3er a 12vo pago: Mensualidades COP$769.000*",
          span: "",
        },
      ],
    },
    {
      title: "Plan mensual",
      numberOfPayments: "12 pagos",
      paymentPerMonth: "COP$ 869.000/mes",
      regularPayment: "",
      thrift: "",
      detailsTitle: "12 pagos distribuidos en:",
      ValueToPayUpTo: "",
      details: [
        {
          text: "1er pago: Matrícula COP$719.000",
          span: "/hasta el 30 abril.",
        },
        {
          text: "2do pago: Recursos digitales COP$869.000.",
          span: "",
        },
        {
          text: "3er a 12vo pago: Mensualidades COP$869.000",
          span: "",
        },
      ],
    },
  ];

  const animateRight = {
    visible: { opacity: 1, x: 0, scale: 1 },
    hidden: { opacity: 0, x: "100%", scale: 0.8 },
  };

  const animateCenter = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.4 },
  };

  return (
    <section
      id="section-three"
      className="py-8 md:py-12 bg-primary_theme px-6 lg:px-10 min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, x: "100%", scale: 0.8 }}
        animate={intersecting ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        variants={animateRight}
        className="text-center text-white font-bold text-4xl lg:text-5xl"
      >
        Aprovecha nuestros precios especiales con descuento
      </motion.h2>
      <motion.article
        initial={{ opacity: 0, scale: 0.4 }}
        animate={intersecting ? "visible" : "hidden"}
        variants={animateCenter}
        transition={{ duration: 0.8 }}
        className="w-full max-w-screen-xl mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8"
      >
        {cards.map((card) => (
          <CardOfPrices key={card.title} {...card} />
        ))}
      </motion.article>
    </section>
  );
};
