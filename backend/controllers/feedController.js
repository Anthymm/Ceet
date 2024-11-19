const { client } = require('../index.js')

exports.getEvents = async (req, res) => {
  const result = await client.query(
    "SELECT * FROM events",
  )
  res.send({ callback: "success", events: result.rows })
}

exports.addEvent = async (req, res) => {
  const { eventtitle, host, location, date, interested } = req.body
  const result = await client.query(
    "INSERT INTO events (eventtitle, host, location, date, interested) VALUES ($1, $2, $3, $4, $5)",
    [eventtitle, host, location, date, interested]
  )
  console.log(result.rows)
  res.send({ callback: "success" })
}

exports.updateEvent = async (req, res) => {

}

exports.removeEvent = async (req, res) => {

}
