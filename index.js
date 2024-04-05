//create app
const express = require("express")
const app = express();

//port find out krna hai 
require("dotenv").config();
const PORT = process.env.PORT || 3080;

//middleware add krna hai 
app.use(express.json())
const fileupload = require("express-fileupload");
app.use(fileupload());

//connect DB
const db = require('./config/database'); 
db.connect()
 
//connect Cloudinary
const Cloudinary  = require('./config/cloudinary')
Cloudinary.cloudinaryConnect(); 

//api route mount  krna hai
const upload = require('./routes/FleUpload')
app.use('/api/v1/upload',upload); 
 

// activate  krna hai 
console.log(PORT);
app.listen(PORT , ()=>{
    console.log(`App is running at ${PORT}`);
})






 