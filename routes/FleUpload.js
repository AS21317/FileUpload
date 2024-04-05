
const express = require('express');
const router = express.Router();

// * AB controller me se sare handler function leke aao and usako yha pr suitable route se map kr do 

const {localFileUpload} = require("../controllers/fileUpload");

// Define all the api route now 
router.post('/localFileUpload',localFileUpload)

module.exports = router; 