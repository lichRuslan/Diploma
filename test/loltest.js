//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let User = require('../models/User');

//Подключаем dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let ser = require('../config/keys');

let local = 'localhost:5000';

chai.use(chaiHttp);
//Наш основной блок
describe('register ALL', () => {
      describe('/POST register user', () => {
        it('GET', (done) => {
            chai.request(server)
                // .get('localhost:5000/api/auth/register')
                .post(local+'/api/auth/login')
                .send({
                    email:'lol@lol.test1',
                    password:'12345'
                })
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
      });

});
// before(function(done) {
//     request.post('/api/auth/login')
// .send({
//         email: 'test@user.com',
//     password: 'password'
// })
// .end(function(err, res) {
//         if (err) throw err;
//         done();
//     });
// });