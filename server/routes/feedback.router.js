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
    pool.query(queryText, [feedback.feelings, feedback.understanding, feedback.support, feedback.comments])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => { 
    console.log(`Error making query.router ${queryText}`, error);
    res.sendStatus(500)
    });
}); // end POST

// -------- GET -------- //

router.get('/',(req,res)=>{
    console.log("GET router", req.body);
    // Order old to new //
    const queryText = 'SELECT * FROM "feedback" ORDER BY "id" ASC;';
    pool.query(queryText)
    .then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('Error in GET', error);
        res.sendStatus(500);
    });
}); // end GET

// ---- DELETE ---- //
router.delete('/:id',(req,res)=>{
    let id = req.params.id
    const queryText = 'DELETE FROM "feedback" WHERE "id" = $1;';
    pool.query(queryText,[id])
    .then((result)=>{
        res.sendStatus(202)
    }).catch((err)=>{
        res.sendStatus(500)
        console.log(err);
    });
})

// ---- PUT ---- //
router.put('/:id/:boolean',(req,res)=>{
    let id = req.params.id
    let boolean = req.params.boolean
    const queryText = 'UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2;';
    pool.query(queryText,[boolean,id])
    .then((result)=>{
        res.sendStatus(202);
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;