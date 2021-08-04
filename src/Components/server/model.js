const Pool = require('pg').Pool

const pool = new Pool ({

    user: 'postgres',
    host: 'localhost',
    database: 'sample',
    password: '12345678',
    port :3001 ,
    
})


const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM members ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }


  module.exports = {
    getMerchants
  }