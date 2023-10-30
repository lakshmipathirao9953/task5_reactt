import React from "react";

function Contact() {
  return (
    <section id="contact" className="full-screen">
      <h2>Contact Me</h2>
      <p>
        Connect with me on
        <a
          href="https://in.linkedin.com/in/lakshmipathi-rao-kocherlakota"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Linkedin{" "}
        </a>
        or send me an
        <a href="mailto: abc@example.com">Email</a>.
      </p>
    </section>
  );
}

export default Contact;
