const router = require('express').Router();
const path = require('path');

// Status codes will be 304 if the static HTML pages have not changed since the user last visited
// Otherwise, status codes will be 200 or 500


// The home screen

router.get('/', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,"../public/index.html"));
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

// The exercise page (to add/update)

router.get('/exercise', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,"../public/exercise.html"));
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
});

// The user's dashboard

router.get('/stats', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,"../public/stats.html"));
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

module.exports = router;