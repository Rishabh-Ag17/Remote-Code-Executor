const express = require("express");
const { executeCode } = require("../controllers/codeExecutorController");
const router = express.Router();

router.post("/execute", executeCode);

module.exports = router;
