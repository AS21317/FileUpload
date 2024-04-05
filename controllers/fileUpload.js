// sabse phle dekhte hai ki koi model import krne ki neeed hai to import kr lo 
// then write controler logic 
//yha controllers file se interact krenge so we need to import FIle model ;

const File = require("../models/File")

// create local file upload function here  ==> ye server ke kisi path pr media ko store kr deta hai ya rakh deta hai , client ke kisi path se file lekr

exports.localFileUpload= async(req,res)=>
{
   try{
     //  1st task is to fetch file from request body 
     const file = req.files.file;
     console.log("File that is recieved : ",file);
 
     // second kaam server ke  kis path pr file ko store krna hai 
 
     // date.now() ke baad we need to add extension , extension file me name attribute se nikalni hogi jo req me aayi hai 
     let path = __dirname + "/files/" + Date.now()+ `.${file.name.split('.')[1]}`;  //-> `eske ander extention aayegi `
     console.log("path => ",path);
 
     // ab file ko move fxn ki help se upr defined path pr move kr do 
 
     file.mv(path,(err)=>{
             console.log("Error during file moving in temp server storage area -> ",err);
     })
 
     res.json({
         success: true,
         message  :"Local file uploaded successfully ",
     })
   }
   catch(err)
   {
    console.log("Error from localfileupload -> ",err);
   }
}
