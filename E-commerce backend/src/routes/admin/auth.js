const express = require("express");
const { signup, signin, requiresignin } = require("../../controller/admin/auth");
const router = express.Router(); 

router.post("/admin/signup", signup);
router.post("/admin/signin", signin);

module.exports = router;