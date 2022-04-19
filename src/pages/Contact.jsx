import React from "react";
import ContactUs from "../components/ContactUs";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact us</h3>
      <p>
        If you have any questions, please fill out the form below and we will
        get back to as soon as we can.
      </p>
      <ContactUs />
    </div>
  );
}
