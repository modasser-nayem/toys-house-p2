import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Shop from "../Shop/Shop";

const Home = () => {
   // const [toys, setToys] = useState(null);
   // useEffect(() => {
   //    fetch(`https://toys-house-cyan.vercel.app/all-toys`)
   //       .then((res) => res.json())
   //       .then((data) => {
   //          console.log(data);
   //          setToys(data);
   //       });
   // }, []);
   return (
      <div className="cs-container">
         <Banner />
         <Gallery />
         <Shop />
      </div>
   );
};

export default Home;
