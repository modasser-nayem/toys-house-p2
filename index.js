require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();

const corsConfig = {
   origin: "",
   credentials: true,
   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

// middleware
app.use(cors(corsConfig));
app.options("", cors(corsConfig));
app.use(express.json());

// root route
app.get("/", (req, res) => {
   res.send(`<h1>Toys House is Running...</h1>`);
});

//---------------------------------------------
//                Mongodb Start
//---------------------------------------------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.p87lrd6.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});

async function run() {
   try {
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log(
         "Pinged your deployment. You successfully connected to MongoDB!"
      );

      // collections
      const userCollection = client.db("toys-house").collection("users");
      const toysCollection = client.db("toys-house").collection("toys");

      //<|---------------- Routes Start ------------------|>//
      // all toy data
      app.get("/all-toys", async (req, res) => {
         const options = {
            projection: {
               _id: 1,
               picture: 1,
               name: 1,
               price: 1,
               seller_name: 1,
               category: 1,
               quantity: 1,
            },
         };
         const result = await toysCollection
            .find({}, options)
            .limit(5)
            .toArray();
         res.send(result);
      });

      // category to find data
      app.get("/toys", async (req, res) => {
         const categoryQuery = req.query.category;
         let databaseQuery = {};
         if (categoryQuery) {
            databaseQuery = { category: categoryQuery };
         }
         const options = {
            projection: { _id: 1, picture: 1, name: 1, price: 1, rating: 1 },
         };
         const result = await toysCollection
            .find(databaseQuery, options)
            .toArray();
         res.send(result);
      });

      // my toys
      app.get("/my-toys", async (req, res) => {
         const routeQuery = req.query.email;
         if (routeQuery) {
            const databaseQuery = { seller_email: routeQuery };
            const options = {
               projection: { _id: 1, picture: 1, name: 1, price: 1, rating: 1 },
            };
            const result = await toysCollection
               .find(databaseQuery, options)
               .toArray();
            res.send(result);
         } else {
            res.status(400).send({
               success: false,
               error: "email query not send",
            });
         }
      });

      // specific toy details
      app.get("/toy/:id", async (req, res) => {
         const id = req.params.id;
         const query = { _id: new ObjectId(id) };
         const result = await toysCollection.findOne(query);
         res.send(result);
      });

      // Create  a toy
      app.post("/toy", async (req, res) => {
         const data = req.body;
         const result = await toysCollection.insertOne(data);
         if (result.acknowledged) {
            res.status(201).send({
               success: true,
               message: "Toy Created Successfully",
            });
         } else {
            res.status(400).send({
               success: false,
               error: "Toy Created Failed!!!",
            });
         }
      });

      // update toy
      app.put("/toy/:id", async (req, res) => {
         const id = req.params.id;
         const updatedData = req.body;
         const query = { _id: new ObjectId(id) };
         const updateDoc = {
            $set: { updatedData },
         };
         const result = await toysCollection.updateOne(query, updateDoc);
         if (result.modifiedCount) {
            res.status(201).send({
               success: true,
               message: "Successfully Updated toy",
            });
         } else {
            res.status(400).send({
               success: false,
               error: "Failed to Update!!!",
            });
         }
      });

      // Delete toy
      app.delete("/toy/:id", async (req, res) => {
         const id = req.params.id;
         const query = { _id: new ObjectId(id) };
         const result = await toysCollection.deleteOne(query);
         if (result.deletedCount === 1) {
            res.status(200).send({
               success: true,
               message: "Successfully deleted toy",
            });
         } else {
            res.status(400).send({
               success: false,
               error: "Failed deleted!!!",
            });
         }
      });

      //<|---------------- Routes End ------------------|>//
   } catch {
      console.log("Mongodb error");
   }
}
run().catch(console.dir);
// --------------------------------------------
//                Mongodb End
//---------------------------------------------

// Listen Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
   console.log(`SERVER IS RUNNING AT http://localhost:${port}`);
});
