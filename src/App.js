import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Item from "./components/Item";
import { Priorities } from "./Helpers";
function App() {
  let initItems = JSON.parse(localStorage.getItem("items"));
  if (!initItems) {
    initItems = [];
  }
  const [items, setItems] = useState(initItems);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(initItems ? items : []));
  }, [items, initItems]);
  const saveItem = (currentItem) => {
    setItems([...items, currentItem]);
  };
  const removeItem = (id) => {
    let remainingItems = items.filter((item) => item.id !== id);
    setItems(remainingItems);
  };
  return (
    <div className="container">
      <div className="row">
        <h2 className="center">Testing app</h2>
      </div>
      <div className="row">
        <select className="u-full-width" name="priority">
          <option>Select priority</option>
          {Object.keys(Priorities).map((key, index) => (
            <option key={index} value={key}>
              {Priorities[key]}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        <div className="six columns">
          <Form saveItem={saveItem} priorities={Priorities} />
        </div>
        <div className="six columns">
          <table className="u-full-width">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item) => (
                  <Item key={item.id} item={item} removeItem={removeItem} />
                ))
              ) : (
                <tr>
                  <td colSpan="4">Not activities added yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
