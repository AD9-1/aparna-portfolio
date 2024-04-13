import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = formRef.current.from_name.value;
    const email = formRef.current.from_email.value;
    const message = formRef.current.message.value;
    if (!name || !email || !message) {
      toast.error("Please fill all the required fields", {
        autoClose: 5000,
        position: "bottom-center",
        theme: "colored",
      });
      return;
    }
    emailjs
      .sendForm("aparna_email", "aparna_template", formRef.current, {
        publicKey: "H1HkLe0i37ol7VHBw",
      })
      .then(
        () => {
          toast.success("Message Sent", {
            theme: "colored",
            autoClose: 3000,
            position: "top-right",
          });
          console.log("SUCCESS!");
        },
        (err) => {
          toast.error(err.message, {
            autoClose: 3000,
            theme: "colored",
            position: "bottom-center",
          });
          console.log("FAILED...", err.text);
        }
      );
  };
  return (
    <div className="contact" id="contactme">
      <div className="contact-title">
        <h2> Contact Me</h2>
      </div>
      <div className="contact-form">
        <form
          className="contact-form-fields"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <div className="contact-form-fields-email">
            <labelHtmlFor className="text-lg">
              <span className="field-title">Name :</span>{" "}
              <input type="text" className="fields" name="from_name" />
            </labelHtmlFor>
            <labelHtmlFor className="text-lg">
              <span className="field-title">Email : </span>
              <input type="email" className="fields" name="from_email" />
            </labelHtmlFor>
          </div>
          <div className="contact-form-fields-number">
            <labelHtmlFor className="text-lg"> Phone Number : </labelHtmlFor>
            <input type="number" name="from_ph" />
          </div>

          <labelHtmlFor className="contact-form-fields-message text-lg ">
            <span>Message : {""}</span>
            <textarea rows="6" className="textarea" name="message"></textarea>
          </labelHtmlFor>

          <div className="contact-form-fields-button ">
            {" "}
            <input type="submit" className="text-lg" value="Send"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
