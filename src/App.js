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
  const [currentItem, setICurrentItem] = useState({});
  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (Object.keys(currentItem).length > 0) {
      setICurrentItem({});
    }
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
  const fetchItem = (id) => {
    let currentItem = items.find((item) => item.id === id);
    setICurrentItem(currentItem);
    togglePopup();
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
                currentItem={currentItem}
                saveItem={saveItem}
                priorities={Priorities}
                togglePopup={togglePopup}
              />
            </Popup>
          )}
        </div>
        <Table items={items} removeItem={removeItem} fetchItem={fetchItem} />
      </div>
    </>
  );
}

export default App;
