var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongoOp     =   require("./model/mongo");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "For a moment, nothing happened. Then, after a second or so, nothing continued to happen."});
});

router.route("/data")
    .get(function(req, res){
        var response = {};
        mongoOp.find({}, function (err, data) {
            if(err) {
                response = {"error" : true, "message" : "I refuse to answer that question on the grounds that I don't know the answer"}
            } else {
                response = {"error" : false, "message" : data}
            }
            res.json(response);
        })
    })
    .post(function(req,res){
        var db = new mongoOp();
        var response = {};
        // fetch data from req body
        db.key = req.body.key;
        db.value =  req.body.value;
        db.save(function(err){
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");