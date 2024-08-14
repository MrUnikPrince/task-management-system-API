const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./config/mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database 
// const url = "mongodb+srv://UniquePrince:32323212@cluster0.sezsu7p.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// mongoose.connect('mongodb://mongo:27017/task-management-system', { useNewUrlParser: true, useUnifiedTopology: true });

const User = require('./models/User');
const Task = require('./models/Task');

// app.use('/api', require('./routes/api.route'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});