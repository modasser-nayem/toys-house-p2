import React, { useEffect, useState } from "react";
import { server } from "../../../main";

const Home = () => {
   const [toys, setToys] = useState(null);
   useEffect(() => {
      fetch(`${server}/toys`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setToys(data);
         });
   }, []);
   return <div>Home</div>;
};

export default Home;
