import React, { useContext, useEffect, useState } from "react";
import MyToyRow from "./MyToyRow";
import { server } from "../../main";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import useDynamicTitle from "../../utils/useDynamicTitle";

const MyToys = () => {
   useDynamicTitle("My Toys");
   const { user } = useContext(AuthContext);
   const [toys, setToys] = useState(null);
   const [priceRange, setPriceRange] = useState("highest");
   useEffect(() => {
      fetch(`${server}/my-toys?email=${user.email}&price=${priceRange}`)
         .then((res) => res.json())
         .then((data) => {
            setToys(data);
         });
   }, []);

   const handlePriceRange = (text) => {
      setPriceRange(text);
      fetch(`${server}/my-toys?email=${user.email}&price=${text}`)
         .then((res) => res.json())
         .then((data) => {
            setToys(data);
         });
   };

   const deleteToy = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`${server}/toy/${id}`, {
               method: "DELETE",
               headers: {
                  "content-type": "application/json",
               },
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.success) {
                     const remaining = toys.filter((toy) => toy._id !== id);
                     setToys(remaining);
                     Swal.fire(
                        "Deleted!",
                        "Your Toy has been deleted.",
                        "success"
                     );
                  } else {
                     Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: data.error,
                        showConfirmButton: false,
                        timer: 1500,
                     });
                  }
               });
         }
      });
   };

   return (
      <div className="cs-container py-16">
         {!toys ? (
            <div className="flex flex-col items-center justify-center">
               <h2 className="text-4xl font-semibold text-center">
                  You Don't have any Toy
               </h2>
               <Link
                  to="/add-toy"
                  className="cs-btn w-fit block my-5"
               >
                  Add Toy
               </Link>
            </div>
         ) : (
            <>
               <div className="mx-auto w-fit mb-5">
                  <div className="btn-group">
                     <button
                        onClick={() => handlePriceRange("highest")}
                        className={`btn btn-outline border-goldenrod text-goldenrod hover:border-goldenrod ${
                           priceRange === "highest"
                              ? "bg-goldenrod text-white hover:bg-goldenrod"
                              : ""
                        }`}
                     >
                        High to low price
                     </button>
                     <button
                        onClick={() => handlePriceRange("lowest")}
                        className={`btn btn-outline border-goldenrod text-goldenrod hover:border-goldenrod ${
                           priceRange === "lowest"
                              ? "bg-goldenrod text-white hover:bg-goldenrod"
                              : ""
                        }`}
                     >
                        Low to high price
                     </button>
                  </div>
               </div>
               <div className="bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                     <h2 className="font-semibold text-gray-800">My Toys</h2>
                  </header>
                  <div className="p-3">
                     <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                           <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                              <tr>
                                 <th className="p-2 w-fit">
                                    <div className="text-base font-semibold text-left">
                                       Product Name
                                    </div>
                                 </th>
                                 <th className="p-2 whitespace-nowrap">
                                    <div className="text-base font-semibold text-left">
                                       Price
                                    </div>
                                 </th>
                                 <th className="p-2 whitespace-nowrap">
                                    <div className="text-base font-semibold text-center">
                                       Quantity
                                    </div>
                                 </th>
                                 <th className="p-2 whitespace-nowrap">
                                    <div className="text-base font-semibold text-center">
                                       Details
                                    </div>
                                 </th>
                                 <th className="p-2 whitespace-nowrap">
                                    <div className="text-base font-semibold text-center">
                                       Action
                                    </div>
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="text-sm divide-y divide-gray-100">
                              {toys &&
                                 toys.map((toy) => (
                                    <MyToyRow
                                       deleteToy={deleteToy}
                                       key={toy._id}
                                       toy={toy}
                                    />
                                 ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default MyToys;
