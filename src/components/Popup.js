import React from "react";
const Popup = ({ togglePopup, children }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={togglePopup}>
          &times;
        </span>
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
