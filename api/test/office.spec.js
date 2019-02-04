var expect = require("chai").expect;
var request = require("supertest");
require("dotenv").config();
const app = require('../server');

const port = process.env.SERVER_PORT;

describe("Office API", () => {
    var url = "http://localhost:" + port + "/";

    describe("GET /offices", () => {

        it("returns status 200", (done) => {
            request(app).get(url + 'offices').end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('array');
            });
            done();
        });

    });

    describe("POST /office", () => {

        it("returns status 200", (done) => {
            request(app).post(url + 'office')
                .set('Content-Type', 'application/json')
                .send('{"id": "SZCZ", "name": "Szczecin"}')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
            done();
        });

    });

    describe("GET /office/:id", () => {

        it("returns status 200", (done) => {
            var id = "";

            request(app).get(url + 'offices').end((err, res) => {
                id = res.body.result[0]._id;
            });

            request(app).get(url + 'office/' + id)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
            done();
        });

        it("returns status 500", (done) => {
            request(app).get(url + 'office/abcde')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(500);
                });
            done();
        });

    });

    describe("DELETE /office/:id", () => {

        it("returns status 200", (done) => {
            var id = "";

            request(app).get(url + 'offices').end((err, res) => {
                id = res.body.result[0]._id;
            });

            request(app).delete(url + 'office/' + id)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
            done();
        });

        it("returns status 500", (done) => {
            request(app).delete(url + 'office/abcde')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(500);
                });
            done();
        });

    });

    describe("PUT /office/:id", () => {

        it("returns status 200", (done) => {
            var id = "";

            request(app).get(url + 'offices').end((err, res) => {
                id = res.body.result[0]._id;
            });

            request(app).put(url + 'office/' + id)
                .set('Content-Type', 'application/json')
                .send('{"id": "SZC"}')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                });
            done();
        });

        it("returns status 500", (done) => {
            request(app).put(url + 'office/abcde')
                .set('Content-Type', 'application/json')
                .send('{"id": "SZC"}')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(500);
                });
            done();
        });

    });
});
