const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');


module.exports.login = async function (req, res){
    const candidate = await User.findOne({email: req.body.email});
    if(candidate){
        //Проверка пороля (сравнение) | пользователь существует
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if(passwordResult){
            //Генерацыя токена, пароли совпали
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60 * 60});
            res.status(200).json({
                token: `Bearer ${token}`
            });
        }else {
           // пороли не совпали
           res.status(401).json({
               message: 'Проверти ваш пароль'
           });
        }
    } else {
        // Пользователя, нет ошибка
        res.status(404).json({
            message: 'Пользователь не найден проверте ваш email ! '
        });
    }
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