const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const taskController = require("../controllers/taskController");
const authVerify = require("../middlewares/authVerifyMiddleware");

//user
router.post("/registration" , userController.registration);
router.post("/login" , userController.login);
router.post("/profileUpdate",authVerify,userController.profileUpdate);

//task
router.post("/createTask",authVerify,taskController.createTask);
router.get("/deleteTask/:id",authVerify,taskController.deleteTask);
router.get("/updateTask/:id/:status",authVerify,taskController.updateTask);
router.get("/listByTaskStatus/:status",authVerify,taskController.listByTaskStatus);
router.get("/taskStatusCount",authVerify,taskController.taskStatusCount);



module.exports = router;