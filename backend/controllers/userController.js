
exports.getUser = async (req, res) => {
  const result = await client.query(
    "SELECT * FROM users WHERE Username = $1",
    [req.query.username]
  )
  res.send(result.rows)

}

exports.addUser = (req, res) => {
  const { username, password, email, age } = req.body
  console.log(req.body)
  // const result = await client.query(
  //   "INSERT INTO users (username, password, email, age) VALUES ($1, $2, $3, $4)",
  //   [req.body]
  // )
  // res.send(result)
}



exports.updateUser = async (req, res) => {

}

exports.removeUser = async (req, res) => {

}
