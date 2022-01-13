import React, { useState, useEffect } from "react";
import ListCard from "./ListCard";
import ListPost from "./ListPost";
import userService from "../../services/user-service";
import contactService from "../../services/contact-service";
import postService from "../../services/post-service";
import postCommentService from "../../services/post-comment-service";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    userService.getAllUser().then((data) => {
      setUsers(data.result);
    });
    contactService.getAllContact().then((data) => {
      setContacts(data.result);
    });
    postService.getAllPost().then((data) => {
      setPosts(data.result);
    });
    postCommentService.getAllPostComment().then((data) => {
      setPostComments(data.result);
    });
  }, []);

  return (
    <>
      <ListCard
        obj={{
          cntUser: users ? users.length : 0,
          cntPost: posts.length,
          cntComment: postComments.length,
          cntContact: contacts.length,
        }}
      />
      <ListPost />
    </>
  );
};

export default Dashboard;
