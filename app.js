var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var routes = require('./routes/routes.js');

// this is an empty route
// literally how URLs are defined
app.get('/', routes.homepage);
app.post('/incoming', routes.incoming);

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});


