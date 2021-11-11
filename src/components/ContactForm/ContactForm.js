import React from "react";
// import "./images/icons/favicon.ico";
// import "./vendor/bootstrap/css/bootstrap.min.css";
// import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
// import "./vendor/animate/animate.css";
// import "./vendor/css-hamburgers/hamburgers.min.css";
// import "./vendor/select2/select2.min.css";
// import "./css/util.css";
// import "./css/main.css";

function ContactForm() {
  return (
    <div>
      {/* Hello world */}
      <div className="awesome">
        <label htmlFor="name">
          <title>Contact V1</title>

          <div className="contact1">
            <div className="container-contact1">
              <div className="contact1-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG" />
              </div>
              <form className="contact1-form validate-form">
                <span className="contact1-form-title">Get in touch</span>
                <div
                  className="wrap-input1 validate-input"
                  data-validate="Name is required"
                >
                  <input
                    className="input1"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <span className="shadow-input1" />
                </div>
                <div
                  className="wrap-input1 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input1"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <span className="shadow-input1" />
                </div>
                <div
                  className="wrap-input1 validate-input"
                  data-validate="Subject is required"
                >
                  <input
                    className="input1"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                  <span className="shadow-input1" />
                </div>
                <div
                  className="wrap-input1 validate-input"
                  data-validate="Message is required"
                >
                  <textarea
                    className="input1"
                    name="message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                  <span className="shadow-input1" />
                </div>
                <div className="container-contact1-form-btn">
                  <button className="contact1-form-btn">
                    <span>
                      Send Email
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <input type="text" id="name" />
        </label>
      </div>
    </div>
  );
}

export default ContactForm;
