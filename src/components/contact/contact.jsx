import React from "react";
import "./contact.css";
import emailjs from 'emailjs-com';
function Contact() {
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }



  return (
    <>
      <div className="contact-container form-group">
        <div className="contact-title">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-content">
          <div className="contact-left-container">
            <h2>Hi let's have a chat.</h2>
            <ul className="contact_icons">
              <li>
                {" "}
                <a href="https://instagram.com/k.ravi0810">
                  <ion-icon
                    name="logo-instagram"
                    style={{ color: "#00acee" }}
                  ></ion-icon>{" "}
                  <span style={{ color: "#00acee" }}>Follow me on instagram</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://twitter.com/RAVIKUM72952304">
                  <ion-icon
                    name="logo-twitter"
                    style={{ color: "#00acee" }}
                  ></ion-icon>{" "}
                  <span style={{ color: "#00acee" }}>Follow me on Twitter</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.linkedin.com/in/ravi-kumar-1894b5203">
                  <ion-icon
                    name="logo-linkedin"
                    style={{ color: "#0e76a8" }}
                  ></ion-icon>{" "}
                  <span style={{ color: "#0e76a8" }}>
                    Connect with me on Linkedin
                  </span>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://github.com/ravi9694">
                  <ion-icon
                    name="logo-github"
                    style={{ color: "#AD5C51" }}
                  ></ion-icon>{" "}
                  <span style={{ color: "#AD5C51" }}>
                    See my Github profile
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-right-container">
            <h5>* Send me a Email</h5>
            <form onSubmit={sendEmail}>
              <div className="contact-form-wrapper search" >
                <input
                  type="text"
                  className="form_input"
                  placeholder="YOUR NAME(DISABLED)"
                  disabled="disabled"
                />
                <div className="form_icon">
                  <ion-icon name="person-outline"></ion-icon>
                </div>
              </div>
              <div className="contact-form-wrapper search">
                <input
                  type="email"
                  className="form_input"
                  placeholder="YOUR EMAIL(DISABLED)"
                  disabled="disabled"
                />
                <div className="form_icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
              </div>
              <div className="contact-form-wrapper search">
                <input
                  type="text"
                  className="form_input"
                  placeholder="YOUR SUBJECT(DISABLED)"
                  disabled="disabled"
                />
                <div className="form_icon">
                  <ion-icon name="reader-outline"></ion-icon>
                </div>
              </div>

              <div className="contact-form-wrapper">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="30"
                  className="form_input_area"
                  placeholder="YOUR MESSAGE....(DISABLED)"
                  disabled="disabled"
                ></textarea>
              </div>
              <div className="contact-form-wrapper submit-form">
                <input
                  type="submit"
                  className="form_input_submit"
                  value={"Submit"}
                  // (DISABLED)
                  disabled="disabled"
                />
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
