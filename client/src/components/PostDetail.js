import "./footer.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import postService from "../services/post-service";
import useInput from "../hooks/use-input";
import Regex from "../constants/Vallidate";
import commentService from "../services/comment-service";

const nameValidate = (value) => value !== "";
const emailValidate = (value) => Regex.EMAIL.test(value);

function PostDetail(props) {
  let postID = props.match.params.id;
  const [post, setPost] = useState({});

  useEffect(() => {
    postService.getPostById(postID).then((data) => {
      setPost(data.result);
    });
  }, []);

  const {
    value: enterName,
    isValid: enterNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: NameChangeHandler,
    inputBlurHandler: NameBlurHandler,
  } = useInput(nameValidate);

  const {
    value: enterEmail,
    isValid: enterEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(emailValidate);

  const refInputComment = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let mes = refInputComment.current.value;
    if (mes === "") {
      return;
    }
    commentService
      .createNewComment(postID, {
        content: mes,
        name: enterName,
        email: enterEmail,
      })
      .then((data) => {
        alert("Thành công");
      })
      .catch((data) => {
        alert("Thất bại");
      });
  };

  return (
    <div id="content" className="site-content">
      <div id="primary" className="content-area column two-thirds">
        <main id="main" className="site-main" role="main">
          <article>
            <header className="entry-header">
              <h1 className="entry-title">{post.title}</h1>
              <div className="entry-meta">
                <span className="posted-on">
                  <time className="entry-date published">{post.createdAt}</time>
                </span>
              </div>
            </header>
            <div className="entry-content">
              <p>{post.content}</p>
            </div>
            <footer className="entry-footer">
              <span className="cat-links">Posted in audio, embed, media</span>
            </footer>
          </article>
          <nav className="navigation post-navigation" role="navigation">
            <h1 className="screen-reader-text">Post navigation</h1>
            <div className="nav-links">
              <div className="nav-previous">
                <NavLink to="" rel="prev">
                  <span className="meta-nav">←</span> Thanks for watching!
                </NavLink>
              </div>
            </div>
          </nav>
          <div id="comments" className="comments-area">
            <div id="respond" className="comment-respond">
              <h3 id="reply-title" className="comment-reply-title">
                Leave a Reply{" "}
                <small>
                  <a
                    rel="nofollow"
                    id="cancel-comment-reply-link"
                    href="/demo-moschino/embed-audio/#respond"
                    style={{ display: "none" }}
                  >
                    Cancel reply
                  </a>
                </small>
              </h3>
              <form
                id="commentform"
                className="comment-form"
                onSubmit={submitHandler}
              >
                <p className="comment-notes">
                  <span id="email-notes">
                    Your email address will not be published.
                  </span>{" "}
                  Required fields are marked <span className="required">*</span>
                </p>
                <p className="comment-form-comment">
                  <label for="comment">Comment</label>
                  <textarea
                    ref={refInputComment}
                    id="comment"
                    name="comment"
                    cols="45"
                    rows="8"
                    aria-required="true"
                    required="required"
                  ></textarea>
                </p>
                <p className="comment-form-author">
                  <label for="author">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    className="form-control"
                    value={enterName}
                    onBlur={NameBlurHandler}
                    onChange={(e) => NameChangeHandler(e.target.value)}
                  />
                  {nameInputHasError && (
                    <p className="error-text">Name is not format or null.</p>
                  )}
                </p>
                <p className="comment-form-email">
                  <label for="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail Address *"
                    value={enterEmail}
                    onBlur={emailBlurHandler}
                    onChange={(e) => emailChangeHandler(e.target.value)}
                    name="email"
                  />
                  {emailInputHasError && (
                    <p className="error-text">Email is not format.</p>
                  )}
                </p>

                <p className="form-submit">
                  <input
                    name="submit"
                    type="submit"
                    id="submit"
                    className="submit"
                    value="Post Comment"
                  />
                </p>
              </form>
            </div>
          </div>
        </main>
      </div>
      <div id="secondary" className="column third">
        <div id="sidebar-1" className="widget-area" role="complementary">
          <aside id="search" className="widget widget_recent_entries">
            <form action="" method="post">
              <input type="text" className="" />
              <button type="submit">Search</button>
            </form>
          </aside>

          <aside id="recent-posts-2" className="widget widget_recent_entries">
            <h4 className="widget-title">Recent Posts</h4>
            <ul>
              <li>
                <a href="blog-single.html">Somewhere in time</a>
              </li>
              <li>
                <a href="blog-single.html">Thanks for watching!</a>
              </li>
              <li>
                <a href="blog-single.html/">Who could have thought?</a>
              </li>
              <li>
                <a href="blog-single.html">Text Alignement</a>
              </li>
              <li>
                <a href="blog-single.html">HTML Tags and Formatting</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
