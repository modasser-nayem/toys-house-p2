import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { server } from "../../../main";
import ShopToyCart from "../../Shared/ShopToyCart";

const Shop = () => {
   const [toys, setToys] = useState(null);
   const [category, setCategory] = useState("Marvel");
   console.log(toys);
   useEffect(() => {
      fetch(`${server}/toys?category=${category}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setToys(data);
         });
   }, []);

   const showData = (text) => {
      fetch(`${server}/toys?category=${text}`)
         .then((res) => res.json())
         .then((data) => {
            setToys(data);
         });
   };

   return (
      <div className="mb-24">
         <h2 className="cs-title">Shop</h2>
         <div>
            <Tabs>
               <TabList>
                  <Tab onClick={() => showData("Marvel")}>Marvel</Tab>
                  <Tab onClick={() => showData("Avengers")}>Avengers</Tab>
                  <Tab onClick={() => showData("Transformers")}>
                     Transformers
                  </Tab>
               </TabList>

               {toys && (
                  <>
                     <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                           {toys.map((toy) => (
                              <ShopToyCart
                                 key={toy._id}
                                 toy={toy}
                              />
                           ))}
                        </div>
                     </TabPanel>
                     <TabPanel>
                        {toys.map((toy) => (
                           <ShopToyCart
                              key={toy._id}
                              toy={toy}
                           />
                        ))}
                     </TabPanel>
                     <TabPanel>
                        {toys.map((toy) => (
                           <ShopToyCart
                              key={toy._id}
                              toy={toy}
                           />
                        ))}
                     </TabPanel>
                  </>
               )}
            </Tabs>
         </div>
      </div>
   );
};

export default Shop;
