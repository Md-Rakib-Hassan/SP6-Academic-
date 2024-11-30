const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5175', 'http://localhost:5173'],
  credentials: true,
  optionSuccessStatus: 200
}));

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DATABASE_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("sp6");

    app.post("/api/auth/signup", async (req, res) => {
      const { name, email, password } = req.body;

      try {
        const usersCollection = db.collection("users");

        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
        }

        const newUser = { name, email, password };
        await usersCollection.insertOne(newUser);

        res.status(201).json({ message: "User registered successfully", user: { name, email } });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
    });

    app.post("/api/auth/login", async (req, res) => {
      const { email, password } = req.body;

      try {
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({ email });
        if (!user || user.password !== password) {
          return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful", user: { name: user.name, email } });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
    });

    // Change Password
    app.put("/api/auth/change-password", async (req, res) => {
      const { email, current_password, new_password } = req.body;

      try {
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({ email });
        if (!user || user.password !== current_password) {
          return res.status(400).json({ message: "Invalid credentials" });
        }

        await usersCollection.updateOne({ email }, { $set: { password: new_password } });

        res.status(200).json({ message: "Password changed successfully" });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
    });

    // Delete User Profile
    app.delete("/api/auth/delete-user", async (req, res) => {
      const { email } = req.body;

      try {
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        await usersCollection.deleteOne({ email });

        res.status(200).json({ message: "User profile deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
    });

    // Get All Users
    app.get("/api/users", async (req, res) => {
      try {
        const usersCollection = db.collection("users");

        const users = await usersCollection.find({}).toArray();

        res.status(200).json({ message: "Users retrieved successfully", users });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API', status: 'OK' });
});

app.listen(port, () => {
  console.log("server is running");
});
