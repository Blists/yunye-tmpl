var express = require('express');
var app = express();

var tmpl = express();
var tmplCtrl = require("./controller/tmplCtrl");

// tmpl.get('/hello', function (req, res) {
//     res.send('Hello World!');
// });

tmplCtrl.hello(tmpl);
tmplCtrl.upload(tmpl);

app.use("/api/tmpl", tmpl);

app.use(express.static(__dirname + './../dist'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
