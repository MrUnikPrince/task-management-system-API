const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Task = require('../models/Task');
const userController = require('../controllers/user.controller')(User);
const taskController = require('../controllers/task.controller')(Task);

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;