const MongoClient = require('mongodb').MongoClient;
require("dotenv").config();

const uri = process.env.MONGO_DB_URI;
let _db;

const connectDB = async (callback) => {
    try {
        MongoClient.connect(uri, {useNewUrlParser: true}, (err, db) => {
            _db = db.db('office');
            return callback(err);
        })
    } catch (e) {
        throw e;
    }
};

const getDB = () => _db;

module.exports = {connectDB, getDB};
