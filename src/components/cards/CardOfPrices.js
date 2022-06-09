import React from "react";

export const CardOfPrices = ({
  title,
  numberOfPayments,
  paymentPerMonth,
  regularPayment,
  thrift,
  detailsTitle,
  ValueToPayUpTo,
  details = [],
}) => {
  const imgPath = "assets/img-country.png";

  return (
    <article className="mt-4 border-4 border-solid border-cyan-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg transition-all ease-linear duration-500 text-white px-4 pt-2 pb-12 flex flex-col justify-center relative">
      <div className="mb-4 text-center pb-6 border-b-cyan-500 border-b-2 border-solid">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{numberOfPayments}</p>
      </div>
      <div>
        <img src={imgPath} alt="country" className="mx-auto" />
        <h4 className="mt-2 mb-5 text-center border-2 border-solid border-white rounded-lg font-bold text-2xl">
          {paymentPerMonth}
        </h4>
        <h4 className="mb-2 line-through decoration-white">{regularPayment}</h4>
        <h3>{thrift}</h3>
      </div>

      <div className="mt-6 mb-4 bg-secondary-dark rounded-lg py-2 px-2 text-sm font-bold">
        <p className="mb-4">{detailsTitle}</p>
        {details.map((details, i) => {
          return (
            <p key={i}>
              {details.text}
              <span className="text-xs font-light">{details.span}</span>
            </p>
          );
        })}

        {ValueToPayUpTo && (
          <p className="mt-2 text-xs font-light">
            *Valor a pagar hasta el {ValueToPayUpTo} de cada mes.
          </p>
        )}
      </div>
      <div className="absolute left-0 bottom-3 w-full mx-auto flex flex-wrap justify-center">
        <button className="font-bold group py-1 px-4 rounded-full border-solid border-2 text-terceary-dark hover:text-white border-terceary-dark focus:bg-terceary-dark hover:bg-terceary-dark outline-none transition duration-200 ease-linear">
          <a className="" href="/#">
            Contacta a tu asesor
          </a>
        </button>
      </div>
    </article>
  );
};
