const {
  getAllSubscriptionsService,
  addNewSubscriptionService,
} = require("../services/subscriptionsService");

const getAllSubscriptions = async (req, res, next) => {
  const {query} = req;
  try {
    const subscriptionList = await getAllSubscriptionsService(query);
    res
      .status(200)
      .send({
        result: subscriptionList,
      });
  } catch (e) {
    next(e);
  }
};

const addNewSubscription = async (req, res, next) => {
  const { body } = req;
  try {
    const newSubscription = await addNewSubscriptionService(body);
    res
      .status(201)
      .send({
        result: newSubscription,
        message: "New Subscription Is Added Successfully",
      });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllSubscriptions,
  addNewSubscription,
};
