const express = require('express');

const app = express();
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/public'));
app.listen(8080);
