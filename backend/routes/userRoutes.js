const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/api/users', userController.getUser);
router.post('/api/users', userController.addUser);
router.patch('/api/users', userController.updateUser);
router.delete('/api/users', userController.removeUser);

module.exports = router;
