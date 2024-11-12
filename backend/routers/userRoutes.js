const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/api/users', userController.addUser);
router.get('/api/users', userController.getUser);
router.patch('/api/users', userController.changeUser);
router.delete('/api/users', userController.removeUser);

module.exports = router;
