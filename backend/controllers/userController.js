const { client } = require('../index.js')

exports.getUser = async (req, res) => {
  const { username, password } = req.query
  const result = await client.query(
    "SELECT * FROM users WHERE username = $1 AND password = $2",
    [username, password]
  )
  if (result.rows.length == 1) {
    res.send({ callback: "success" })
  }
}

exports.addUser = async (req, res) => {
  const { username, password, email, age } = req.body
  const result = await client.query(
    "INSERT INTO users (username, password, email, age) VALUES ($1, $2, $3, $4)",
    [username, password, email, age]
  )
  res.send(result.rows)
}

exports.updateUser = async (req, res) => {

}

exports.removeUser = async (req, res) => {

}
