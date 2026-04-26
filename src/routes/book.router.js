const router = require("express").Router();
const bookController = require("../controllers/book.controller")

router.get("/old-testament", bookController.getOldTestament);
router.get("/new-testament", bookController.getNewTestament);
router.get("/:name", bookController.getBookByName);

module.exports = router;