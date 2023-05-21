import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { server } from "../../../main";
import ShopToyCart from "../../Shared/ShopToyCart";
import Loading from "../../Shared/Loading";

const Shop = () => {
   const [toys, setToys] = useState(null);
   useEffect(() => {
      fetch(`${server}/toys?category=Marvel`)
         .then((res) => res.json())
         .then((data) => {
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
      <>
         {!toys ? (
            <Loading />
         ) : (
            <div className="mb-24">
               <h2 className="cs-title">Shop</h2>
               <div>
                  <Tabs>
                     <TabList className="mt-10 mb-7 w-fit mx-auto">
                        <Tab onClick={() => showData("Marvel")}>Marvel</Tab>
                        <Tab onClick={() => showData("Avengers")}>Avengers</Tab>
                        <Tab onClick={() => showData("Transformers")}>
                           Transformers
                        </Tab>
                     </TabList>

                     {toys && (
                        <>
                           <TabPanel>
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                 {toys.map((toy) => (
                                    <ShopToyCart
                                       key={toy._id}
                                       toy={toy}
                                    />
                                 ))}
                              </div>
                           </TabPanel>
                           <TabPanel>
                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                 {toys.map((toy) => (
                                    <ShopToyCart
                                       key={toy._id}
                                       toy={toy}
                                    />
                                 ))}
                              </div>
                           </TabPanel>
                           <TabPanel>
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                 {toys.map((toy) => (
                                    <ShopToyCart
                                       key={toy._id}
                                       toy={toy}
                                    />
                                 ))}
                              </div>
                           </TabPanel>
                        </>
                     )}
                  </Tabs>
               </div>
            </div>
         )}
      </>
   );
};

export default Shop;
