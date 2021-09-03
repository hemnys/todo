import React from "react";
import Item from "./Item";

const Table = ({ items, removeItem }) => {
  return (
    <>
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
    </>
  );
};

export default Table;
