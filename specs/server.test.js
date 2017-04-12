const request = require('supertest');
const createTables = require('../src/db/tablesConfig.js')
const server = require('../src/server/index.js');  


// afterAll(() => {
//   process.exit();
// })

describe('database tests', () => {
  let db = require('../src/db/index.js').db;
  let tables = ['activities', 'images', 'trails', 'lodging', 'campgrounds','parks'];

  let clearTables = (database) => {
    return database.task(t => {
      return t.batch([
        //drop all tables
        t.none('drop table if exists activities'),
        t.none('drop table if exists images'),
        t.none('drop table if exists trails'),
        t.none('drop table if exists lodging'),
        t.none('drop table if exists campground'),
        t.none('drop table if exists parks cascade')
      ]);
    })
    .then(() => {
      return createTables(database).then(() => {
      console.log('success');  
      })
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  beforeEach(() => {
    return clearTables(db).then(() => {
      console.log('this');
    })
  }) 

  describe('table schema should follow required data types', () => {
    //test that the tables are of correct functionality
    test('should contain parks table', () => {
      console.log('is this running')
      return db.query('SELECT * from parks')
      .then((result) => {
        console.log('is this runn')
        expect(result.length).toBe(0);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
    test('should contain images table', () => {
      console.log('test number two');
      return db.query('SELECT * from images')
      .then((result) => {
        console.log('is this running 2')
        expect(result.length).toBe(0);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
    test('should contain activities table', () => {
      return db.query('SELECT * from activities')
      .then((result) => {
        expect(result.length).toBe(0);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
    test('should contain campgrounds table', () => {
      return db.query('SELECT * from campgrounds')
      .then((result) => {
        expect(result.length).toBe(0);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
    test('should contain lodging table', () => {
      return db.query('SELECT * from lodging')
      .then((result) => {
        expect(result.length).toBe(0);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
    test('should contain trails table', () => {
      return db.query('SELECT * from trails')
      .then((result) => {
        expect(result.length).toBe(0);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
  })
})

describe('http request tests', () => {
  // jest expect assertion library https://facebook.github.io/jest/docs/expect.html#content
  describe('basic server test', () => {
    it('responds to /', (done) => {
    console.log('why does this pass');
    request(server)
    .get('/')
    .end((err, res) => {
      if (err) {
        console.log(res);
        throw err
      }
      //need to switch route to res.json to get the test to pass for this test
      console.log(res, 'this is res');
      expect(res.status).toEqual(200)
      expect(res.body).toEqual('hello world!!!')})
      done();
    })
  })
})
