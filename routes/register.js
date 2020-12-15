var express = require('express');
var router = express.Router();
const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db"
});


/* GET home page. */
router.post('/:name', function (req, res, next) {
    var sql = 'SELECT * FROM test WHERE saloon_name =' + mysql.escape(req.params.name);
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(JSON.stringify({ "result": result }))
        //res.send("<h1>Hello</h1> " + JSON.stringify(result[0]) )
    })
    // res.send(req.params.name);
});

module.exports = router;
