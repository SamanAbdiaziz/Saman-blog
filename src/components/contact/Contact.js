import React, { useRef } from "react"; //to send the mail
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const payload = Object.fromEntries(formData);

    try {
      const response = await fetch("http://localhost:3001/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    e.target.reset();
  };

  return (
    <div>
      <hr className="hr1 d-flex ms-5 me-5" />

      <div>
        <section className="contact d-flex justify-content-center align-items-center flex-column">
          <div className="content  rounded p-3 text-center">
            <h2>Contact Us</h2>
            <p>
              Dr. Adan Saman is a distinguished figure in the field of
              education, bringing over two decades of expertise and innovation.
              His profound contributions to curriculum development, pedagogy,
              and educational consultancy have been pivotal in transforming
              educational systems globally.
            </p>
          </div>
          <div className="maincontainer d-flex justify-content-center align-items-center mt-4 w-100">
            <div className="contactInfo d-flex flex-column w-50">
              <div className="box d-flex  rounded p-3 mb-3">
                <div className="icon d-flex  justify-content-center align-items-center">
                  <FiMapPin />
                </div>
                <div className="text bg-black d-flex p-2 rounded flex-column ms-3">
                  <h3>Address</h3>
                  <p>
                    123/1,
                    <br />
                    Nairobi,
                    <br /> kenya.
                  </p>
                </div>
              </div>

              <div className="box d-flex  rounded p-3 mb-3 " >
                <div className="icon d-flex justify-content-center align-items-center">
                  <FiPhoneCall />
                </div>
                <div className="text bg-black rounded p-2 d-flex flex-column ms-3">
                  <h3>Phone</h3>
                  <p>
                    0722724794
                    <br />
                  </p>
                </div>
              </div>

              <div className="box d-flex  rounded p-3">
                <div className="icon d-flex justify-content-center align-items-center">
                  <FiMail />
                </div>
                <div className="text bg-black p-2 rounded d-flex flex-column ms-3">
                  <h3>Email</h3>
                  <p>adansaman@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contactForm rounded">
            <form ref={form} onSubmit={sendEmail} action="self" method="POST">
                <h2>Send Message</h2>
                <div className="inputBox w-100 mt-2">
                  <input
                    type="text"
                    required
                    name="user_name" // Set the name attribute to identify this field
                  />
                  <span>Full Name</span>
                </div>

                <div className="inputBox w-100 mt-2">
                  <input
                    type="email"
                    required
                    name="user_email" // Set the name attribute to identify this field
                  />
                  <span>Email</span>
                </div>
                <div className="inputBox w-100 mt-2">
                  <textarea required={"required"} name={"message"}></textarea>
                  <span>Type your Message..</span>
                </div>
                <div className="inputBox w-100 mt-2">
                  <input type={"submit"} value={"Send"} />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
