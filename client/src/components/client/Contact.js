import React, { useEffect, useRef, useState } from "react";
import useInput from "../../hooks/use-input";
import Regex from "../../constants/Vallidate";
import contactService from "../../services/contact-service";

const nameValidate = (value) => value !== "";
const emailValidate = (value) => Regex.EMAIL.test(value);

function Contact(props) {
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

  const refInputMessage = useRef();
  const inputMessageChangeHandler = (e) => {};

  const submitHandler = (e) => {
    e.preventDefault();
    let mes = refInputMessage.current.value;
    if (mes === "") {
      return;
    }
    contactService
      .createNewContact({
        name: enterName,
        email: enterEmail,
        message: mes,
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
      <div id="primary" className="content-area column full">
        <main id="main" className="site-main">
          <article
            id="post-39"
            className="post-39 page type-page status-publish hentry"
          >
            <header className="entry-header">
              <h1 className="entry-title">Contact</h1>
            </header>

            <div className="entry-content">
              <div className="wpcmsdev-columns">
                <div className="column column-width-one-half">
                  <h4>Quick Contact</h4>

                  <form
                    onSubmit={submitHandler}
                    className="wpcf7"
                    id="contactform"
                  >
                    <div className="form">
                      <p>
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
                          <p className="error-text">
                            Name is not format or null.
                          </p>
                        )}
                      </p>
                      <p>
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
                      <p>
                        <textarea
                          name="comment"
                          rows="3"
                          placeholder="Message"
                          ref={refInputMessage}
                          onChange={(e) =>
                            inputMessageChangeHandler(e.target.value)
                          }
                        ></textarea>
                      </p>
                      <input
                        type="submit"
                        id="submit"
                        className="clearfix btn"
                        value="Send"
                      />
                    </div>
                  </form>
                  <div className="done">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="column column-width-one-half">
                  <h4>Find Us: (888) 252 389 3571</h4>
                  <p>
                    If you want to hire me or have any feedback or questions
                    about our service in general, please send us a message by
                    completing our enquiry form. It’s best to call though,
                    someone we’ll always be there for you.
                  </p>
                  <p>
                    Monday – Friday: 9am to 5pm
                    <br />
                    Saturday: 10am to 2pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
export default Contact;
