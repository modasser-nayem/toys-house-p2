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
               <div>
                  <img
                     src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HEADER-550_MIXED-1_1944x.jpg?v=1683207797"
                     alt=""
                  />
               </div>
               <div>
                  <img
                     src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HEADER-550_TRANSFORMERS_1944x.jpg?v=1683207797"
                     alt=""
                  />
               </div>
               <div>
                  <img
                     src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HEADER-550_SUPERHEROES_1944x.jpg?v=1683207795"
                     alt=""
                  />
               </div>
               <div>
                  <img
                     src="https://cdn.shopify.com/s/files/1/0698/7730/1541/files/IDT-HEADER-550_PREMIUM_1944x.jpg?v=1683207794"
                     alt=""
                  />
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
