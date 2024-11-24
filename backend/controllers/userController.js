const { client } = require('../index.js')

exports.getUser = async (req, res) => {
  const { username, password } = req.query
  const result = await client.query(
    "SELECT * FROM users WHERE username = $1 AND password = $2",
    [username, password]
  )
  res.send({ callback: "success", user: result.rows[0] })
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
  if (req.body.tableVar == 'age') {
    const { newValue, userid } = req.body
    const result = await client.query(
      "UPDATE users SET age = $1 WHERE userid = $2",
      [newValue, userid]
    )
    res.send({ callback: "success", user: result.rows })
  }

}

exports.removeUser = async (req, res) => {

}
