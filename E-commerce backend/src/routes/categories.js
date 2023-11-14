const express = require("express"); 
const { addCategory, getCategory } = require("../controller/category");
const { requiresignin, adminmiddleware } = require("../common-middleware");
const router = express.Router(); 

router.post("/category/create", requiresignin, adminmiddleware, addCategory);
router.get("/category/getcategory", getCategory);  


module.exports = router;