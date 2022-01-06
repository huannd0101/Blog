import React from "react";
import Post from "./Post";

function BoxPost(props) {
  let posts = props.arr;
  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((item) => <Post key={item.id} obj={item} />)}
    </>
  );
}

export default BoxPost;
