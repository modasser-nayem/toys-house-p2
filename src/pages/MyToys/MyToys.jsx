import React, { useContext, useEffect, useState } from "react";
import MyToyRow from "./MyToyRow";
import { server } from "../../main";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
   const { user } = useContext(AuthContext);
   const [toys, setToys] = useState(null);
   useEffect(() => {
      fetch(`${server}/my-toys?email=${user.email}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setToys(data);
         });
   }, []);
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
            <div className="bg-white shadow-lg rounded-sm border border-gray-200">
               <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">Members</h2>
               </header>
               <div className="p-3">
                  <div className="overflow-x-auto">
                     <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                           <tr>
                              <th className="p-2 w-fit">
                                 <div className="font-semibold text-left">
                                    Product Name
                                 </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                 <div className="font-semibold text-left">
                                    Seller
                                 </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                 <div className="font-semibold text-left">
                                    Price
                                 </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                 <div className="font-semibold text-left">
                                    Quantity
                                 </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                 <div className="font-semibold text-left">
                                    Details
                                 </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                 <div className="font-semibold text-center">
                                    Action
                                 </div>
                              </th>
                           </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                           {toys &&
                              toys.map((toy) => (
                                 <MyToyRow
                                    key={toy._id}
                                    toy={toy}
                                 />
                              ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default MyToys;
