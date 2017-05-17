var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
});
var tmplUplaodFields = upload.fields([{
    name: "file"
}]);

module.exports = {
    hello(tmpl) {
        tmpl.get("/hello", (req, res) => {
            res.send("hello");
        });
    },
    upload(tmpl) {
        tmpl.post("/upload", tmplUplaodFields, (req, res) => {
            res.send(req.body.name);
        });
    }
}
