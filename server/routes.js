var router = require('express').Router();

var cache = ['apple', 'banana', 'orange', 'eggplant', 'pear', 'peach'];

router.use((req, res, next) => {
  /*
  **  Middle ware activity
  */
  next();
});

router.get('/', (req, res) => {
  /*
  **  Handle GET request
  */
  // res.end();
  res.status(200).json({ message: cache[Math.floor(Math.random() * 6)] });
});

router.post('/', (req, res) => {
  /*
  **  Handle POST request
  */
  res.json({ waddup: 'dawg' });
});

module.exports = router;