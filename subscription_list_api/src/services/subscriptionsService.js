const models = require("./../models/index");
const Joi = require("joi");
const { Op } = require("sequelize");

/**
 * 
 * @param data : query object from req contains email
 * @returns list contains subscriptions of this email
 */
const getAllSubscriptionsService = async (data) => {
  const schema = Joi.object({
    email: Joi.string().empty(""),
  });
  data = await schema.validateAsync(data);
  const subscriptionList = await models.Subscription.findAll({
    where: {
      email: {
        [Op.regexp]: `${data.email}`,
      },
    },
  });
  return subscriptionList;
};

/**
 * 
 * @param  data : body object from req contains email and channel
 * 1- validate data
 * 2- insert this data into database
 * @returns inserted object
 */
const addNewSubscriptionService = async (data) => {
  const schema = Joi.object({
    channel: Joi.string().required(),
    email: Joi.string().email().required(),
  });
  data = await schema.validateAsync(data);
  const newSubscription = await models.Subscription.create(data);
  return newSubscription;
};

module.exports = {
  getAllSubscriptionsService,
  addNewSubscriptionService,
};
