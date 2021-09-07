import React from "react";

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

export default Item;
