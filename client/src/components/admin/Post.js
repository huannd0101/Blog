import React from "react";

const Post = (props) => {
  let item = props.obj;

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>
        <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
      </td>
      {/* <td>✔</td> */}
      <td>{item.createdAt}</td>
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

export default Post;
