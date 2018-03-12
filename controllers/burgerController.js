//DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const router = express.Router();
const burger = require('../models/burger.js')

//BURGER ROUTE BY DEFAULT
router.get('/', function (req, res) {
    res.redirect('/burgers');
});

//GET ALL
router.get('/burgers', function (req, res) {
    burger.selectAll(function (data) {
        //RENDER RESPONSE WITH HANDLEBARS
        res.render('index', { burgers: data });
    });
});

//CREATE
router.post('/burgers/create', function (req, res) {
    //CALL insertOne(column, data, callback);
    burger.insertOne('burger_name', req.body.name, function () {
        //REDIRECT HOME
        res.redirect('/burgers');
    })
})

//UPDATE
router.put('/burgers/update/devour/:id', function (req, res) {
    //CALL updateOne(tableName, column, ID, callback)
    burger.updateOne('burgers', 'devoured', req.params.id, function () {
        //REDIRECT HOME
        res.redirect('/burgers');
    })
})

//DELETE
router.delete('/burgers/delete/:id', function (req, res) {
    //CALL deleteOne(tableName, id, callback)
    burger.deleteOne('burgers', req.params.id, function () {
        //REDIRECT HOME
        res.redirect('/burgers');
    })
})

//INITIAL LOAD REDIRECT
router.use(function (req, res) {
    res.redirect('/burgers');
})

//EXPORT
module.exports = router;
