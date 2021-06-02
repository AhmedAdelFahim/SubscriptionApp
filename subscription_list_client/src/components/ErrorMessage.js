import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p className="text-danger">{message}</p>
    </div>
  );
};

export default ErrorMessage;
