// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/file_upload', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });
const mongoose = require("mongoose");

// const db_l = process.env.MONGO_URI_S_2;

mongoose.Vidula = mongoose.createConnection("mongodb+srv://savisha:saregamapa@cluster0.irrpb.mongodb.net/file_upload?retryWrites=true&w=majority", console.log("MongoDB is connected : Vidula's Cluster"));

module.exports = mongoose;
