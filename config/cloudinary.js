const cloudinary = require('cloudinary').v2;  //import cloudinary


exports.cloudinaryConnect = ()=>
{
    try{

        // define cloud name , api key ans api secret 
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        })
    }catch(error)
    {console.log("error during clodinary config method: ",error);   

    }
}
