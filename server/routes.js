var router = require('express').Router();

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
  res.json({ sup: 'yo' });
});

router.post('/', (req, res) => {
  /*
  **  Handle POST request
  */
  res.json({ waddup: 'dawg' });
});

module.exports = router;