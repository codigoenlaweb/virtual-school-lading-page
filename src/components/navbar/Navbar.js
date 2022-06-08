import React, { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const imagePath = `assets/logo.png`;

  const list = {
    visible: { height: "auto", opacity: 1, y: "0px" },
    hidden: { height: "0px", opacity: 0, y: "-16px" },
  };

  const list2 = {
    visible: { height: "auto", "padding-top": "8px", "padding-bottom": "8px" },
    hidden: { height: "0px", "padding-top": "0px", "padding-bottom": "0px" },
  };

  const backgroundItem = {
    visible: { background: "#32c688" },
    hidden: { background: "rgb(62 99 169 / 0%)" },
  };

  const backgroundSvg = {
    visible: { fill: "#32c688" },
    hidden: { fill: "#fff" },
  };

  return (
    <header>
      {/* mobiles */}
      <nav className="lg:hidden sticky py-3 flex flex-wrap justify-between items-center bg-primary">
        <img className="h-14" src={imagePath} alt="logo" />
        <motion.svg
          initial={{ fill: "#fff" }}
          animate={isOpen ? "visible" : "hidden"}
          variants={backgroundSvg}
          transition={{ duration: 0.2 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setIsOpen2(false);
          }}
          className="mr-3 transition-colors duration-200"
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          width="40"
        >
          <path
            d={`${
              isOpen
                ? "M10.458 31.458 8.542 29.542 18.042 20 8.542 10.458 10.458 8.542 20 18.042 29.542 8.542 31.458 10.458 21.958 20 31.458 29.542 29.542 31.458 20 21.958Z"
                : "M5 30V27.208H35V30ZM5 21.375V18.625H35V21.375ZM5 12.792V10H35V12.792Z"
            }`}
          />
        </motion.svg>
        <motion.div
          // initial={{opacity: 0, height: "0px"}}
          animate={isOpen ? "visible" : "hidden"}
          variants={list}
          transition={{ duration: 0.5 }}
          className="h-0 opacity-0 overflow-hidden absolute top-20 bg-primary_light w-full rounded-b-lg z-50"
        >
          <ul className="py-2 text-white font-bold text-lg text-center">
            <motion.li
              animate={isOpen2 ? "visible" : "hidden"}
              variants={backgroundItem}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setIsOpen2(!isOpen2);
              }}
              className="py-1 flex flex-wrap justify-center items-center rounded-t-md"
            >
              Experiencia uDiscover
              <svg
                className="fill-white rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
              >
                <path d="M4.167 15.833V14.083H15.833V15.833ZM4.479 12.5 10 4.167 15.5 12.5ZM9.979 10.75ZM7.729 10.75H12.25L10 7.333Z" />
              </svg>
            </motion.li>
            <motion.ul
              animate={isOpen2 ? "visible" : "hidden"}
              variants={list2}
              transition={{ duration: 0.3 }}
              className=" overflow-hidden h-0 bg-primary_light rounded-b-md"
            >
              <li>
                <a href="/#">Empredimiento</a>
              </li>
              <li>
                <a href="/#">Enfoque pedagógico</a>
              </li>
            </motion.ul>
            <li className="py-1">
              <a href="/#">Blog</a>
            </li>
            <li className="py-1">
              <a href="/#">Admisiones</a>
            </li>
            <li className="py-1">
              <a href="/#">Plataforma uDiscover</a>
            </li>
          </ul>
        </motion.div>
      </nav>

      {/* Desktop */}
      <nav className="px-10 hidden lg:flex sticky py-3 flex-wrap justify-between items-center bg-primary">
        <img className="h-14" src={imagePath} alt="logo" />

        <ul className="flex flex-wrap py-2 text-white font-bold text-xl text-center">
          <li
            onClick={() => {
              setIsOpen2(!isOpen2);
            }}
            className="px-1 mr-1 rounded transition-all duration-300 flex flex-wrap justify-center items-center rounded-t-md hover:bg-secondary"
          >
            Experiencia uDiscover
            <svg
              className="fill-white rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
            >
              <path d="M4.167 15.833V14.083H15.833V15.833ZM4.479 12.5 10 4.167 15.5 12.5ZM9.979 10.75ZM7.729 10.75H12.25L10 7.333Z" />
            </svg>
          </li>

          {/* submenu */}
          <motion.ul
            animate={isOpen2 ? "visible" : "hidden"}
            variants={list2}
            transition={{ duration: 0.3 }}
            className="absolute top-20 w-72 overflow-hidden h-0 bg-primary_light rounded-b-md"
          >
            <li>
              <a href="/#">Empredimiento</a>
            </li>
            <li>
              <a href="/#">Enfoque pedagógico</a>
            </li>
          </motion.ul>

          <li className="mr-1">
            <a
              className="hover:bg-secondary px-1 rounded transition-all duration-300"
              href="/#"
            >
              Blog
            </a>
          </li>
          <li className="mr-1">
            <a
              className="hover:bg-secondary px-1 rounded transition-all duration-300"
              href="/#"
            >
              Admisiones
            </a>
          </li>
          <li className="mr-2">
            <a
              className="hover:bg-secondary px-1 rounded transition-all duration-300"
              href="/#"
            >
              Plataforma uDiscover
            </a>
          </li>
          <li className="">
            <a
              className="bg-secondary px-2 py-2 rounded transition-all duration-300"
              href="/#"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
