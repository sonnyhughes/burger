//REQUIRE ORM
var orm = require('../config/orm.js');

//OBJECT FOR EXPORT
var burger = {
    selectWhere: function (burgerName, callback) {
        orm.selectWhere('burgers', 'burger_name', burgerName, function (returnData) {
            callback(returnData)
        });
    },

    insertOne: function (column, name, callback) {
        //CALL ORM insertOne (table, col, name, callback)
        orm.insertOne('burgers', column, name, function (returnData) {
            callback(returnData);
        });
    },

    selectAll: function (callback) {
        //CALL ORM selectAll TO LOAD UI WITH burgers DATABASE TABLE
        orm.selectAll('burgers', function (returnData) {
            callback(returnData);
        });
    },

    updateOne: function (table, column, id, callback) {
        //CALL ORM updateOne (table, col, id, callback)
        orm.updateOne('burgers', column, id, function (returnData) {
            callback(returnData);
        })
    },

    deleteOne: function (table, id, callback) {
        //CALL ORM deleteOne (table, id, callback)
        orm.deleteOne('burgers', id, function (returnData) {
            callback(returnData);
        })
    }
};

//EXPORT
module.exports = burger;