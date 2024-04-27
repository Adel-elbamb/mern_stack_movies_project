import express from 'express';
import dotenv from 'dotenv'
import path from 'path'; 
import bootstarp from './src/bootstrap.js';
dotenv.config({path:path.resolve('./config/.env')})
const app = express();
const port = +process.env.PORT;
bootstarp(app , express)

app.listen(port, () => {
  console.log(`app running successfully on port ${port}`);
});
