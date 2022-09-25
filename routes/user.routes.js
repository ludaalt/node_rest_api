const Router = require("express");
const router = new Router();

router.post("/user");
router.get("/user");
router.get("/user/:id");
router.put("/user");
router.delete("/user/:id");

module.exports = router;
