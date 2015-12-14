var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

//==========================//
//          INDEX           //
//==========================//

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

//==========================//
//           SHOW           //
//==========================//

describe('GET /lessons/:id', function() {

  it('Should return a HTTP status code of 200', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.lessons[0]._id;
        api
          .get('/lessons/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            // console log at this point shows res.body is ONLY /lessons/:id
            // therefore all testing in this block must be for :id only
            expect(res.status).to.equal(200);
            done();
          });
      });
  });

  it('Should contain a "title" property', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.lessons[0]._id;
        api
          .get('/lessons/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.body.lesson).to.have.property('title');
            done();
          });
      });
  });

  it('Should contain a "content" property', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.lessons[0]._id;
        api
          .get('/lessons/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.body.lesson).to.have.property('content');
            done();
          });
      });
  });

  it('Should contain a "difficulty" property', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.lessons[0]._id;
        api
          .get('/lessons/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.body.lesson).to.have.property('difficulty');
            done();
          });
      });
  });

  it('Should contain a "expectedResult" property', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.lessons[0]._id;
        api
          .get('/lessons/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.body.lesson).to.have.property('expectedResult');
            done();
          });
      });
  });

});

//==========================//
//          CREATE          //
//==========================//

describe('POST /lessons', function() {

  it('Should return a HTTP status code of 201', function(done) {
    api
    .post('/lessons')
    .set('Accept', 'application/json')
    .send({
      'title': 'testLesson',
      'content': 'Testing lesson creation with chai',
      'difficulty': 1,
      'expectedResult': 'test'
    }).end(function(err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.lesson).to.have.property('title');
      expect(res.body.lesson).to.have.property('content');
      expect(res.body.lesson).to.have.property('difficulty');
      expect(res.body.lesson).to.have.property('expectedResult');
      done();
    });
  });

});

//==========================//
//          UPDATE          //
//==========================//

describe('PUT /lessons/:id', function() {

  it('Should update an existing lesson', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.lessons[0]._id;
        api
          .put('/lessons/' + id)
          .set('Accept', 'application/json')
          .send({
            'title': 'Updated title',
            'content': 'Updated content',
            'difficulty': 2,
            'expectedResult': 'updated'
          }).end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.lesson.title).to.equal('Updated title');
            expect(res.body.lesson.content).to.equal('Updated content');
            expect(res.body.lesson.difficulty).to.equal(2);
            expect(res.body.lesson.expectedResult).to.equal('updated');
            done();
          });
      });
  });

  it('Should update an existing lesson partially', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.lessons[0]._id;
        api
          .put('/lessons/' + id)
          .set('Accept', 'application/json')
          .send({
            'expectedResult': 'updated again'
          }).end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.lesson.title).to.equal('Updated title');
            expect(res.body.lesson.content).to.equal('Updated content');
            expect(res.body.lesson.difficulty).to.equal(2);
            expect(res.body.lesson.expectedResult).to.equal('updated again');
            done();
          });
      });
  });

  it('Should error when wrong ID sent in URL', function(done) {
    api
      .put('/lessons/randomnonvalidID')
      .set('Accept', 'application/json')
      .send({
        'expectedResult': 'updated again'
      }).end(function(err, res) {
        expect(res.status).to.equal(500);
        done();
      });
  });

});

//==========================//
//          DELETE          //
//==========================//

describe('DELETE /lessons/:id', function() {

  it('Should delete a lesson', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        var id = res.body.lessons[0]._id;
        api
          .delete('/lessons/' + id)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            expect(res.status).to.equal(200);
            expect(res.body.message).to.equal('Lesson removed successfully.');
            done();
          });
      });
  });
});
