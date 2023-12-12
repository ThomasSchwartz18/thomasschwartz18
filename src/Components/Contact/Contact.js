import React from "react";
import "./Contact.css";
import { FiArrowRightCircle, FiArrowUpCircle } from "react-icons/fi";

const Contact = () => {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="contact-container" id="contact">
      <div className="fade-in">
        <h2 className="contact-main-text">LET'S DEVELOP SOMETHING.</h2>
      </div>
      <div className="contact--container">
        <form
          className="contact-me-form"
          action="https://formsubmit.co/65a3d31338a3b6912b5f9d276a7821c9"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name *"
            required
            className="your-name-container"
          />
          <input
            type="hidden"
            name="_next"
            value="https://thomasschwartz18.github.io/thanks/"
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email *"
            required
            className="email-container"
          />
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Phone"
            className="phone-container"
          />
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="subject"
            className="subject-container"
          />
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Message *"
            className="message-container"
            required
          ></textarea>
          <button type="submit" className="submit">
            Submit
            <span>
              <FiArrowRightCircle />
            </span>
          </button>
        </form>
      </div>
      <button onClick={topFunction} className="top-button">
        Top of Page
        <span>
          <FiArrowUpCircle />
        </span>
      </button>
    </div>
  );
};

export default Contact;
