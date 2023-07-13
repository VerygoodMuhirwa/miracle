const { body, validationResult } = require('express-validator');
const { createToken } = require('../middlewares/verifyToken');
const userModel = require('../models/userModel');
var bcrypt = require('bcryptjs');
const profileModel = require('../models/profileModel');

module.exports.loginUser = [
    body('email').not().isEmpty(),
    body('password').not().isEmpty(),

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {

            const user = await userModel.findOne({ email });

            if (user) {

                const auth = await bcrypt.compare(password, user.password);

                if (auth) {

                    const token = await createToken(user);

                    res.status(201).json({
                        message: 'Successfully Logged In',
                        user,
                        token,
                    });

                } else {
                    throw Error('Incorrect Password');
                }
            } else {
                throw Error('User Not Found');
            }
            
        } catch (err) {
            let error = err.message;
            res.status(400).json({ error: error });
        }
    },
];

module.exports.registerUser = [
    body('name').not().isEmpty(),
    body('email').not().isEmpty(),
    body('password').not().isEmpty(),

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {

            const hashedPassword = await bcrypt.hash(password, 12);

            const user = await userModel.create({
                name,
                email,
                password: hashedPassword
            });

            var profile = await profileModel.create({ user: user._id, about: '' });

            const token = await createToken(user);

            res.status(201).json({
                user: user,
                token,
                message: 'User Created Successfully',
            });
            
        } catch (err) {
            let error = err.message;
            res.status(400).json({ error: error });
        }
    },
];