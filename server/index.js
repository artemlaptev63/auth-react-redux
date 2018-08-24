const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(
  'mongodb://localhost:27017/auth',
  { useNewUrlParser: true }
);

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port, () => {
  console.log('server listening on: ', port);
});
