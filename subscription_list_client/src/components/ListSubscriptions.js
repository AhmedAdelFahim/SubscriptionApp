import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import SubscriptionServices from "./../services/SubscriptionServices";
import SubscriptionItem from "./SubscriptionItem";
const ListSubscriptions = ({ setSelectedScreen }) => {
  const [email, setEmail] = useState("");
  const [subscriptions, setSubscriptions] = useState([]);
  const handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };
  const handleListSubscriptionsClick = () => {
    SubscriptionServices.getSubscriptionList(email).then((response) => {
      setSubscriptions(response.data.result);
    });
  };
  const handleAddSubscriptionsClick = () => {
    setSelectedScreen("add_subscription");
  };
  return (
    <div className="d-flex flex-column pt-5 align-items-center h-100 justify-content-between">
      <div className="w-75">
        <div className="d-flex justify-content-between">
          <FormControl
            className="w-75"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Button
            variant="secondary btn-sm pl-2 pr-2"
            onClick={handleListSubscriptionsClick}
          >
            List Subscriptions
          </Button>
        </div>
        <div>
          {subscriptions.length === 0 ? (
            <div className="d-flex  pt-5 align-items-center h-100 justify-content-center">
              <h1>No Subscriptions</h1>
            </div>
          ) : (
            <div
              className=" mb-2 mt-2 "
              style={{ height: "75vh", overflow: "scroll" }}
            >
              {subscriptions.map((item) => {
                return <SubscriptionItem key={item.id} item={item} />;
              })}{" "}
            </div>
          )}
        </div>
      </div>
      <div className="mt-3 mb-5">
        <Button
          variant="secondary btn-sm"
          onClick={handleAddSubscriptionsClick}
        >
          Add subscription
        </Button>
      </div>
    </div>
  );
};

export default ListSubscriptions;
