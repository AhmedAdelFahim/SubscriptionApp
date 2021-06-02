import React, { useState } from "react";
import ListSubscriptions from "../components/ListSubscriptions";
import AddSubscriptionForm from "./../components/AddSubscriptionForm";
const Home = () => {
  const [selectedScreen, setSelectedScreen] = useState("add_subscription");
  return (
    <div className="container h-100">
      {selectedScreen === "add_subscription" ? (
        <AddSubscriptionForm setSelectedScreen={setSelectedScreen} />
      ) : (
        <ListSubscriptions setSelectedScreen={setSelectedScreen} />
      )}
    </div>
  );
};

export default Home;
