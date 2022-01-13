import React, { useEffect, useState } from "react";
import postCommentService from "../../services/post-comment-service";
import Comment from "./Comment";

const ListComment = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    postCommentService.getAllPostComment().then((data) => {
      setComments(data.result);
    });
  }, []);

  const onDeleteItem = (id) => {
    postCommentService.deleteCommentById(id).then((data) => {
      let newComments = comments.filter((i) => i.id !== id);
      setComments(newComments);
    });
  };

  return (
    <div className="row">
      <div className="col-lg-12 mb-4">
        <div className="card">
          <div className="card-header py-3 shadow mb-4">Tất cả comments</div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Content</td>
                <td>Post name</td>
                <td>Actions</td>
              </thead>
              <tbody>
                {comments &&
                  comments.length > 0 &&
                  comments.map((item) => (
                    <Comment onDelete={onDeleteItem} key={item.id} obj={item} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComment;
