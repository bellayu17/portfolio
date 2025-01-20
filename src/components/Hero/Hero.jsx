import "aos/dist/aos.css";
import React from "react";
import TypeAnimation from "react-type-animation";
import "./Hero.scss";
import heroImage from "../../assets/images/IMG_5196.jpg";

const Hero = () => {
  return (
    <main
      className="app__hero"
      id="home"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__hero-container">
        <div className="app__hero-container_text">
          <TypeAnimation
            cursor={false}
            sequence={["Hi, my name is"]}
            wrapper="p"
            repeat={1}
            className="app__hero-title "
          />
          <TypeAnimation
            cursor={false}
            sequence={[2000, "Bella Yu"]}
            wrapper="h1"
            repeat={1}
            className="app__hero-container_text-name"
          />
          <TypeAnimation
            cursor={false}
            sequence={[3000, "A PM|Entrepreneur|Developer"]}
            wrapper="h2"
            repeat={1}
            className="app__hero-container_text-title"
          />
          <TypeAnimation
            cursor={false}
            sequence={[
              4500,
              "creating unique tech solutions that make a difference.",
            ]}
            wrapper="h3"
            repeat={1}
            className="app__hero-container_text-subtitle"
          />
        </div>
        <div className="app__hero-container_image">
          <img src={heroImage} alt="Bella Yu" />
        </div>
      </div>
    </main>
  );
};

export default Hero;