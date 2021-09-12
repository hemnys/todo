import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Alert from "./Alert";
import PropTypes from "prop-types";
const Form = ({
  currentItem,
  saveItem,
  priorities,
  togglePopup,
  updateItem,
}) => {
  const initialState = {
    title: "",
    description: "",
    priority: "",
  };

  const currentState = {
    ...initialState,
    ...currentItem,
  };

  const [item, setItem] = useState(currentState);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateState = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
  const validateData = (item) => {
    for (let key of Object.keys(item)) {
      if (item[key].trim() === "") {
        setError(true);
        return false;
      }
    }
    setError(false);
    return true;
  };
  const delay = () => {
    setSuccess(false);
    togglePopup();
  };
  const updatingItem = (item) => {
    if (validateData(item)) {
      updateItem(item);
      setSuccess(true);
      setTimeout(delay, 500);
    }
  };
  const savingItem = (item) => {
    if (validateData(item)) {
      item.id = uuidv4();
      saveItem(item);
      setItem(initialState);
      setSuccess(true);
      setTimeout(delay, 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.id) {
      return updatingItem(item);
    }
    return savingItem(item);
  };

  const { title, description, priority } = item;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Form Todo</h2>
        {error ? (
          <Alert message="all elements are required" classType="error" />
        ) : null}
        {success ? (
          <Alert message="Register successful" classType="success" />
        ) : null}
        <div>
          <label>Item:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={updateState}
            className="u-full-width"
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="add Description"
            value={description}
            onChange={updateState}
            className="u-full-width"
          ></textarea>
        </div>
        <div>
          <select
            className="u-full-width"
            name="priority"
            onChange={updateState}
            defaultValue={priority}
          >
            <option value="">Select priority</option>
            {Object.keys(priorities).map((key, index) => (
              <option key={index} value={key}>
                {priorities[key]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className="u-full-width button-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
};
Form.propTypes = {
  currentItem: PropTypes.object,
  saveItem: PropTypes.func.isRequired,
  priorities: PropTypes.object,
  togglePopup: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};
export default Form;
