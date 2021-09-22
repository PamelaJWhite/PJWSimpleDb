const { response } = require("express");
let express = require("express");

let controller = require("./controller");

let router = express.Router();

//POST that will /record -body {word: "Test"}
// will add the word to our table in the DB
router.post("/record", controller.addWord)

//GET / record
//will list all of the previously recorded words


router.get("/record", controller.getWords);

//export
module.exports = router; 