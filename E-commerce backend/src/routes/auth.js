const express = require("express");
const { signup, signin, requiresignin } = require("../controller/auth");
const router = express.Router(); 

router.post("/signup", signup);
router.post("/signin", signin);
  
// router.post("/profile", requiresignin, (req, res)=>{
//     res.status(200).json({message: "profile"})
// })

module.exports = router;