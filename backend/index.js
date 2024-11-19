//Postgres
const dotenv = require("dotenv"),
  { Client } = require("pg")

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI,
})

client.connect()

module.exports = { client }
//

//Express
const express = require("express"),
  path = require("path")

const app = express(),
  port = process.env.PORT || 3000

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(path.resolve(), "dist")))
//

//Listeners
const userRoutes = require("./routes/userRoutes")
const feedRoutes = require("./routes/feedRoutes")

app.use(userRoutes)
app.use(feedRoutes)

//Check ready
app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})
