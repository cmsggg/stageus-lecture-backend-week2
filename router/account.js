// Description: Frontend의 요청을 받는 API

const router = require("express").Router();
const dbControl = require("../module/dbControl")

// Frontend의 Middleware API 요청을 처리하며, 이를 DB Control Module로 송신
router.get("", async (req, res) => {

    const idValue = req.query.id;
    const pwValue = req.query.pw;

    const queryResult = await dbControl(
        "SELECT * FROM week2_homework.account WHERE id=$1 and pw=$2",
        [idValue, pwValue]
    )
    res.send(queryResult)
});

router.post("", async (req, res) => {

    const idValue = req.body.id;
    const pwValue = req.body.pw;

    const queryResult = await dbControl(
        "INSERT INTO week2_homework.account(id, pw) VALUES($1, $2)",
        [idValue, pwValue]
    )
    res.send(queryResult)
});

router.put("", async (req, res) => {

    const idValue = req.query.id;

    const queryResult = await dbControl(
        "UPDATE week2_homework.account SET id=$1",
        [idValue]
    )
    res.send(queryResult)
})

router.delete("", async (req, res) => {

    const idValue = req.query.id;

    const queryResult = await dbControl(
        "DELETE FROM week2_homework.account where id=$1",
        [idValue]
    )
    res.send(queryResult)
})

module.exports = router;