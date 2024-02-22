import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import footerRouter from './routes/footer.route.js';
import navbarRouter from "./routes/navbar.route.js"
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from "cors"
dotenv.config();
const Port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { console.log("db connected successfully") })
  .catch((err) => {
    console.log("err in connecting to database");
    console.log(err);
    process.exit(1);

  });

const __dirname = path.resolve();


const app = express();

app.use(cors({
  origin: '*',
}));

app.use(express.json());

app.use(cookieParser());

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});



app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.use('/api/footer', footerRouter);
app.use('/api/navabr', navbarRouter)



app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
