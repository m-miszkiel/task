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

    mongo.getDB().collection('office').find({}).toArray((err, result) => {
        if (err) throw err;
        let response = [];
        result.forEach((obj, index) => {
            let users = 0, avgSalary = 0;

            mongo.getDB().collection('employee').find({officeId: obj._id.toString()}).toArray((err, resp) => {
                if (err) throw err;

                users = resp.length;

                let sum = 0;

                resp.forEach((o) => {
                    sum += o.salary
                });

                avgSalary = sum / resp.length;

                response.push({
                    office: obj,
                    users: users,
                    avgSalary: avgSalary
                });

                if (result.length - 1 === index) {
                    res.status(200).send({response});
                }

            });

        });
    });

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