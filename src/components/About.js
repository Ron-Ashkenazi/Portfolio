import "./About.css";
import aboutMeImg from "../images/about-me.png";
import skillsImg from "../images/skills.png";
import educationImg from "../images/education.png";
import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import ScreenWidth from "../hook/ScreenWidth";

const About = forwardRef((props, ref) => {
  const skills = [
    "JavaScript",
    "React",
    "NodeJS",
    "MongoDB",
    "CSS",
    "Python",
    "Java",
    "C",
  ];

  const screenWidth = ScreenWidth();
  const [infoSelector, setInfoSelector] = useState("about-me");

  const delays = screenWidth <= 600 ? [0, 0, 0] : [0.6, 1.2, 1.8];

  const animationDuration = 1.5;

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleSelectorChange = (selector) => {
    setInfoSelector(selector);
  };

  const aboutMeInfo = (
    <motion.div
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: animationDuration, delay: delays[0] }}
      variants={variants}
    >
      <section className="img-wrapper">
        <img src={aboutMeImg} className="about-logo" alt="about-me" />
      </section>
      <h1>About me</h1>
      <p>
        Hi, I'm Ron Ashkenazi, I'm passionate about coding and continuously
        exploring new technologies to improve my skills as a developer. Every
        day, I strive to challenge myself, push boundaries, expanding my
        knowledge and find creative solutions to complex problems. When I'm not
        immersed in code, you'll likely find me either watching or playing
        football, catching up on TV shows and movies, or enjoying a good burger
        with friends. I believe in balancing hard work with downtime, and my
        curiosity keeps me always learning, both in tech and life.
      </p>
    </motion.div>
  );

  const skillsInfo = (
    <motion.div
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: animationDuration, delay: delays[1] }}
      variants={variants}
    >
      <section className="img-wrapper">
        <img src={skillsImg} className="about-logo" alt="skills" />
      </section>
      <h1>Skills</h1>
      <p className="p-skills">Some of the technologies I got to work with:</p>
      <section className="skills-section">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </section>
    </motion.div>
  );

  const educationInfo = (
    <motion.div
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: animationDuration, delay: delays[2] }}
      variants={variants}
    >
      <section className="img-wrapper">
        <img src={educationImg} className="about-logo" alt="education" />
      </section>
      <h1>Education</h1>
      <h2>2020 - 2023</h2>
      <p>HIT - B.Sc, Computer Science</p>
      <h2>2013 - 2016</h2>
      <p>
        High School - Education Campus For Science
        <br /> 5 points Computer Science - Java
        <br /> 5 points Physics
      </p>
    </motion.div>
  );

  const infoSelectorDiv = (
    <div className="div-info-selector">
      <span
        className={infoSelector === "about-me" ? "active" : ""}
        onClick={() => handleSelectorChange("about-me")}
      >
        about me
      </span>
      <span
        className={infoSelector === "skills" ? "active" : ""}
        onClick={() => handleSelectorChange("skills")}
      >
        skills
      </span>
      <span
        className={infoSelector === "education" ? "active" : ""}
        onClick={() => handleSelectorChange("education")}
      >
        education
      </span>
    </div>
  );

  return (
    <div ref={ref} className="about-root">
      {screenWidth <= 600 && infoSelectorDiv}
      <div className="wrapper-about">
        {screenWidth <= 600 ? (
          <>
            {infoSelector === "about-me" && aboutMeInfo}
            {infoSelector === "skills" && skillsInfo}
            {infoSelector === "education" && educationInfo}
          </>
        ) : (
          <>
            {aboutMeInfo}
            {skillsInfo}
            {educationInfo}
          </>
        )}
      </div>
    </div>
  );
});

export default About;
