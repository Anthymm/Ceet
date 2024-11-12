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

const userRoutes = require("./routes/userRoutes");

//Listeners
app.get("/api/users", async (req, res) => {
  const result = await client.query(
    "SELECT * FROM Users"
  )
  res.send(result)
})

app.get("/api/users", async (req, res) => {
  const result = await client.query(
    "SELECT * FROM Users WHERE Username = $1",
    [req.query.username]
  )
  res.send(result.rows)

})
//


app.use(userRoutes);


//Check ready
app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})
