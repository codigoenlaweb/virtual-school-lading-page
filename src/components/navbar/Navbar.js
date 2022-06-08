import React from "react";

export const Navbar = () => {
    const imagePath = `assets/logo.png`;
  return (
    <header>
      {/* mobiles */}
      <nav className="sticky py-3 flex flex-wrap justify-between items-center bg-primary">
        <img className="h-14" src={imagePath} alt="logo"/>
        <svg className="pr-3 fill-white hover:fill-secondary transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" height="40" width="40">
          <path d="M5 30V27.208H35V30ZM5 21.375V18.625H35V21.375ZM5 12.792V10H35V12.792Z" />
        </svg>
        <div className="absolute top-20 bg-primary_light w-full rounded-b-lg">
            <ul className="py-2 text-white font-bold text-lg text-center">
                <li className="py-1">Experiencia uDiscover</li>
                <li className="py-1">Blog</li>
                <li className="py-1">Admisiones</li>
                <li className="py-1">Plataforma uDiscover</li>
            </ul>
        </div>
      </nav>

    </header>
  );
};
