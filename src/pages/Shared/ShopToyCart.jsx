import React, { useContext, useEffect } from "react";
import { FaEye, FaStarHalf } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopToyCart = ({ toy }) => {
   const navigate = useNavigate();
   const { _id, name, picture, price, rating } = toy;
   const { user } = useContext(AuthContext);

   useEffect(() => {
      AOS.init({
         duration: 2000,
      });
      AOS.refresh();
   }, []);

   const handleClick = () => {
      Swal.fire({
         title: "See You Details!",
         text: "You have to log in first to view details",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Login",
      }).then((result) => {
         if (result.isConfirmed) {
            navigate(`/toy-details/${_id}`);
         }
      });
   };
   return (
      <div
         data-aos="zoom-in"
         className="rounded-md border-2 hover:border-none hover:shadow-2xl p-5"
      >
         <img
            className="w-full max-h-[300px]"
            src={picture}
            alt={name}
         />
         <div>
            <h2 className="text-2xl font-medium my-2">{name}</h2>
            <p className="text-xl font-bold">Price: ${price}</p>
            <p className="mb-5">
               <ReactStars
                  count={5}
                  size={30}
                  value={rating}
                  isHalf={true}
                  halfIcon={<FaStarHalf />}
                  edit={false}
               />
            </p>
            {user ? (
               <Link
                  to={`/toy-details/${_id}`}
                  className="cs-btn w-full"
               >
                  <FaEye className="inline-block pb-1 pr-1" /> View Details
               </Link>
            ) : (
               <button
                  onClick={handleClick}
                  className="cs-btn w-full"
               >
                  <FaEye className="inline-block pb-1 pr-1" /> View Details
               </button>
            )}
         </div>
      </div>
   );
};

export default ShopToyCart;
