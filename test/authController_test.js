// var expect = require('chai').expect;
// var supertest = require('supertest');
// var api = supertest('http://localhost:3000');
//
// //==========================//
// //          REGISTER        //
// //==========================//
//
// describe('POST /register', function() {
//
//   it('Should register a user successfully', function(done) {
//     api
//       .get('/register')
//       .set('Accept', 'application/json')
//       .send({
//           "email": "chai@testing.com",
//           "password": "password"
//       }).end(function(err, res) {
//         expect(res.status).to.equal(200);
//         expect(res.success).to.equal(true);
//         expect(res.user.local.email).to.equal('chai@testing.com');
//         expect(res.user.local.password).to.not.equal('chai@testing.com');
//       });
//   });
//
//   it('Should not register a used email', function(done) {
//     api
//       .get('/register')
//       .set('Accept', 'application/json')
//       .send({
//         'email': 'chai@testing.com',
//         'password': 'password'
//       }).end(function(err, res) {
//         expect(res.status).to.not.equal(200);
//         expect(res.message).to.equal('Email address already registered.');
//       });
//   });
//
//   it('Should not register with missing email', function(done) {
//     api
//       .get('/register')
//       .set('Accept', 'application/json')
//       .send({
//         'password': 'password'
//       }).end(function(err, res) {
//         expect(res.status).to.not.equal(200);
//         expect(res.message).to.equal('Missing credentials');
//       });
//   });
//
//   it('Should not register with missing password', function(done) {
//     api
//       .get('/register')
//       .set('Accept', 'application/json')
//       .send({
//         'email': 'testemail@nopass.com'
//       }).end(function(err, res) {
//         expect(res.status).to.not.equal(200);
//         expect(res.message).to.equal('Missing credentials');
//       });
//   });
// });
//
// //==========================//
// //           LOGIN          //
// //==========================//
//
// describe('POST /login', function() {
//
//   it('Should login an existing user successfully', function(done) {
//     api
//       .get('/login')
//       .set('Accept', 'application/json')
//       .send({
//         'email': 'chai@testing.com',
//         'password': 'password'
//       }).end(function(err, res) {
//         expect(res.status).to.equal(200);
//         expect(res.success).to.equal(true);
//         expect(res.user.local.email).to.equal('chai@testing.com');
//       });
//   });
// });
