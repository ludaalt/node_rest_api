const db = require("../db");
const currentDate = require("../utils/getCurrentDate");

class BookController {
  async createBook(req, res) {
    const { title, author, userId } = req.body;
    const createDate = currentDate();
    const newBook = db.query(
      "INSERT INTO book (title, author, createdAt, user_id) values ($1, $2, $3, $4) RETURNING *",
      [title, author, createDate, userId]
    );

    res.json(newBook.rows[0]);
  }

  async getBooksByUser(req, res) {
    const id = req.query.id;
    const books = await db.query("SELECT * from book where user_id = $1", [id]);
    res.json(books.rows);
  }
}

module.exports = new BookController();
