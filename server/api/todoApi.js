const express = require('express');
const router = express.Router();

router.get('/api/todos', (req, res) => {
  res.json({ msg: 'all todos' });
});

module.exports = router;
