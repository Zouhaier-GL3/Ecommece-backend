const mongoose = require('mongoose');
const dbConnect = require('debug')('app:db')
mongoose.set('useCreateIndex', true)
module.exports = async function connectDB(path){
    try{
        await mongoose.connect(path, {  useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify :false });
        dbConnect('MongoDB is UP.')
    }catch(err) {
        dbConnect('MongoDB is Down. Error :',err.message);
    }
}


