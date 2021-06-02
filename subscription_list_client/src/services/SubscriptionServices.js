import axios from "axios";
const API_URL = `${process.env.REACT_APP_BACKEND_URL}`;
function SubscriptionServices() {
  return {
    addNewSubscription: (data) => {
      return axios.post(`${API_URL}/v1/subscriptions`, data);
    },
    getSubscriptionList: (email) => {
      return axios.get(`${API_URL}/v1/subscriptions?email=${email}`);
    },
  };
}

export default new SubscriptionServices();
