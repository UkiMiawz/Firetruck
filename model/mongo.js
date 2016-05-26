var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/fungiApi');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var dataSchema  = {
    "key" : String,
    "value" : Number,
    "timestamp" : { type : Date, default: Date.now }
};
// create model if not exists.
module.exports = mongoose.model('statistic',dataSchema);