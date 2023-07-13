const { Router } = require('express');
const { getMyProfile, editProfile } = require('../controllers/profileController');
const { isAuth } = require('../middlewares/verifyToken');

const authRoutes = Router();

authRoutes.get('/getMyProfile', isAuth,  getMyProfile);
authRoutes.post('/editProfile', isAuth,  editProfile);

module.exports = authRoutes;