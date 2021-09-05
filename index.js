var express = require('express'); 
var app = express();
var fs = require('fs'); 


app.get('/', function (req, res) {
    fs.readFile(__dirname + "/data.json", 'utf8', function (err, data) {

        res.end(data); 
    });
})

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
    console.warn(`App listening on http://localhost:${PORT}`);
})
