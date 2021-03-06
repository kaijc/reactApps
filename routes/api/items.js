const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   get All items
// @access Public
router.get('/', (req, res) => {
    Item
    .find()
    .sort({date: -1 })
    .then(items => res.json(items))
}); // represents the endpoint of GET


// @route  POST api/items
// @desc   Create a Item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @route  POST api/items
// @desc   Create a Item
// @access Public
router.delete('/:id', (req, res) => {
 Item.findById(req.params.id)
 .then(item => item.remove().then(() => res.json({success: true})))
 .catch(err => res.status(404).json({ sucess: false}))
});
module.exports = router;