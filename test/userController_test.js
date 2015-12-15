var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000');
var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInBhc3N3b3JkIjoiJDJhJDEyJHk2UmFja0hnOWp5VVBFS0ZqY0I3Z082M1NoWTVETTJkUmRzS0x6czhUcHE5QjBOT3JhNUhXIiwiZW1haWwiOiJyb2JAcm9iLmNvbSIsIl9pZCI6IjU2NzAwMDJhN2YzZWNmMTE5ODI5ODhlNCJ9.e0UpUBf-OGODF8CvarwGDsjvJXZp7-Pl0d2wCFen-MA';


//==========================//
//          INDEX           //
//==========================//

describe('GET /users', function() {

  it('Should return a HTTP status code of 200', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .expect(200, done);
  });

  it('Should return an object containing an array of objects', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        expect(res.body).to.be.an('object');
        expect(res.body.users).to.be.an('array');
        expect(res.body.users[0].local).to.be.an('object');
        done();
      });
  });

  it('An inner object should contain an "email" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        expect(res.body.users[0].local).to.have.property('email');
        done();
      });
  });

  it('An inner object should contain a "password" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        expect(res.body.users[0].local).to.have.property('password');
        done();
      });
  });

  it('An inner object should contain a "lessonsSubbed" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        expect(res.body.users[0]).to.have.property('lessonsSubbed');
        done();
      });
  });

  it('An inner object should contain a "lessonsCreated" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        expect(res.body.users[0]).to.have.property('lessonsCreated');
        done();
      });
  });

  it('An inner object should contain a "lessonsCompleted" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
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
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
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
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .end(function(err, res) {
            expect(res.body.user.local).to.have.property('email');
            done();
          });
      });
  });

  it('Should contain a "password" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .end(function(err, res) {
            expect(res.body.user.local).to.have.property('password');
            done();
          });
      });
  });

  it('Should contain a "lessonsSubbed" property', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
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
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
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
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .get('/users/' + id)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .end(function(err, res) {
            expect(res.body.user).to.have.property('lessonsCompleted');
            done();
          });
      });
  });

});

//==========================//
//          UPDATE          //
//==========================//

describe('PUT /users/:id', function() {

  it('Should update an existing user', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .put('/users/' + id)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .send({
            'local': {
              'email': 'updated@test.com',
              'password': 'updated'
            },
            'lessonsSubbed': [],
            'lessonsCreated': [],
            'lessonsCompleted': []
          }).end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.user.local.email).to.equal('updated@test.com');
            expect(res.body.user.local.password).to.equal('updated');
            done();
          });
      });
  });

  it('Should update an existing user partially', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .put('/users/' + id)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .send({
            'local': {
              'email': 'updatedAGAIN@test.com'
            }
          }).end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.user.local.email).to.equal('updatedAGAIN@test.com');
            done();
          });
      });
  });

  it('Should error when wrong ID sent in URL', function(done) {
    api
      .put('/users/randomnonvalidID')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
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

  it('Should delete a user', function(done) {
    api
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end(function(err, res) {
        var id = res.body.users[0]._id;
        api
          .delete('/users/' + id)
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.message).to.equal('User removed successfully.');
            done();
          });
      });
  });
});
