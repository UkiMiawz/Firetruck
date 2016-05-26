var mongoose    =   require("mongoose");
var dataSchema  = {
    "key" : String,
    "value" : Number,
    "timestamp" : { type : Date, default: Date.now }
};
// create model if not exists.
mongoose.model('statistic',dataSchema);