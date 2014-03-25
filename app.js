var express = require('express');
var app = express();

app.get('/', require('./routes/routes'));

app.listen(8080);
console.log('Server is up.');
