const profileModel = require("../models/profileModel");
const { body, validationResult } = require('express-validator');

module.exports.getMyProfile = async (req, res) => {
    try {

        var profile = await profileModel.findOne({ user: req.user._id }).populate('user');

        res.status(201).json({
            profile: profile,
            message: 'Profile Fetched Successfully',
        });

    } catch (err) {
        let error = err.message;
        res.status(400).json({ error: error });
    }
};

module.exports.editProfile = [

    body('about').not().isEmpty(),
    body('education').not().isEmpty(),
    body('certification').not().isEmpty(),
    body('experience').not().isEmpty(),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { about, education, certification, experience } = req.body;

        try {

            const profile = await profileModel.findOneAndUpdate({ user: req.user._id }, { about, education, certification, experience }, { new: true });

            res.status(201).json({
                profile: profile,
                message: 'Profile Updated Successfully',
            });
            
        } catch (err) {
            let error = err.message;
            res.status(400).json({ error: error });
        }
    },
];