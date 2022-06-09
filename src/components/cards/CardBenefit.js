import React from "react";

export const CardBenefit = ({title, description, imgPath}) => {
  return (
    <div className=" w-full max-w-[280px] mx-2  mt-3 border border-solid border-secondary-dark px-6 py-3 bg-white rounded-md text-center flex flex-col items-center">
      <img src={imgPath} alt={title}/>
      <h3 className="mt-2 font-bold text-xl text-secondary">
        {title}
      </h3>
      <p className="mt-3 text-primary text-sm">
        {description}
      </p>
    </div>
  );
};
