import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyToyRow = ({ toy }) => {
   const { category, name, picture, price, quantity, seller_name, _id } = toy;
   return (
      <tr>
         <td className="p-2 whitespace-nowrap">
            <div className="flex items-center w-fit">
               <div className="w-14 h-14 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                     className="rounded-full"
                     src={picture}
                     width="60"
                     height="60"
                     alt={name}
                  />
               </div>
               <div className="font-medium text-gray-800">
                  <h2 className="text-lg pt-1">{name}</h2>
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
            <div className="text-lg text-center font-medium text-green-500">
               {quantity}
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium">
               <Link
                  className="btn btn-sm btn-ghost"
                  to={`/toy-details/${_id}`}
               >
                  Details
               </Link>
            </div>
         </td>
         <td className="p-2 whitespace-nowrap">
            <div className="text-lg text-center flex items-center gap-3">
               <button className="btn btn-sm btn-info">Update</button>
               <BsFillTrashFill
                  onClick={() => deleteUser(_id)}
                  className="w-fit mx-auto text-xl hover:text-red-500 cursor-pointer"
               />
            </div>
         </td>
      </tr>
   );
};

export default MyToyRow;
