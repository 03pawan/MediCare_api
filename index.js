var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object

// Endpoint to Get a list of users
app.get('/data', function (req, res) {
    fs.readFile(__dirname + "/data.json", 'utf8', function (err, data) {

        res.end(data); // you can also use res.send()
    });
})

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
    console.warn(`App listening on http://localhost:${PORT}`);
})
