const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('content');
  res.end();
});

const app = express();

connectDB();

app.use(bodyParser.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/classroom', require('./routes/classroom'));
app.use('/api/timetable', require('./routes/timetable'));

const PORT =  3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
