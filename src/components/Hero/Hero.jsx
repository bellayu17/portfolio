import "aos/dist/aos.css";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "./Hero.scss";

// Dynamically import TypeAnimation to avoid SSR issues
const TypeAnimation = dynamic(() => import("react-type-animation"), { ssr: false });

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
            className="app__hero-title"
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
            sequence={[3000, "A PM | Entrepreneur | Developer"]}
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
          {/* Using Next.js <Image> for better optimization */}
          <Image
            src="/images/IMG_5196.JPG"
            alt="Bella Yu"
            width={500}  // Adjust width according to your design
            height={500} // Adjust height according to your design
            priority  // Ensures image loads quickly
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
