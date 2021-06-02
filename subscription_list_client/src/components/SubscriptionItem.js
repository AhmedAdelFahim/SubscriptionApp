import Card from "react-bootstrap/Card";

const SubscriptionItem = ({ item }) => {
  return (
    <div className="mt-1 mb-1">
      <Card>
        <Card.Body>
          <Card.Title>{item.email}</Card.Title>
          <Card.Text>{item.channel}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubscriptionItem;
