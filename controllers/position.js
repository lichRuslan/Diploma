const  Position = require('../models/Position');
const errorHendler =require('../utils/errorHendler');


module.exports.getByCategoryId = async function (req,res){
    try {
        const positions = await Position.find({
            categoty: req.parems.categoryId,
            user: req.user.id
        });
        res.status(200).json(positions)
    }catch (e) {
        errorHendler(res, e);
    }
}
module.exports.create = function (req,res){
    try {

    }catch (e) {
        errorHendler(res, e);
    }
}
module.exports.remove = function (req,res){
    try {

    }catch (e) {
        errorHendler(res, e);
    }
}
module.exports.update = function (req,res){
    try {

    }catch (e) {
        errorHendler(res, e);
    }
}