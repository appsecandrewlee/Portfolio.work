import React, { useState, useEffect } from "react";
import "./ContactForm.css"; // Import the CSS file

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/b3e94e70-eb40-11ee-b428-632ee80a2804";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <div role="alert" style={{fontFamily: "Playfair Display"}}>
        Thank you! We'll be in touch soon.
      </div>
    );
  }

  return (
    <div>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        className="contact-form"
      >
        <div className="row">
          <div className="col-md-6">
            <label
              htmlFor="name"
              className="form-label"
              style={{ color: "black" }}
            >
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              style={{ color: "black" }}
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="email"
              className="form-label"
              style={{ color: "black" }}
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              style={{ width: "100%", color: "black" }}
              placeholder="name@example.com"
              required
            />
          </div>
        </div>
        <div className="mb-3" style={{ marginTop: "2vh" }}>
          <label
            htmlFor="message"
            className="form-label"
            style={{ color: "black" }}
          >
            Your Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
            style={{ color: "black" }}
          ></textarea>
        </div>
        <button
          style={{ fontFamily: "Playfair Display", marginRight: "90vh" }}
          className="active:bg-blue-600 hover:focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-black rounded shadow outline-none"
          type="submit"
        >
          Send a message
        </button>
      </form>
      <button
        className="btn btn-dark email-button"
        onClick={() =>
          (window.location.href = "mailto:appsec.andrewlee@gmail.com")
        }
      >
        Email me here
      </button>{" "}
    </div>
  );
};

export default ContactForm;
