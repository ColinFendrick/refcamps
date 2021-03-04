const express = require('express');
const router = new express.Router();
const Message = require('../models/message');

// Commented stuff is the way to move when you begin a db
router.get('/hello', async (req, res, next) => {
  // const message = new Message(req.body);
  const message = new Message({ message: 'Hello!' });
  try {
    // await Message.save();
    res.send(message);
  } catch (e) {
    res.status(400).send({ e, message: 'hey' });
  }
});

module.exports = router;
