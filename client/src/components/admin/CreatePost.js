import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "../../../node_modules/react-quill/dist/quill.snow.css";
import "../../Assets/admin/css/ql-editor.css";
import { Constants } from "../../constants/Constants";
import postService from "../../services/post-service";
import storageService from "../../services/storage.service";

const CreatePost = (props) => {
  let postID = props.match.params.id;
  const [txtContent, setTxtContent] = useState();
  const refTitle = useRef();

  useEffect(() => {
    if (postID) {
      postService.getPostById(postID).then((data) => {
        refTitle.current.value = data.result.title;
        setTxtContent(data.result.content);
      });
    }
  }, []);

  let curUser = storageService.getObject(Constants.userInfo);
  const handleChange = (e) => {
    setTxtContent(e);
  };

  const submitHandler = () => {
    if (refTitle.current.value === "" || txtContent === "") {
      alert("Chưa nhập đủ dữ liệu!");
      return;
    }
    let id = curUser.userId;
    if (id === null) {
      alert(id);
      return;
    }
    if (postID) {
      postService
        .editPostById(postID, {
          id: postID,
          title: refTitle.current.value,
          content: txtContent,
          hightlight: true,
        })
        .then((data) => {
          alert("Save successfully");
        })
        .catch((data) => {
          alert("error");
        });
    } else {
      postService
        .createNewPost(id, {
          title: refTitle.current.value,
          content: txtContent,
          hightlight: true,
        })
        .then((data) => {
          setTxtContent("");
          refTitle.current.value = "";
        })
        .catch((data) => {
          alert("error");
        });
    }
  };

  return (
    <>
      <h1>Bài viết mới</h1>
      <h4>Tiêu đề:</h4>
      <input type="text" placeholder="Title" ref={refTitle} />
      <h4>Nội dung:</h4>
      <ReactQuill
        className="ql-editor"
        placeholder="Content..."
        modules={CreatePost.modules}
        formats={CreatePost.formats}
        onChange={handleChange}
        value={txtContent}
      />

      <button onClick={submitHandler}>Save</button>
    </>
  );
};

CreatePost.modules = {
  toolbar: [
    [{ header: "1" }, { header: "1" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};
CreatePost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "imgae",
  "video",
  "code-block",
];

export default CreatePost;
