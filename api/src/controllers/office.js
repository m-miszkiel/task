const mongo = require('../connection/mongo_utils');
const ObjectID = require('mongodb').ObjectID;

mongo.connectDB(async (err) => {
    if (err) throw err;
});

function add(req, res) {
    return mongo.getDB().collection('office').insertOne(req.body, (err, result) => {
        if (err) throw err;
        res.status(200).send({"status": "OK"});
    });
}

function list(req, res) {
}

function get(req, res) {
    return mongo.getDB().collection('office').findOne({"_id": ObjectID(req.params.id)}, (err, result) => {
        if (err) throw err;
        res.status(200).send({result});
    });
}

function update(req, res) {
    return mongo.getDB().collection('office').updateOne({"_id": ObjectID(req.params.id)}, {$set: req.body}, (err, result) => {
        if (err) throw err;
        res.status(200).send({"status": "OK"});
    });
}

function remove(req, res) {
    return mongo.getDB().collection('office').deleteOne({"_id": ObjectID(req.params.id)}, (err, result) => {
        if (err) throw err;
        res.status(200).send({"status": "OK"});
    });
}

module.exports = {add, list, get, update, remove};