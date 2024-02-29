const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const taskController = require("../controllers/taskController");
const authVerify = require("../middlewares/authVerifyMiddleware");

router.post("/registration" , userController.registration);
router.post("/login" , userController.login);
router.post("/profileUpdate",authVerify,userController.profileUpdate);


module.exports = router;