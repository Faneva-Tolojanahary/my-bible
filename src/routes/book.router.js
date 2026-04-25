const router = require("express").Router();
const bookController = require("../controllers/book.controller")

router.get("/", bookController.getAllBooks);
router.get("/:name", bookController.getBookByName);

module.exports = router;