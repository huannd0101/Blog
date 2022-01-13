import React from "react";

const Post = (props) => {
  let item = props.obj;
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.content}</td>
      <td>{item.post.title}</td>
      <td>
        <button
          onClick={() => {
            if (window.confirm("Delete the item?")) {
              props.onDelete(item.id);
            }
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Post;
