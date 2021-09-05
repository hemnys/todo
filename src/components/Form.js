import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Alert from "./Alert";
const Form = ({ saveItem, priorities, togglePopup }) => {
  const initialState = {
    title: "",
    description: "",
    priority: "",
  };
  const [item, setItem] = useState(initialState);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const updateState = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
  const addItem = (e) => {
    e.preventDefault();
    for (let key of Object.keys(item)) {
      if (item[key].trim() === "") {
        setError(true);
        return;
      }
    }

    item.id = uuidv4();
    saveItem(item);
    setItem(initialState);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      togglePopup();
    }, 300);
  };
  const { title, description, priority } = item;
  return (
    <>
      <form onSubmit={addItem}>
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
          >
            <option>Select priority</option>
            {Object.keys(priorities).map((key, index) => (
              <option
                key={index}
                value={key}
                selected={priority === priorities[key] ? "selected" : null}
              >
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

export default Form;
