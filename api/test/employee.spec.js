var expect = require("chai").expect;
var request = require("supertest");
require("dotenv").config();
const app = require('../server');

const port = process.env.SERVER_PORT;
describe("Employee API", () => {
    var url = "http://localhost:" + port + "/";

    describe("GET /employees", () => {

        it("returns status 200", (done) => {
            request(app).get(url + 'employees').end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('array');
            });
            done();
        });

    });

    describe("POST /employee", () => {

        it("returns status 200", (done) => {
            request(app).post(url + 'employee')
                .set('Content-Type', 'application/json')
                .send('{"name": "Jane", "salary": 2000, "officeId": "23123123123"}')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
            done();
        });

    });

    describe("GET /employee/:id", () => {

        it("returns status 200", (done) => {
            var id = "";

            request(app).get(url + 'employees').end((err, res) => {
                id = res.body.result[0]._id;
            });

            request(app).get(url + 'employee/' + id)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
            done();
        });

        it("returns status 500", (done) => {
            request(app).get(url + 'employee/abcde')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(500);
                });
            done();
        });

    });

    describe("DELETE /employee/:id", () => {

        it("returns status 200", (done) => {
            var id = "";

            request(app).get(url + 'employees').end((err, res) => {
                id = res.body.result[0]._id;
            });

            request(app).delete(url + 'employee/' + id)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
            done();
        });

        it("returns status 500", (done) => {
            request(app).delete(url + 'employee/abcde')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(500);
                });
            done();
        });

    });

    describe("PUT /employee/:id", () => {

        it("returns status 200", (done) => {
            var id = "";

            request(app).get(url + 'employee').end((err, res) => {
                id = res.body.result[0]._id;
            });

            request(app).put(url + 'employee/' + id)
                .set('Content-Type', 'application/json')
                .send('{"name": "Jane", "salary": 2000, "officeId": "23123123123"}')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
            done();
        });

        it("returns status 500", (done) => {
            request(app).put(url + 'employee/abcde')
                .set('Content-Type', 'application/json')
                .send('{"name": "Jane", "salary": 2000, "officeId": "23123123123"}')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(500);
                });
            done();
        });

    });

    describe("GET /employees/:id", () => {

        it("returns status 200", (done) => {
            var id = "";

            request(app).get(url + 'offices').end((err, res) => {
                id = res.body.result[0]._id;
            });

            request(app).get(url + 'employees/' + id)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
            done();
        });

        it("returns status 500", (done) => {
            request(app).get(url + 'employees/abcde')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(500);
                });
            done();
        });

    });
});
