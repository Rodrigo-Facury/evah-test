const express = require('express');
const cors = require('cors');
const userRoutes = require('./api/routes/userRoutes');
const errorHandler = require('./api/middlewares/errorHandler');

const app = express();

// const whitelist = process.env.WHITELIST ? JSON.parse(process.env.WHITELIST) : ['http://localhost:5173'];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.use(express.json());

// app.use(cors(corsOptions));

app.use('/user', userRoutes);

app.use(errorHandler);

module.exports = app;
