const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// -------- POST -------- //

router.post('/', (req, res) => {
    console.log("POST router", req.body);
    const feedback = req.body;
    // Sanitize POST //
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`
    //update VALUES to utilize object in req.body (above)
    pool.query(queryText, [feedback[0], feedback[1], feedback[2], feedback[3]])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => { 
    console.log(`Error making query.router ${queryText}`, error);
    res.sendStatus(500)
    });
}); // end POST

module.exports = router;