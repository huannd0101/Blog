import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useInput from "../hooks/use-input";
import postService from "../services/post-service";
import BoxPost from "./BoxPost";

const keyValidate = (value) => value !== "";

function Content(props) {
  const [posts, setPosts] = useState();
  useEffect(() => {
    postService.getAllPost().then((res) => {
      setPosts(res.result);
    });
  }, []);

  const {
    value: enterKey,
    isValid: enterKeyIsValid,
    hasError: keyInputHasError,
    valueChangeHandler: keyChangeHandler,
    inputBlurHandler: keyBlurHandler,
  } = useInput(keyValidate);

  const submitHandler = (e) => {
    e.preventDefault();
    postService.searchPostByKey(enterKey).then((res) => {
      setPosts(res.result);
    });
  };

  return (
    <div id="content" className="site-content">
      <div id="primary" className="content-area column two-thirds">
        <main id="main" className="site-main" role="main">
          <div className="grid bloggrid">
            <BoxPost arr={posts} />
          </div>
          <div className="clearfix"></div>
          <nav className="pagination">
            <a className="current">1</a>
            <a>2</a>
            <a>3</a>
            <a>4</a>
          </nav>
        </main>
      </div>

      <div id="secondary" className="column third">
        <div id="sidebar-1" className="widget-area" role="complementary">
          <aside id="search" className="widget widget_recent_entries">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                className="form-control"
                value={enterKey}
                onBlur={keyBlurHandler}
                onChange={(e) => keyChangeHandler(e.target.value)}
              />
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

export default Content;
