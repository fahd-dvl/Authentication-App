const express = require("express")
const router= express.Router();
const usersController = require("../controllers/usersController")
const verifyJWT = require("../middlware/verifyJWT")

router.use(verifyJWT);
router.route("/").get(usersController.getAllUsers)


module.exports=router;