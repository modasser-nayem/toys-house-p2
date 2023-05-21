import React, { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import { server } from "../../main";
import { FaSearch } from "react-icons/fa";
import useDynamicTitle from "../../utils/useDynamicTitle";
import Loading from "../Shared/Loading";

const AllToys = () => {
   useDynamicTitle("All Toys");
   const [searchText, setSearchText] = useState("");
   const [toys, setToys] = useState(null);
   useEffect(() => {
      fetch(`${server}/all-toys`)
         .then((res) => res.json())
         .then((data) => {
            setToys(data);
         });
   }, []);

   const handleSearch = (text) => {
      fetch(`${server}/all-toys?search=${text}`)
         .then((res) => res.json())
         .then((data) => {
            setToys(data);
         });
   };
   return (
      <div className="cs-container py-16">
         {!toys ? (
            <Loading />
         ) : (
            <div className="bg-white shadow-lg rounded-sm border border-gray-200">
               <div className="form-control w-fit mx-auto">
                  <div className="input-group">
                     <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search…"
                        className="input input-bordered"
                     />
                     <button
                        onClick={() => handleSearch(searchText)}
                        className="btn btn-square"
                     >
                        <FaSearch />
                     </button>
                  </div>
               </div>
               <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">All Toys</h2>
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
                                    Seller
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
         )}
      </div>
   );
};

export default AllToys;
