var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

describe('GET /lessons', function() {

  it('Should return a HTTP status code of 200', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('Should return an object containing an array of objects', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body).to.be.an('object');
        expect(res.body.lessons).to.be.an('array');
        expect(res.body.lessons[0]).to.be.an('object');
        done();
      });
  });

  it('An inner object should contain a "title" property', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body.lessons[0]).to.have.property('title');
        done();
      });
  });

  it('An inner object should contain a "content" property', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body.lessons[0]).to.have.property('content');
        done();
      });
  });

  it('An inner object should contain a "difficulty" property', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body.lessons[0]).to.have.property('difficulty');
        done();
      });
  });

  it('An inner object should contain an "expectedResult" property', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body.lessons[0]).to.have.property('expectedResult');
        done();
      });
  });

});

describe('/GET users', function() {

  it('Should return a HTTP status code of 200', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('Should return an object containing an array of objects', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body).to.be.an('object');
        expect(res.body.users).to.be.an('array');
        expect(res.body.users[0]).to.be.an('object');
        done();
      });
  });

  it('An inner object should contain an "email" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body.users[0]).to.have.property('email');
        done();
      });
  });

  it('An inner object should contain a "password" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body.users[0]).to.have.property('password');
        done();
      });
  });

  it('An inner object should contain a "lessonsSubbed" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body.users[0]).to.have.property('lessonsSubbed');
        done();
      });
  });

  it('An inner object should contain a "lessonsCreated" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body.users[0]).to.have.property('lessonsCreated');
        done();
      });
  });

  it('An inner object should contain a "lessonsCompleted" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.body.users[0]).to.have.property('lessonsCompleted');
        done();
      });
  });

});
