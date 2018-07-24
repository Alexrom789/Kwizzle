const express = require('express');
const app = express();
// var pg = require("pg");

// var connectionString = "postgres://jcqmqfii:yi4Q5uWPV8Us_NnhdOQ9bMcmxpqa8-vI@stampy.db.elephantsql.com:5432/jcqmqfii";
// // @localhost:3001/postgres";

app.get('/', (req, res, next) => {
   res.send('Default Server Page');
//   var client = new pg.Client(connectionString);
//   client.connect(function(err) {
//     if(err) {
//       return console.error('could not connect to postgres', err);
//     }
//     client.query('SELECT NOW() AS "theTime"', function(err, result) {
//       if(err) {
//         return console.error('error running query', err);
//       }
//       console.log(result.rows[0].theTime);
//       //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
//       client.end();
//     });
//   });
})

// app.get('/users', (req, res) => {
//   console.log('made correct get test request!');
//   res.json([{
//   	id: 1,
//   	username: "user1 test"
//   }, {
//   	id: 2,
//   	username: "user2"
//   }]);
// })

app.listen(3001, () => console.log('app is listening on port 3001'));