const router = require("express").Router();
const db = require("../../data/dbConfig");

router.post("/item", (req, res) => {
    const newPost = {
        owner_id: req.body.owner_id,
        item_name: req.body.name,
        item_price: req.body.price,
        item_description: req.body.description
    }
    db("items").insert(newPost).then(([data]) => {
        res.status(201).json({ message: `item with id of ${data} added to the db successfully.`})
    })
    .catch(error => {
        res.status(500).json({ message: error.code })
    })
})

module.exports = router;