import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

export default function ContactUs() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      console.log("form must be filled out");
    } else {
      emailjs
        .sendForm(
          "service_cvk3fcr",
          "template_ltghbve",
          form.current,
          "user_AcCQo8isxokY8Pb3autGq"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setName("");
      setEmail("");
      setMessage("");
      setModal(true);
    }
  };
  return (
    <div>
      {!modal ? (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            className="input"
            value={name}
            onChange={function handleChange(e) {
              setName(e.target.value);
            }}
            type="text"
            name="user_name"
            required={true}
            placeholder="Steve Smith"
          />
          <label>Email</label>
          <input
            className="input"
            value={email}
            onChange={function handleChange(e) {
              setEmail(e.target.value);
            }}
            type="email"
            name="user_email"
            required={true}
            placeholder="eg. steve.smith@gmail.com"
          />
          <label>Message</label>
          <textarea
            className="input"
            value={message}
            onChange={function handleChange(e) {
              setMessage(e.target.value);
            }}
            name="message"
            required={true}
            placeholder="Leave your message here..."
          />
          <button className="send-button" type="submit">
            Send
          </button>
        </form>
      ) : (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="success-modal">Thank you for getting in touch.</div>
          <label>Name</label>
          <input
            value={name}
            onChange={function handleChange(e) {
              setName(e.target.value);
            }}
            type="text"
            name="user_name"
            required={true}
          />
          <label>Email</label>
          <input
            value={email}
            onChange={function handleChange(e) {
              setEmail(e.target.value);
            }}
            type="email"
            name="user_email"
            required={true}
          />
          <label>Message</label>
          <textarea
            value={message}
            onChange={function handleChange(e) {
              setMessage(e.target.value);
            }}
            name="message"
            required={true}
          />
          <button className="send-button" type="submit">
            Send
          </button>
        </form>
      )}
    </div>
  );
}
