const Joi = require('@hapi/joi');

const getToken = {
  body: Joi.object().keys({
    clientId: Joi.string().required(),
    clientSecret: Joi.string().required(),
    code: Joi.string().required(),
  }),
};

module.exports = {
  getToken,
};
