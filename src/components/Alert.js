import React from "react";
const Alert = ({ message, classType }) => {
  return <p className={`alert alert-danger ${classType}`}>{message}</p>;
};

export default Alert;
