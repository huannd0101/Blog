import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink
          style={{ margin: "0 5px" }}
          className="btn btn-success"
          to={"/admin/edit-post/" + item.id}
        >
          Edit
        </NavLink>

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
