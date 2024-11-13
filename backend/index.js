//Postgres
const dotenv = require('dotenv'),
  { Client } = require('pg')

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI
})

client.connect()
//

//Express
const express = require('express'),
  path = require('path')

const app = express(),
  port = process.env.PORT || 3000

app.use(express.static(path.join(path.resolve(), 'dist')))
//

//Listeners
const userRoutes = require("./routes/userRoutes");
app.use(userRoutes);


//Check ready
app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})
