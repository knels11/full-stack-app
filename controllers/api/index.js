const router = require('express').Router();

const petRoutes = require('./pets-routes');
const userRoutes = require('./users-routes');
//const postRoutes = require('./post-routes');

router.use('/pets', petRoutes);
router.use('/users', userRoutes);
//router.use('./posts', postRoutes);

module.exports = router;