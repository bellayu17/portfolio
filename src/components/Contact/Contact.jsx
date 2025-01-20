import React from "react";
import Instagram from "../../assets/images/socials/gmail.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <h2>Feel free to reach out</h2>
          <ul className="app__contact-container_contacts-links">
            <a>
              <img src={Instagram} alt="" />
              bellayu1600@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/bella-yuyu"
              target="blank"
            >
              <img src={LinkedIn} alt="" />
              Bella Yu
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
