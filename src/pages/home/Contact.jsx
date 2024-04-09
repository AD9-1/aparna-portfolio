import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h2> Contact Me</h2>
      </div>
      <div className="contact-form">
        <form className="contact-form-fields">
          <div className="contact-form-fields-email">
            <labelHtmlFor className="text-lg">
              <span className="field-title">Name :</span>{" "}
              <input type="text" className="fields" />
            </labelHtmlFor>
            <labelHtmlFor className="text-lg">
              <span className="field-title">Email : </span>
              <input type="email" className="fields" />
            </labelHtmlFor>
          </div>
          <div className="contact-form-fields-number">
            <labelHtmlFor className="text-lg"> Phone Number : </labelHtmlFor>
            <input type="number" />
          </div>

          <labelHtmlFor className="contact-form-fields-message text-lg ">
            <span>Message : {""}</span>
            <textarea rows="6" className="textarea"></textarea>
          </labelHtmlFor>

          <div className="contact-form-fields-button ">
            {" "}
            <input type="submit" className="text-lg" value="Submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
