import React, { useState } from "react";
import contact from "../images/ContactUs .gif";
import "./contact.css";
export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const form=document.getElementById('form');
    formData.append("access_key", "a825da9-87dd-478b-acaa-e9ec1ac55711");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    form.reset();
  };

  return (
    <div className="contact" id="contact">
      <h1>Let's Talk!</h1>
      <div className="contact-main">
        <div className="contact-vector">
          <img src={contact} height="400px" />
        </div>
        <form id="form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" placeholder="Your message here"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
