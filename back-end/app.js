const express = require('express');
const cors = require('cors');
const userRoutes = require('./api/routes/userRoutes')

const app = express();

app.use(cors());

app.use('/user', userRoutes);
