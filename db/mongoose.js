const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const url = "mongodb://localhost:27017/chat";
const connect = mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology: true
},(err, db) => {
    if(err){
        return console.log('Database not Connected');
    }
    console.log('Connected to Database');
});
module.exports = connect;
