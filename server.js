const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Task = require('./api/models/stockModel');
// created model loading here
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/alankarVegetables');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = require('./api/routes/stockRoute');
// importing route
routes(app); // register the route

app.listen(port);


console.log(`todo list RESTful API server started on: ${port}`);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});
