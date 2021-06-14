const express = require('express');
const router = express.Router();

router.get('/api/todos', (req, res) => {
  res.json({ msg: 'all todos' });
});

router.post('/api/todos/new', (req, res) => {
  console.log('i post gauta', req.body);
  // req.body = {
  // title: 'Buy milk'
  //}
  res.json({ success: true, body: req.body });
});

module.exports = router;
