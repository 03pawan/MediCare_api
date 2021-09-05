var express = require('express'); 
var app = express();
var fs = require('fs'); 
var cors = require('cors');

app.use(cors());
app.get('/', function (req, res) {
    fs.readFile(__dirname + "/data.json", 'utf8', function (err, data) {

        res.end(data); 
    });
})

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
    console.warn(`App listening on http://localhost:${PORT}`);
})
