import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";
const Table = ({ items, removeItem, fetchItem }) => {
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
              <Item
                key={item.id}
                item={item}
                removeItem={removeItem}
                fetchItem={fetchItem}
              />
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
Table.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  fetchItem: PropTypes.func.isRequired,
};
export default Table;
