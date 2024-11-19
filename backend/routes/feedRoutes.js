const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController');

router.post('/api/feed', feedController.addEvent);
router.get('/api/feed', feedController.getEvents);
router.patch('/api/feed', feedController.updateEvent);
router.delete('/api/feed', feedController.removeEvent);

module.exports = router;
