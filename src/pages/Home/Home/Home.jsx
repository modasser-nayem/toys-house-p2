import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Shop from "../Shop/Shop";
import useDynamicTitle from "../../../utils/useDynamicTitle";

const Home = () => {
   useDynamicTitle("Home");
   return (
      <div className="cs-container">
         <Banner />
         <Gallery />
         <Shop />
      </div>
   );
};

export default Home;
