import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Popup from "./components/Popup";
import Form from "./components/Form";
import { Priorities } from "./Helpers";
function App() {
  let initItems = JSON.parse(localStorage.getItem("items"));
  if (!initItems) {
    initItems = [];
  }
  const [items, setItems] = useState(initItems);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
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
    <>
      <div className="container">
        <div className="row">
          <h1>TODO</h1>
          <button
            type="button"
            className="button-primary"
            onClick={togglePopup}
          >
            Add activity
          </button>

          {isOpen && (
            <Popup togglePopup={togglePopup}>
              <Form
                saveItem={saveItem}
                priorities={Priorities}
                togglePopup={togglePopup}
              />
            </Popup>
          )}
        </div>
        <Table items={items} removeItem={removeItem} />
      </div>
    </>
  );
}

export default App;
