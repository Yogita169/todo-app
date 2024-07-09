const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

const app = express();
require('dotenv').config()
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI, {
  dbName:'todos'
});

app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todoRoutes);
app.use('/users', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
