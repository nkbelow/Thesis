const request = require('supertest');
const server = require('../src/server/index.js');  
describe('server tests', () => {
  
  describe('http request tests', () => {
    // jest expect assertion library https://facebook.github.io/jest/docs/expect.html#content
    describe('api/parks test', () => {
      it('responds to /', (done) => {
      request(server)
      .get('/api/parks')
      .end((err, res) => {
        if (err) {
          console.log(err);
          throw err
        }
        //need to switch route to res.json to get the test to pass for this test
        expect(res.status).toEqual(500)
        expect(res.body).toEqual({})
      })
        done();
      })
    })

    describe('/api/campgrounds tests', () => {
      
      test('responds with campgrounds', (done) => {
        request(server)
        .get('/api/campgrounds')
        .query({parkId: 1})
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw err
          }
          expect(res.status).toEqual(203)
          expect(res.body.length).toEqual(2)
        })
        done();
      })
    })

    describe('/api/trails', () => {

      test('responds with trails', (done) => {
        request(server)
        .get('/api/trails')
        .query({parkId: 1})
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw err
          }
          expect(res.status).toEqual(200)
          expect(res.headers['content-type']).toEqual("application/json; charset=utf-8")
          expect(res.body.length).toEqual(10);
        })
        done();
      })
    })

    describe('/api/park tests', () => {
      test('responds with individual park data', (done) => {
        request(server)
        .get('/api/park/')
        .query({parkcode: 'acad'})
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw err
          }
          expect(res.status).toEqual(200)
          expect(res.headers['content-length']).toEqual('880')
          expect(res.body[1][0].name).toEqual('Acadia National Park')
          expect(res.body[1][0].name).toBeDefined()
          expect(res.redirect).toEqual(false);
        })
        done()
      })
    })

    describe('/api/shoppingcart', () => {
      test('responds with session data', (done) => {
        request(server)
        .get('/api/shoppingcart')
        .end((err, res) => {
          if (err) {
            console.log(err) 
            throw err
          }
          expect(res.status).toEqual(200)
          expect(res.redirect).toEqual(false)
          expect(res.body).toBeInstanceOf(Object)
        })
        done()
      })
    })

    describe('* tests', () => {
      test('responds with individual park data', (done) => {
        request(server)
        .get('/wildcard')
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw err
          }
          expect(res.redirect).toEqual(true)
        })
        done()
      })
    })

  })
  
})