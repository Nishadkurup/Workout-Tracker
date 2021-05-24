const router = require('express').Router();

const pageRoutes = require('./pageRoutes');
const apiRoutes = require('./apiRoutes');

router.use('/', pageRoutes);
router.use('/api', apiRoutes); // This is why the apiRoutes only need '/workouts' and not '/api/workouts' since api is included here

module.exports = router;