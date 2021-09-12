import React from "react";
import PropTypes from "prop-types";
const Item = ({ item, removeItem, fetchItem }) => {
  const { id, title, description, priority } = item;
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>{priority}</td>
      <td>
        <button className="button-primary" onClick={() => fetchItem(id)}>
          Edit
        </button>
        <button className="button-danger" onClick={() => removeItem(id)}>
          Remove
        </button>
      </td>
    </tr>
  );
};
Item.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
  fetchItem: PropTypes.func.isRequired,
};
export default Item;
