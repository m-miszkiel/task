const mongo = require('../connection/mongo_utils');
const ObjectID = require('mongodb').ObjectID;

mongo.connectDB(async (err) => {
    if (err) throw err;
});

function add(req, res) {
}

function list(req, res) {
}

function get(req, res) {
}

function update(req, res) {
}

function remove(req, res) {
}

module.exports = {add, list, get, update, remove};