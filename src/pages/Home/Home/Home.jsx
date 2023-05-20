import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Shop from "../Shop/Shop";
import useDynamicTitle from "../../../utils/useDynamicTitle";
import PopularToys from "../PopularToys/PopularToys";
import Upcoming from "../UpComingToy/Upcoming";

const Home = () => {
   useDynamicTitle("Home");
   return (
      <div className="cs-container">
         <Banner />
         <Gallery />
         <Shop />
         <PopularToys />
         <Upcoming />
      </div>
   );
};

export default Home;
