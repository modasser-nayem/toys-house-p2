import React, { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import { server } from "../../main";

const AllToys = () => {
   const [toys, setToys] = useState(null);
   useEffect(() => {
      fetch(`${server}/all-toys`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setToys(data);
         });
   }, []);
   return (
      <div className="cs-container">
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
                              <div className="font-semibold text-center">
                                 Quantity
                              </div>
                           </th>
                           <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-center">
                                 Details
                              </div>
                           </th>
                        </tr>
                     </thead>
                     <tbody className="text-sm divide-y divide-gray-100">
                        {toys &&
                           toys.map((toy) => (
                              <AllToyRow
                                 key={toy._id}
                                 toy={toy}
                              />
                           ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AllToys;
