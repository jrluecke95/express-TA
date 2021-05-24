const express = require('express');
const router = express.Router();

router.get('/aboutus', (req, res) => {
  res.render('aboutUs')
})

module.exports = router;