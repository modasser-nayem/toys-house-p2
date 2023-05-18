import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { server } from "../../../main";

const Shop = () => {
   const [toys, setToys] = useState(null);
   const [showToys, setShowToys] = useState(null);
   console.log(toys);
   useEffect(() => {
      fetch(`${server}/toys`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setToys(data);
         });
   }, []);
   return (
      <div className="mb-24">
         <h2 className="cs-title">Shop</h2>
         <div>
            <Tabs>
               <TabList>
                  <Tab>Marvel</Tab>
                  <Tab>Avengers</Tab>
                  <Tab>Transformers</Tab>
               </TabList>

               <TabPanel>
                  <h2>Any content 1</h2>
               </TabPanel>
               <TabPanel>
                  <h2>Any content 2</h2>
               </TabPanel>
               <TabPanel>
                  <h2>Any content 2</h2>
               </TabPanel>
            </Tabs>
         </div>
      </div>
   );
};

export default Shop;
