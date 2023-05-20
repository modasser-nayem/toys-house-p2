import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Banner extends Component {
   render() {
      const settings = {
         dots: true,
         infinite: true,
         speed: 2000,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 5000,
      };
      return (
         <div className="">
            <Slider {...settings}>
               <div className="relative">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HEADER-550_MIXED-1_1944x.jpg?v=1683207797"
                     alt=""
                  />
                  <div className="absolute flex items-center p-8 top-0 z-40 h-full">
                     <h2 className="text-2xl md:text-4xl lg:text-[5em] font-bold text-white">
                        Welcome
                     </h2>
                  </div>
               </div>
               <div className="relative">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HEADER-550_TRANSFORMERS_1944x.jpg?v=1683207797"
                     alt=""
                  />
                  <div className="absolute flex flex-col justify-center p-8 top-0 z-40 h-full">
                     <p className="md:text-xl lg:text-2xl text-white font-semibold">
                        Transformer & Roll OUT!
                     </p>
                     <h2 className="text-2xl md:text-4xl lg:text-[5em] font-bold text-white py-3">
                        Transformers
                     </h2>
                     <button className="outline-none rounded-md  py-1.5 px-3 lg:py-3 md:px-5 lg:text-xl font-medium text-white border-2 border-white w-fit">
                        Les's Go
                     </button>
                  </div>
               </div>
               <div className="relative">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HEADER-550_SUPERHEROES_1944x.jpg?v=1683207795"
                     alt=""
                  />
                  <div className="absolute flex flex-col justify-center p-8 top-0 z-40 h-full">
                     <p className="md:text-xl lg:text-2xl text-pink-800 font-semibold">
                        SUPERHEROES Assemble!
                     </p>
                     <h2 className="text-2xl md:text-4xl lg:text-[5em] font-bold py-3">
                        SUPERHEROES
                     </h2>
                     <button className="outline-none rounded-md  py-1.5 px-3 lg:py-3 md:px-5 lg:text-xl font-medium text-pink-800 border-2 border-pink-800 w-fit">
                        Les's Go
                     </button>
                  </div>
               </div>
               <div className="relative">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HEADER-550_PREMIUM_1944x.jpg?v=1683207794"
                     alt=""
                  />
                  <div className="absolute flex flex-col justify-center p-8 top-0 z-40 h-full">
                     <p className="md:text-xl lg:text-2xl text-white font-semibold">
                        You Shall not pass
                     </p>
                     <h2 className="text-2xl md:text-4xl lg:text-[5em] font-bold text-white py-3">
                        Premium Collectables
                     </h2>
                     <button className="outline-none rounded-md  py-1.5 px-3 lg:py-3 md:px-5 lg:text-xl font-medium text-white border-2 border-white w-fit">
                        Les's Go
                     </button>
                  </div>
               </div>
               <div>
                  <img
                     src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HEADER-550_SOCIAL_1944x.jpg?v=1683210206"
                     alt=""
                  />
               </div>
            </Slider>
         </div>
      );
   }
}

export default Banner;
