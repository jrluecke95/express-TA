const express = require('express');
const router = express.Router();

router.get('/details', (req, res) => {
  res.render('details')
})

module.exports = router;