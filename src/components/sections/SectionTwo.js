import React from "react";
import "./text-shadow.css";

export const SectionTwo = () => {
  const graduateIcon = `assets/graduate.svg`;

  return (
    <section className="py-8 md:py-12 bg-primary_theme px-6 lg:px-10 min-h-screen flex flex-col items-center overflow-hidden">
      <article className="text-white flex flex-wrap flex-col md:flex-row items-center md:items-center md:justify-between max-w-screen-xl">
        <h2 className="leading-7 text-shadow-title w-36 md:w-44 lg:w-72 font-bold text-3xl md:text-4xl lg:text-6xl text-center">
          Por una educación{" "}
          <span className="leading-7 text-secondary-light">+</span>{" "}
          <span className="leading-7 text-terceary">humana</span>
        </h2>
        <div className="w-full md:w-2/3 lg:text-xl">
          <h3 className="font-bold mt-5">
            uDiscover es un Colegio Virtual bilingüe Americano, con enfoque en
            Tecnología, Emprendimiento e Innovación.
          </h3>
          <p className="mt-8">
            Ofrecemos la modalidad: Académica bilingüe (español-inglés).
            Contamos con 3 niveles:{" "}
            <span className=" text-secondary-light">
              Elementary School (básica primaria) , Middle School (básica
              secundaria) y High School (educación media)
            </span>{" "}
            de carácter mixto, Calendarios A (Inicio clases Febrero) y B (Inicio
            clases Agosto).
          </p>
        </div>
      </article>

      <form className="bg-bg-form shadow-shadow-form-yellow mt-8 md:mt-12 px-4 py-6 text-white flex flex-col items-center max-w-screen-lg bg-terceary rounded-2xl">
        {/* Inscribete */}
        <div className=" max-w-md">
          <h2 className="text-4xl font-black">Inscrpíbete ahora</h2>
          <p className="mt-3 font-black">
            Nuestra asesora pedagógica se pondrá en contacto para iniciar el
            proceso de inscripción de tu hijo.
          </p>
        </div>

        {/* Box */}
        <div className="mt-6 flex flex-wrap justify-around items-center">
          {/* Name */}
          <div className="w-full max-w-sm sm:w-45%">
            <label for="name" className="text-xl pl-4">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="px-3 mb-3 h-10 text-lg rounded-full w-full outline-1 outline-primary_theme border border-solid border-gray-300 text-gray-500 font-medium"
            />
          </div>

          {/* Last Name */}
          <div className="w-full max-w-sm sm:w-45%">
            <label for="last_name" className="text-xl pl-4">
              Apellido
            </label>
            <input
              type="text"
              id="last_name"
              className="px-3 mb-3 h-10 text-lg rounded-full w-full outline-1 outline-primary_theme border border-solid border-gray-300 text-gray-500 font-medium"
            />
          </div>

          {/* Email */}
          <div className="w-full max-w-sm sm:w-45%">
            <label for="email" className="text-xl pl-4">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="px-3 mb-3 h-10 text-lg rounded-full w-full outline-1 outline-primary_theme border border-solid border-gray-300 text-gray-500 font-medium"
            />
          </div>

          {/* Phone */}
          <div className="w-full max-w-sm sm:w-45%">
            <label for="phone" className="text-xl pl-4">
              Teléfono celular
            </label>
            <input
              type="tel"
              id="phone"
              className="px-3 mb-3 h-10 text-lg rounded-full w-full outline-1 outline-primary_theme border border-solid border-gray-300 text-gray-500 font-medium"
            />
          </div>

          {/* Age */}
          <div className="w-full max-w-sm sm:w-45%">
            <label for="age" className="text-xl pl-4">
              Edad del estudiante
            </label>
            <input
              type="number"
              min="3"
              id="age"
              className="px-3 mb-3 h-10 text-lg rounded-full w-full outline-1 outline-primary_theme border border-solid border-gray-300 text-gray-500 font-medium"
            />
          </div>

          {/* Reason */}
          <div className="w-full max-w-sm sm:w-45%">
            <label for="reason" className="text-xl pl-4">
              ¿Cuál es el motivo para buscar un colegio virtual?
            </label>
            <select
              id="reason"
              className="px-3 mb-3 h-10 text-lg rounded-full w-full outline-1 outline-primary_theme border border-solid border-gray-300 text-gray-500 font-medium"
            >
              <option disabled value="" selected>
                Selecciona una opción
              </option>
              <option value="Viajamos mucho">Viajamos mucho</option>
              <option value="Mi hijo es deportista/artista y necesita flexibilidad de horarios">
                Mi hijo es deportista/artista y necesita flexibilidad de
                horarios
              </option>
              <option value="Por temas de salud">Por temas de salud</option>
              <option value="Mi hijo prefiere la educación en casa">
                Mi hijo prefiere la educación en casa
              </option>
              <option value="Presupuesto">Presupuesto</option>
              <option value="Mi hijo prefiere la socializacion virtual">
                Mi hijo prefiere la socializacion virtual
              </option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {/* Privacy checkbox */}
          <div className="mt-4 md:mt-6">
            <input type="checkbox" id="privacy" className="h-4 w-4" />
            <a
              href="/#"
              className="text-xl text-primary hover:text-primary_theme pl-2 font-semibold"
            >
              He leído y acepto la política de privacidad*
            </a>
          </div>
        </div>

        <input
          className="mt-8 bg-primary hover:bg-primary_theme px-6 py-2 rounded-2xl font-bold"
          type="submit"
          value="Enviar"
        />

        <p className="mt-4 text-sm">
          ¿Ya te inscribiste?{" "}
          <a href="/#" className="text-primary hover:text-primary_theme pl-2 font-semibold">
            Ingresa aquí para conocer el proceso de admisión.
          </a>
        </p>
      </form>

      <article className="mt-10 text-white text-center max-w-screen-xl">
        <img src={graduateIcon} alt="gorro de graduacion" className="mx-auto w-24 mb-2"/>
        <p className="md:text-lg lg:text-xl">Al ser parte de uDiscover, nuestros estudiantes obtienen la titulación High School Diploma.</p>
      </article>
    </section>
  );
};
