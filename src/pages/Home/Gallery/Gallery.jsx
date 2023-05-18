import React from "react";

const Gallery = () => {
   return (
      <div className="py-16">
         <div className="grid grid-cols-3 gap-5">
            <div className="h-[250px] overflow-hidden">
               <img
                  className="w-full h-full hover:scale-110 duration-500"
                  src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HOME-TRIPLE-STARWARS_540x.jpg?v=1680085731"
                  alt=""
               />
            </div>
            <div className="h-[250px] overflow-hidden">
               <img
                  className="w-full h-full hover:scale-110 duration-500"
                  src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HOME-TRIPLE-TRANSFORMERS_540x.jpg?v=1680085731"
                  alt=""
               />
            </div>
            <div className="h-[250px] overflow-hidden">
               <img
                  className="w-full h-full hover:scale-110 duration-500"
                  src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HOME-TRIPLE-MARVEL_540x.jpg?v=1680085731"
                  alt=""
               />
            </div>
         </div>
         <div className="grid grid-cols-4 gap-5 my-5">
            <div className="h-[150px] overflow-hidden">
               <img
                  className="w-full h-full hover:scale-110 duration-500"
                  src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HOME-DUO-CLOSEOUT_233039f7-a136-41f2-bfa8-7ae1959d17ec_360x.jpg?v=1680085798"
                  alt=""
               />
            </div>
            <div className="h-[150px] overflow-hidden">
               <img
                  className="w-full h-full hover:scale-110 duration-500"
                  src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HOME-DUO-PREOWNED_7ff865b4-c527-48c5-bbca-01e8f990fab3_360x.jpg?v=1680085798"
                  alt=""
               />
            </div>
            <div className="h-[150px] overflow-hidden">
               <img
                  className="w-full h-full hover:scale-110 duration-500"
                  src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HEADER_INDIANAJONES_360x.jpg?v=1682604864"
                  alt=""
               />
            </div>
            <div className="h-[150px] overflow-hidden">
               <img
                  className="w-full h-full hover:scale-110 duration-500"
                  src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/Dungeon_Dragons_Final_Episode_Banner_360x.jpg?v=1684331873"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default Gallery;
