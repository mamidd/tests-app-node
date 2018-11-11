const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;

describe('Server', () => {

  describe('GET /', () => {
    it('Should return hello world response', (done) => {
      request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!')
      .end(done);
    });
  });

  describe('GET /json ROUTES', () => {
    it('Should return Page not found response', (done) => {
      request(app)
      .get('/json')
      .expect(404)
      .expect({
        error: 'Page not found!'
      })
      .end(done);
    })

    it('Should return Page not found and the name as response', (done) => {
      request(app)
      .get('/jsonName')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          error: 'Page not found!',
          name: 'Todo App v1.0'
        })
      })
      .end(done);
    });
  });

  describe('GET /users', () => {
    it('Should return Mario user as response', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({name: 'Mario', age: 28})
      })
      .end(done);
    });
  });
});
