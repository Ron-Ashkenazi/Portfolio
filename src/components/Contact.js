import "./Contact.css";
import { GrSend } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  const access_key = process.env.REACT_APP_ACCESS_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.querySelector(".contact-form");

    if (form.reportValidity()) {
      form.submit();
    }
  };

  return (
    <div ref={ref} className="contact-root">
      <h1 className="contact-header">Get in touch</h1>
      <form
        className="contact-form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input type="hidden" name="access_key" value={access_key}></input>
        <div className="form-inputs-wrapper">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
          ></input>
          <label className="form-label">Full name</label>
        </div>
        <div className="form-inputs-wrapper">
          <input type="email" name="email" placeholder="Email" required></input>
          <label className="form-label">Email</label>
        </div>
        <div className="form-inputs-wrapper">
          <textarea name="message" placeholder="Message" required></textarea>
          <label className="form-label">Message</label>
        </div>
        <span className="submit-span" onClick={handleSubmit}>
          <span className="submit-span-text">Send</span>
          <GrSend className="submit-span-icon" />
        </span>
      </form>
      <div className="phone-email-div">
        <span className="phone-email-span">
          054-4277776 | ron98002@gmail.com
        </span>
        <div>
          <a href="https://github.com/Ron-Ashkenazi">
            <FaGithub className="info-button-contact" />
          </a>
          <a href="https://www.linkedin.com/in/ron-ashkenazi-149498216/">
            <FaLinkedinIn className="info-button-contact" />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Contact;
