const httpStatus = require('http-status');
const fetch = require('node-fetch');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const getToken = catchAsync(async (req, res) => {
  try {
    const { clientId, clientSecret, code } = req.body;
    const credentials = {
      client_id: clientId,
      client_secret: clientSecret,
      code,
    };

    const token = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const tokenJson = await token.json();

    const response = {
      status: 'ok',
      ...tokenJson,
    };
    res.status(httpStatus.OK).json(response);

  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, error);
  }
});

module.exports = {
  getToken,
};
