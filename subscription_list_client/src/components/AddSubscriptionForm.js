import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import SubscriptionServices from "./../services/SubscriptionServices";
const AddSubscriptionForm = ({ setSelectedScreen }) => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const SubscriptionSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    channel: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    resetForm();
    SubscriptionServices.addNewSubscription(values)
      .then((response) => {
        if (response.data && response.data.message) {
          setMessage(response.data.message);
          resetForm();
        }
      })
      .catch((error) => {
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.error
        )
          setError(error.response.data.error);
      });
  };

  const handleListSubscriptionsClick = () => {
    setSelectedScreen("list_subscriptions");
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <Formik
        initialValues={{ email: "", channel: "" }}
        validationSchema={SubscriptionSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="w-50 border border-dark p-4">
            <div className="mb-3">
              <label htmlFor="inputEmail1" className="form-label">
                Email address
              </label>
              <Field
                type="email"
                className="form-control"
                id="inputEmail1"
                name="email"
              />
              {errors.email && touched.email ? (
                <ErrorMessage message={errors.email} />
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="channel" className="form-label">
                Channel
              </label>
              <Field
                type="text"
                className="form-control"
                id="channel"
                name="channel"
              />
              {errors.channel && touched.channel ? (
                <ErrorMessage message={errors.channel} />
              ) : null}
            </div>
            {error && <ErrorMessage message={error} />}
            {message && <SuccessMessage message={message} />}
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </Form>
        )}
      </Formik>
      <div className="mt-3">
        <Button
          variant="secondary btn-sm"
          onClick={handleListSubscriptionsClick}
        >
          List subscription
        </Button>
      </div>
    </div>
  );
};

export default AddSubscriptionForm;
