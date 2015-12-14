var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

describe('GET /lessons', function() {
  it('should return a HTTP status code of 200', function(done) {
    api
      .get('/lessons')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});
