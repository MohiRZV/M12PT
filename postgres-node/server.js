const { Client } = require("pg");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  // Allow requests from all origins
  res.header('Access-Control-Allow-Origin', '*');
  // Allow credentials (cookies, HTTP authentication, and client-side SSL certificates)
  res.header('Access-Control-Allow-Credentials', true);
  // Allow specific HTTP methods
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  // Allow specific HTTP headers
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  // Handle pre-flight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.status(200).send();
  } else {
    next();
  }
});


const client = new Client({
                user: "postgres",
                host: process.env.PGHOST,
                database: "ptdb",
                password: "1234",
                port: process.env.PGPORT
            });

client.connect();

client_id = 1;

app.get('/general-info', (req, res) => {
    client.query('select * from general_info where id='+client_id, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving data');
      } else {
        res.json(result.rows);
      }
    });
});

app.get('/hobbies', (req, res) => {
  client.query('select G.id, H.* from general_info as G inner join hobby_user as HU on HU.user_id = G.id inner join hobby as H on HU.hobby_id = H.id where G.id='+client_id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data');
    } else {
      res.json(result.rows);
    }
  });
});
  
app.get('/work', (req, res) => {
  client.query('select W.* from general_info as G inner join work_experience as W on G.id = W.user_id where G.id='+client_id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data');
    } else {
      res.json(result.rows);
    }
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


// const connectDb = async () => {
//     try {
//         await client.connect()
//         const res = await client.query('SELECT * FROM general_info')
//         console.log(res)
//         await client.end()
//     } catch (error) {
//         console.log(error)
//     }
// }
 
//connectDb()

// async function getGeneralInfo(id) {
//     const result = await client.query("select * from general_info where id=$1",[str(id)]);
//     const data = result.rows;
//     res.json(data);
// }