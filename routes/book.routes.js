const Router = require("express");
const router = new Router();

const bookController = require("../controller/book.controller");

router.post("/book", bookController.createBook);
router.get("/book", bookController.getBooksByUser);

module.exports = router;
