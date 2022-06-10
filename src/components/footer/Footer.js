import React from "react";

export const Footer = () => {
  return (
    <footer className="text-white bg-bg-footer py-8 md:py-12 bg-primary_theme px-6 lg:px-10 min-h-[50vh] flex flex-col justify-center items-center overflow-hidden border-t border-solid border-white">
      <article className="w-full max-w-screen-xl mx-auto flex flex-wrap flex-col md:flex-row justify-around items-center">
        <h2 className="md:mb-10 w-full font-bold text-xl text-center">
          Jesús Olmos | Codeenlaweb
        </h2>
        <p className="w-full md:w-1/2 mt-5 mb-6 md:mt-0 md:mb-0 text-center">
          Proyecto elaborado con el objetivo de Analizar y proponer, basado en las
          mejores prácticas de user experience (UX) y user interfaces (UI) un
          rediseño del home de la página: https://ud.school/
        </p>
        <div className="w-full md:w-80">
          <h3 className=" text-terceary-dark font-bold text-xl">Contacto</h3>
          <ul className="font-bold text-lg">
            <li>olmosjesusarmando@gmail.com</li>
            <li>
              <a
                className="outline-none text-secondary-dark hover:text-secondary focus:text-secondary transition ease-linear duration-200"
                href="https://www.linkedin.com/in/jesus-armando-olmos-olmos-607748228/"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                className="outline-none text-secondary-dark hover:text-secondary focus:text-secondary transition ease-linear duration-200"
                href="https://github.com/codigoenlaweb"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </article>
    </footer>
  );
};
