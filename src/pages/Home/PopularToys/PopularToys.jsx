import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { server } from "../../../main";
import { FaStarHalf } from "react-icons/fa";
import Loading from "../../Shared/Loading";

const PopularToys = () => {
   const [toys, setToys] = useState(null);
   useEffect(() => {
      fetch(`${server}/popular-toys`)
         .then((res) => res.json())
         .then((data) => {
            setToys(data);
         });
   }, []);
   return (
      <>
         {!toys ? (
            <Loading />
         ) : (
            <div className="cs-container py-16">
               <h2 className="cs-title">Popular Toys</h2>
               <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-5 mt-12 justify-center md:justify-normal">
                  {toys &&
                     toys.map((toy) => (
                        <div
                           key={toy._id}
                           className="rounded-md w-fit shadow-2xl p-5 hover:scale-110 duration-300"
                        >
                           <img
                              className="max-w-[150px]"
                              src={toy.picture}
                              alt=""
                           />
                           <div>
                              <h2 className="text-xl font-medium my-2">
                                 {toy.category}
                              </h2>
                              <p className="font-bold">Price: ${toy.price}</p>
                              <p className="flex gap-1">
                                 <ReactStars
                                    count={5}
                                    size={20}
                                    value={toy.rating}
                                    isHalf={true}
                                    halfIcon={<FaStarHalf />}
                                    edit={false}
                                 />
                                 ({toy.rating})
                              </p>
                           </div>
                        </div>
                     ))}
               </div>
            </div>
         )}
      </>
   );
};

export default PopularToys;
