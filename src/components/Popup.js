import React from "react";
import PropTypes from "prop-types";
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
Popup.propTypes = {
  togglePopup: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
export default Popup;
