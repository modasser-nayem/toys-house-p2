import React from "react";
import { FaEye, FaStarHalf } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

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
            <h2 className="text-2xl font-medium my-2">{name}</h2>
            <p className="text-xl font-bold">Price: ${price}</p>
            <p className="mb-3">
               <ReactStars
                  count={5}
                  size={30}
                  value={rating}
                  isHalf={true}
                  halfIcon={<FaStarHalf />}
                  edit={false}
               />
            </p>
            <Link
               to={`/toy-details/${_id}`}
               className="cs-btn w-full"
            >
               <FaEye className="inline-block pb-1 pr-1" /> View Details
            </Link>
         </div>
      </div>
   );
};

export default ShopToyCart;
