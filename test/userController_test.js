var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

//==========================//
//          INDEX           //
//==========================//

describe('GET /users', function() {

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

//==========================//
//           SHOW           //
//==========================//

describe('GET /users/:id', function() {

  it('Should return a HTTP status code of 200', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            // console log at this point shows res.body is ONLY /users/:id
            // therefore all testing in this block must be for :id only
            expect(res.status).to.equal(200);
            done();
          });
      });
  });

  it('Should contain an "email" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.body.user).to.have.property('email');
            done();
          });
      });
  });

  it('Should contain a "password" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.body.user).to.have.property('password');
            done();
          });
      });
  });

  it('Should contain a "lessonsSubbed" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.body.user).to.have.property('lessonsSubbed');
            done();
          });
      });
  });

  it('Should contain a "lessonsCreated" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.body.user).to.have.property('lessonsCreated');
            done();
          });
      });
  });

  it('Should contain a "lessonsCompleted" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.body.user).to.have.property('lessonsCompleted');
            done();
          });
      });
  });

});

//==========================//
//          CREATE          //
//==========================//

describe('POST /users', function() {

  it('Should return a HTTP status code of 201', function(done) {
    api
    .post('/users')
    .set('Accept', 'application/json')
    .send({
      'email': 'test@test.com',
      'password': 'testing',
      'lessonsSubbed': [],
      'lessonsCreated': [],
      'lessonsCompleted': []
    }).end(function(err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.user).to.have.property('email');
      expect(res.body.user).to.have.property('password');
      expect(res.body.user).to.have.property('lessonsSubbed');
      expect(res.body.user).to.have.property('lessonsCreated');
      expect(res.body.user).to.have.property('lessonsCompleted');
      done();
    });
  });

});

//==========================//
//          UPDATE          //
//==========================//

describe('PUT /users/:id', function() {

  it('Should update an existing lesson', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .put('/users/' + id)
          .set('Accept', 'application/json')
          .send({
            'email': 'updated@test.com',
            'password': 'updated',
            'lessonsSubbed': [],
            'lessonsCreated': [],
            'lessonsCompleted': []
          }).end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.user.email).to.equal('updated@test.com');
            expect(res.body.user.password).to.equal('updated');
            done();
          });
      });
  });

  it('Should update an existing lesson partially', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .put('/users/' + id)
          .set('Accept', 'application/json')
          .send({
            'email': 'updatedAGAIN@test.com',
          }).end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.user.email).to.equal('updatedAGAIN@test.com');
            done();
          });
      });
  });

  it('Should error when wrong ID sent in URL', function(done) {
    api
      .put('/users/randomnonvalidID')
      .set('Accept', 'application/json')
      .send({
        'email': 'random@fail.com'
      }).end(function(err, res) {
        expect(res.status).to.equal(500);
        done();
      });
  });

});

//==========================//
//          DELETE          //
//==========================//

describe('DELETE /users/:id', function() {

  it('Should delete a lesson', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .delete('/users/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.message).to.equal('User removed successfully.');
            done();
          });
      });
  });
});
