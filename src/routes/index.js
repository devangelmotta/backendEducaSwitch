const express = require('express');
const userRoute = require('./github.route');
const docsRoute = require('./docs.route');

const router = express.Router();

router.use('/github', userRoute);
router.use('/docs', docsRoute);

module.exports = router;
