const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.route.js');
const authRouter = require('./routes/auth.route.js');
const tourRouter = require("./routes/tour.route.js");
const bookingRouter = require("./routes/booking.route.js");

const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require("cors");
dotenv.config();
const Port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connection is Successful"))
  .catch((error) => {
    console.log("Issue in DB Connection");
    console.error(error.message);
    process.exit(1);
  });

// const __dirname = path.resolve();


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
app.use('/api/tour', tourRouter);
app.use('/api/booking', bookingRouter);


// app.use(express.static(path.join(__dirname, '/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// })

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

