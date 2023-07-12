import dotenv from 'dotenv';
import colors from 'colors';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
