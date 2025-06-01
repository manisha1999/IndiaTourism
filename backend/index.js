const express = require("express");
const mongoose = require("mongoose")
// import mongoose from 'mongoose';
const cors = require("cors")
// import cors from 'cors';

// // Import routes with .js extensions for ES modules
// import ratingRoutes from './routes/rating.js';
const ratingRoutes = require('./routes/rating.js')
const  festivalsRoute=require('./routes/festival.js');

const MONGO_URI = "mongodb+srv://manisha:vishal@snowflake.oihjcl2.mongodb.net/";

mongoose.connect(MONGO_URI)
  .then(() => {
    const app = express();

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const corsOptions = {
      origin: '*',
      credentials: true,
      optionsSuccessStatus: 200
    };
    app.use(cors(corsOptions));

    // Routes
    app.use(ratingRoutes);
    app.use(festivalsRoute);

    // Start server
    app.listen(5000, () => {
      console.log("✅ Server running on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
