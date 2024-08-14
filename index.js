const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./config/mongoose')
const auth = require('./middleware/auth');

app.use(auth.authenticate);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = require('./models/User');
const Task = require('./models/Task');

// app.use('/api', require('./routes/api.route'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});