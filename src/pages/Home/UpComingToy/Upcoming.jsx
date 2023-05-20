import React, { useState } from "react";

const Upcoming = () => {
   const [toys, setToys] = useState([
      {
         _id: "1",
         name: "Buildables Iron Man",
         category: "Skillmatics",
         picture: "https://m.media-amazon.com/images/I/81zQ0rJeBTL._SX679_.jpg",
      },
      {
         _id: "2",
         name: "Captain America",
         category: "Star Wars",
         picture: "https://m.media-amazon.com/images/I/71+Fq4EORsL._SX679_.jpg",
      },
      {
         _id: "3",
         name: "The Bad Batch",
         category: "Star Wars",
         picture:
            "https://www.slashfilm.com/img/uploads/embed/it-JWeQZS-1681149800.jpg",
      },
      {
         _id: "4",
         name: "Titan Changer Megatron",
         category: "Transformers",
         picture: "https://m.media-amazon.com/images/I/81Whwub0GjL._SX679_.jpg",
      },
   ]);
   return (
      <div className="cs-container my-24">
         <h2 className="cs-title">Upcoming Toys</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 justify-center">
            {toys &&
               toys.map((toy) => (
                  <div
                     key={toy._id}
                     className="rounded-md relative w-fit border-2 overflow-hidden"
                  >
                     <img
                        className="w-full h-full hover:scale-110 duration-300"
                        src={toy.picture}
                        alt=""
                     />
                     <div className="absolute left-0 bottom-0 bg-black/90 w-full text-white p-3">
                        <h2 className="text-lg font-medium my-2">
                           Name: {toy.name}
                        </h2>
                        <p className="">Category: {toy.category}</p>
                     </div>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default Upcoming;
