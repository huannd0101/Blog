import React, { useEffect, useState } from "react";
import postService from "../../services/post-service";
import Post from "./Post";

const ListPost = (props) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    postService.getAllPost().then((data) => {
      setPosts(data.result);
    });
  }, []);

  const onDeleteItem = (id) => {
    postService.deletePostById(id).then((data) => {
      let newPosts = posts.filter((item) => item.id !== id);
      setPosts(newPosts);
    });
  };

  return (
    <div className="row">
      <div className="col-lg-12 mb-4">
        <div className="card">
          <div className="card-header py-3 shadow mb-4">Tất cả post</div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <td>ID</td>
                <td>Title</td>
                <td>Content</td>
                <td>Create At</td>
              </thead>
              <tbody>
                {posts &&
                  posts.length > 0 &&
                  posts.map((item) => (
                    <Post onDelete={onDeleteItem} key={item.id} obj={item} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPost;
