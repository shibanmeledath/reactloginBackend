require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB=require('./config/db')
const authRoutes = require('./routes/auth');
connectDB();
const app = express()

//Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
const PORT=process.env.PORT||5000;

app.listen(PORT,()=>console.log('Server running on port '+PORT))