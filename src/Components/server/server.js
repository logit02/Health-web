const express = require('express');

let app = express()
const PORT = 3001;
app.use(cors())

const merchant_model = require('./merchant_model')


app.use(express.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  merchant_model.getMerchants()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.listen(PORT, () => {
  console.log('server started on port: '+ PORT);
});







/*let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
var router = express.Router();
const PORT = 3000;
import usernameReg from '/Users/inesatoroyan/Desktop/React-app/src/signup/signup.js';
let pool = new pg.Pool({
    user: 'postgres',
    database: 'sample',
    password: '12345678',
    host: 'localhost',
    port :5432 ,
    max:10
   
    
});



app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(morgan('dev'))


app.use(function(req, res, next) {
  console.log('request', req.url, req.body, req.method);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-token");
  if(req.method === 'OPTIONS') {
      res.end();
  }
  else {
      next();
  }
});


router.get('/api/world', function(req, res, next) {
  res.end('hello world')
});

// app.use('/router', router)







// aps.get("/api/world/", (req, res) => {
  // res.status(201).json({"name":"Hello Test!!!"});
// }); 



aps.post("/api/auth", (req, res) => {
    const { usernameReg } = req.body;
    
    const date = '2021-06-21'
    pool.query(
      "INSERT INTO members (username, data) VALUES ($1, $2 )",
      [username, date],
      (error, results) => {
        if (error) {
          throw error;
        }
  
        res.sendStatus(201);
      }
    );
  });













  aps.listen(PORT, (err) => {
    console.log('server started on port: '+ PORT);
 });

 */