import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import ratingRoutes from './routes/rating';
import festivalsRoute from './routes/festival'

const MONGO_URI = "mongodb+srv://manisha:vishal@snowflake.oihjcl2.mongodb.net/";

mongoose.connect(MONGO_URI)
  .then(() => {
    const app: Application = express();

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const corsOptions: cors.CorsOptions = {
      origin: '*',
      credentials: true,
      optionsSuccessStatus: 200
    };
    app.use(cors(corsOptions));

    // Sample route
    // app.get('/', (req: Request, res: Response) => {
    //   res.send('Server is running and connected to MongoDB.');
    // });

app.use('/api/reviews', ratingRoutes);
app.use('/api/festivals', festivalsRoute);

    // Start server
    app.listen(5000, () => {
      console.log("✅ Server running on http://localhost:5000");
    });
  })
  .catch((err: Error) => {
    console.error("❌ MongoDB connection error:", err);
  });
