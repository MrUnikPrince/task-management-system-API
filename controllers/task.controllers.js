const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;
    const task = new Task({ title, description, status, priority, dueDate, userId: req.user._id });
    await task.save();
    res.status(201).send({ message: 'Task created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error creating task' });
  }
};

exports.getTasks = async (req, res) => {
    try {
      const { status, priority, dueDate, search } = req.query;
      const query = { userId: req.user._id }; // Add userId filter here
  
      if (status) {
        query.status = status;
      }
  
      if (priority) {
        query.priority = priority;
      }
  
      if (dueDate) {
        query.dueDate = { $lte: new Date(dueDate) };
      }
  
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ];
      }
  
      const tasks = await Task.find(query);
      res.send(tasks);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching tasks' });
    }
  };

  exports.updateTask = async (req, res) => {
    try {
      const taskId = req.params.id;
      const task = await Task.findOne({ _id: taskId, userId: req.user._id });
      if (!task) {
        return res.status(404).send({ message: 'Task not found' });
      }
      Object.assign(task, req.body);
      await task.save();
      res.send(task);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error updating task' });
    }
  };

  exports.deleteTask = async (req, res) => {
    try {
      const taskId = req.params.id;
      await Task.findOneAndRemove({ _id: taskId, userId: req.user._id });
      res.send({ message: 'Task deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error deleting task' });
    }
  };