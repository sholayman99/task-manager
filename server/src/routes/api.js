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
router.post("/deleteTask/:id",authVerify,taskController.deleteTask);
router.post("/updateTask/:id/:status",authVerify,taskController.updateTask);
router.get("/listByTaskName/:status",authVerify,taskController.listByTaskName);
router.get("/taskStatusCount",authVerify,taskController.taskStatusCount);



module.exports = router;