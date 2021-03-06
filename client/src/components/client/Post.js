import React from "react";
import { NavLink } from "react-router-dom";

function Post(props) {
  let item = props.obj;
  let linkComment = `/posts/${item.id}`;
  return (
    <article>
      <header className="entry-header">
        <h1 className="entry-title">
          <NavLink to={linkComment}>{item.title}</NavLink>
        </h1>
        <div className="entry-meta">
          <span className="posted-on">
            <time className="entry-date published">{item.createdAt}</time>
          </span>
          <span className="comments-link">
            <NavLink to={linkComment}>Leave a comment</NavLink>
          </span>
        </div>
      </header>
      <div className="entry-summary">
        <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        <p>
          <NavLink to={linkComment} className="more-link">
            Read more
          </NavLink>
        </p>
      </div>

      <footer className="entry-footer">
        <span className="cat-links">Posted in audio, embed, media</span>
      </footer>
    </article>
  );
}

export default Post;
