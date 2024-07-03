
const express = require("express");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app=express()
const cors=require('cors')
const port=process.env.PORT || 4000;

const dotenv = require('dotenv');
dotenv.config();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

  
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const jwt=require('jsonwebtoken')
const router=require('./routes')
app.use(router)

mongoose
  .connect(
    process.env.MONGO_DB_URI
  )
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((error) => {
    console.log("Falied to connect Mongo ", error);
  });

app.listen(port, () => {
  console.log("Server Running");
});
