const mongoose  = require('mongoose');
const fileschema = new mongoose.Schema({
    name:{
          type:String,
          require:true,
    },
    email:{
type:String
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String
    }
});

const File = mongoose.model("File",fileschema);
module.exports = File;