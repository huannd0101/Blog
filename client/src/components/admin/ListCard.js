import React from "react";
import Card from "./Card";

const ListCard = (props) => {
  let data = props.obj;
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="row">
        <Card
          link="/admin"
          border="border-left-primary"
          textColor="text-primary"
          title="admin"
          data={data.cntUser}
        />
        <Card
          link="/admin"
          border="border-left-success"
          textColor="text-success"
          title="Bài viết"
          data={data.cntPost}
        />
        <Card
          link="/admin/post-comments"
          border="border-left-info"
          textColor="text-info"
          title="Bình luận"
          data={data.cntComment}
        />
        <Card
          link="/admin/contacts"
          border="border-left-warning"
          textColor="text-warning"
          title="Liên hệ"
          data={data.cntContact}
        />
      </div>
    </>
  );
};

export default ListCard;
