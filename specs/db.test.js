let db = require('../src/db/index.js').db; 

describe('database tests', () => {
  

  describe('database should include correct tables with correct lengths', () => {
    //test that the tables are of correct functionality
    test('should contain parks table', () => {
      console.log('is this running')
      return db.query('SELECT * from parks')
      .then((result) => {
        console.log('is this runn')
        expect(result.length).toBe(59);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
    test('should contain activities table', () => {
      return db.query('SELECT * from activities')
      .then((result) => {
        expect(result.length).toBe(20);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
    test('should contain campgrounds table', () => {
      return db.query('SELECT * from campgrounds')
      .then((result) => {
        expect(result.length).toBe(176);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
    test('should contain trails table', () => {
      return db.query('SELECT * from trails')
      .then((result) => {
        expect(result.length).toBe(647);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
    test('should contain activities_parks table', () => {
      return db.query('SELECT * from activities_parks')
      .then((result) => {
        expect(result.length).toBe(472);
     })
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
       test('should contain session table', () => {
      return db.query('SELECT * from session')
      .then(result => 
        expect(result.length).toBeGreaterThanOrEqual(0)
        )
      .catch((err) => {
        console.log(err)
        throw err
      })
    });
  })

  describe('parks table tests', () => {

    test('should contain the correct latitude and longitude', () => {
      return db.query('SELECT * from parks where parkcode = \'acad\'')
      .then(result => {
        const longLat = {latitude: 44.30777545, longitude: -68.30063316};
        expect(result[0]).toEqual(expect.objectContaining(longLat));
      })
      .catch(err => {
        console.log(err);
        throw err
      })
    })
  })

  describe('activities table tests', () => {
    
    test('should contain the correct activity name', () => {
      return db.query('SELECT activity FROM activities where id = 10')
      .then(result => expect(result[0].activity).toEqual('BOATING'))
      .catch(err => {
        console.log(err)
        throw err
      })
    })
  })

  describe('activities_parks table tests', () => {
    
    test('should contain all activities from park', () => {
      return db.query('SELECT * FROM activities_parks where park_id = 1')
      .then(result => expect(result.length).toEqual(12))
      .catch(err => {
        console.log(err)
        throw err
      })
    })
  })

  describe('trails table tests', () => {
    
    test('should contain the correct activity name', () => {
      return db.query('SELECT * FROM trails where park_id = 1')
      .then(result => {
        expect(result.length).toEqual(10);
        expect(result[0]).toBeInstanceOf(Object);
      })
      .catch(err => {
        console.log(err)
        throw err
      })
    })
  })

  describe('trails session tests', () => {
    
    test('should contain the correct activity name', () => {
      return db.query('SELECT * FROM session')
      .then(result => {
        expect(result.length).toBeDefined();
      })
      .catch(err => {
        console.log(err)
        throw err
      })
    })
  })  

})


