import React from "react";
import { FaEye } from "react-icons/fa";

const ShopToyCart = ({ toy }) => {
   const { _id, name, picture, price, rating } = toy;
   return (
      <div className="rounded-md border-2 hover:border-none hover:shadow-2xl p-5">
         <img
            className="w-full max-h-[300px]"
            src={picture}
            alt={name}
         />
         <div>
            <h2 className="text-2xl font-medium">{name}</h2>
            <p className="text-xl font-semibold">Price: ${price}</p>
            <p>{rating}</p>
            <button className="cs-btn w-full">
               <FaEye className="inline-block pb-1 pr-1" /> View Details
            </button>
         </div>
      </div>
   );
};

export default ShopToyCart;
