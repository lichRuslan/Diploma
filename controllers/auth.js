const bcrypt = require('bcryptjs');
const User = require('../models/User');


module.exports.login = function (req, res){
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }

    });
}


module.exports.register = async function (req, res){
    //mail password
    const candidate = await User.findOne({email: req.body.email});

    if(candidate){
        // Пользователь существует нужна ошибка
        res.status(409).json({
            message: 'Такой email уже используется, попробуйте другой !!!'
        });
    }else {
        //создать пользователя
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
            // password: req.body.password
        })
        try {
            await user.save()
            res.status(201).json(user)
        } catch (e){
            // error Обработать ошибку !


        }

    }
}