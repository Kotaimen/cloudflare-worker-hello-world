const request = require('supertest')

describe('GET /', function() {
  it('return hello world', function() {
    return request('http://localhost:8787')
      .get('/')
      .expect(200)
      .expect('Content-Type', 'application/json')
      .expect('{"message":"Hello, worker!"}')
  })
})
