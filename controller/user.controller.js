const db = require("../db");
const currentDate = require("../utils/getCurrentDate");

class UserController {
  async createUser(req, res) {
    const { firstName, lastName, age, isFree } = req.body;
    const createdDate = currentDate();

    const newPerson = await db.query(
      "INSERT INTO user (firstName, lastName, age, isFree, createdAt) values ($1, $2, $3, $4, $5) RETURNING *",
      [firstName, lastName, age, isFree, createdDate]
    );

    res.json(newPerson.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query("SELECT * from user");
    res.json(users.rows);
  }

  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query("SELECT * from user where id = $1", [id]);
    res.json(user.rows[0]);
  }

  async updateUser(req, res) {
    const { id, firstName, lastName, age, isFree } = req.body;
    const updatedDate = currentDate();

    const user = await db.query(
      "UPDATE user set firstName = $2, lastName = $3, age = $4, isFree = $5, updatedAt = $6 where id = $1 RETURNING *",
      [id, firstName, lastName, age, isFree, updatedDate]
    );

    res.json(user.row);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE from user where id = $1", [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
