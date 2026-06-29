import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hawk78q",
        "template_cd0ue48",
        form.current,
        "r6_J_kxJujvMz3V8o",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        },
      );
  };
  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <h3>Let's Work Together</h3>

          <p>
            Interested in working together, discussing a project, or just saying
            hello? Feel free to reach out.
          </p>

          <div className="contact-icons">
            {/* Email */}
            <a
              href="mailto:pritishdubeykeck@gmail.com"
              className="contact-icon"
              title="Email"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pritish-dubey-5901a9231/"
              target="_blank"
              rel="noreferrer"
              className="contact-icon"
              title="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/PritishDubeykeck"
              target="_blank"
              rel="noreferrer"
              className="contact-icon"
              title="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/pritish___dubey"
              target="_blank"
              rel="noreferrer"
              className="contact-icon"
              title="Instagram"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <h3>Send a Message</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
