// Description: Database에 Query를 보내 처리를 하는 Module

const pg = require('pg');

// PostgreSQL Database Account Configuration
const dbUser = {
    user: "ubuntu",
    host: "localhost",
    database: "stageus",
    password: "1234",
    prot: 5432
}

// Middleware API로 부터 SQL과 Value를 받아 데이터베이스에 처리
// 처리 결과의 Object를 반환
const dbControl = async (sql, values) => {

    const result = {
        "message": "",
        "success": false,
        "rows": null
    }

    const client = new pg.Client(dbUser)

    try {
        await client.connect()
    } catch {
        result.message = "Connection Error"
        console.log(result.message)
        return result
    }

    try {
        const res = await client.query(sql, values);
        result.message = "Query Okay"
        console.log(result.message)
        result.success = true
        result.rows = res.rows
    } catch {
        result.message = "Query Error"
        console.log(result.message)
    }
    client.end()

    return result
}

module.exports = dbControl