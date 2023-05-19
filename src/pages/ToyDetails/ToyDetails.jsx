import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { server } from "../../main";
import { FaStarHalf } from "react-icons/fa";

const ToyDetails = () => {
   const { id } = useParams();
   const [toy, setToy] = useState(null);
   const {
      category,
      description,
      name,
      picture,
      price,
      quantity,
      rating,
      seller_email,
      seller_name,
      _id,
   } = toy || {};
   useEffect(() => {
      fetch(`${server}/toy/${id}`)
         .then((res) => res.json())
         .then((data) => {
            setToy(data);
         });
   }, []);
   return (
      <div className="bg-base-200 py-24">
         <div className="cs-container lg:px-16 xl:px-28">
            <div className="grid md:grid-cols-3 gap-8 bg-white shadow-xl">
               <div className="p-5 h-[300px] md:h-[500px]">
                  <img
                     className="w-full h-full border-2 border-gray-300"
                     src={picture}
                     alt={category}
                  />
               </div>
               <div className="p-5 md:col-span-2">
                  <h1 className="text-4xl">{name}</h1>
                  <p className="mb-3 flex items-center gap-2">
                     {rating && (
                        <ReactStars
                           count={5}
                           size={30}
                           value={rating}
                           isHalf={true}
                           halfIcon={<FaStarHalf />}
                           edit={false}
                        />
                     )}
                     <span className="text-xl">({rating})</span>
                  </p>
                  <p className="text-3xl font-semibold my-3">
                     Price: <span className="">${price}</span>
                  </p>
                  <p className="text-xl font-semibold my-3">
                     Quantity:{" "}
                     <span className="text-green-500"> {quantity}</span>
                  </p>
                  <h3 className="text-xl text-gray-500 mt-3">
                     Product Type:
                     <span className="text-blue-400"> Action Figure Toy</span>
                  </h3>
                  <h3 className="text-xl text-gray-500 mb-3">
                     Category: <span className="text-blue-400">{category}</span>
                  </h3>
                  <p className="text-xl">
                     Seller Name:{" "}
                     <span className="text-lg text-black font-medium">
                        {" "}
                        {seller_name}
                     </span>
                  </p>
                  <p className="text-xl">
                     Seller Email:{" "}
                     <span className="text-lg text-black font-medium">
                        {" "}
                        {seller_email}
                     </span>
                  </p>
                  <p className="mt-3">
                     <span className="text-lg font-medium">Description: </span>
                     {description}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ToyDetails;
