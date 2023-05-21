import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AllToyRow = ({ toy }) => {
   const navigate = useNavigate();
   const { category, name, picture, price, quantity, seller_name, _id } = toy;

   const { user } = useContext(AuthContext);

   const handleDetailsClick = () => {
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
      <tr>
         <td className="p-2 whitespace-nowrap">
            <div className="flex items-center w-fit">
               <div className="w-12 h-12 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                     className="rounded-full"
                     src={picture}
                     width="60"
                     height="60"
                     alt={name}
                  />
               </div>
               <div className="font-medium text-gray-800">
                  <h2 className="text-lg pt-1">
                     {name.slice(0, 40)}
                     {name.length > 40 ? "..." : ""}
                  </h2>
                  <p>
                     Category: <span className="text-blue-400">{category}</span>
                  </p>
               </div>
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-left">{seller_name}</div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-left font-bold">${price}</div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium text-green-500">
               {quantity}
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium">
               {user ? (
                  <Link
                     className="btn btn-sm btn-ghost"
                     to={`/toy-details/${_id}`}
                  >
                     Details
                  </Link>
               ) : (
                  <button
                     onClick={handleDetailsClick}
                     className="btn btn-sm btn-ghost"
                  >
                     Details
                  </button>
               )}
            </div>
         </td>
      </tr>
   );
};

export default AllToyRow;
