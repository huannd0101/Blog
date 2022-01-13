import React from "react";

const Contact = (props) => {
  let item = props.obj;
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      {/* <td>✔</td> */}
      <td>{item.message}</td>
      <td>
        <button
          onClick={() => {
            if (window.confirm("Delete the item?")) {
              props.onDelete(item.id);
            }
          }}
          class="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Contact;
