const express = require('express');
const validate = require('../../middlewares/validate');
const githubValidation = require('../../validations/user.validation');
const githubController = require('../../controllers/github.controller');

const router = express.Router();

router.route('/get-token').post(validate(githubValidation.getToken), githubController.getToken);

module.exports = router;
