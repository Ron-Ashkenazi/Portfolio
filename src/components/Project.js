import "./Project.css";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { RiExternalLinkFill } from "react-icons/ri";
import { motion } from "framer-motion";
import ScreenWidth from "../hook/ScreenWidth";

const MotionElement = ({
  children,
  delay,
  duration,
  className,
  variants,
  amount,
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: amount }}
    transition={{ duration, delay }}
    variants={variants}
    className={className}
  >
    {children}
  </motion.div>
);

const Project = ({ index, project }) => {
  const [rightOrLeft, setRightOrLeft] = useState("");
  const imgAmount = 0.5;
  const infoAmount = 0.5;
  const screenWidth = ScreenWidth();
  const infoButtonsAmount = screenWidth <= 900 ? 0.5 : 0.1;
  const yValue =
    screenWidth < 600
      ? 5
      : screenWidth < 900
      ? 10
      : screenWidth < 1200
      ? 25
      : 50;

  useEffect(() => {
    setRightOrLeft(index % 2 === 0 ? "right" : "left");
  }, [index]);

  const delays = [1.2, 1.4, 1.6, 1.8];
  const animationDurationInfoDiv = 0.6;

  const variantsInfoDiv = {
    hidden: { opacity: 0, y: yValue },
    visible: { opacity: 1, y: 0 },
  };

  const variantsImgDiv = {
    hidden: { opacity: 0, x: rightOrLeft === "right" ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  const InfoDiv = (
    <div className={`project-info-div ${rightOrLeft}`}>
      <MotionElement
        delay={delays[0]}
        duration={animationDurationInfoDiv}
        className=""
        variants={variantsInfoDiv}
        amount={infoAmount}
      >
        <h1>{project.title}</h1>
      </MotionElement>
      <MotionElement
        delay={delays[1]}
        duration={animationDurationInfoDiv}
        className="info"
        variants={variantsInfoDiv}
        amount={infoAmount}
      >
        <p>{project.info}</p>
      </MotionElement>
      <MotionElement
        delay={delays[2]}
        duration={animationDurationInfoDiv}
        className="techs"
        variants={variantsInfoDiv}
        amount={infoAmount}
      >
        <p>{project.technologies.join(" | ")}</p>
      </MotionElement>
      <MotionElement
        delay={delays[3]}
        duration={animationDurationInfoDiv}
        className="info-buttons-div"
        variants={variantsInfoDiv}
        amount={infoButtonsAmount}
      >
        {project.visit && (
          <a href={project.visit}>
            <RiExternalLinkFill
              className="info-button visit-button"
              style={{ "--hover-color": project.visitColor }}
            />
          </a>
        )}
        {project.github && (
          <a href={project.github}>
            <FaGithub className="info-button github-button" />
          </a>
        )}
        {project.youtube && (
          <a href={project.youtube}>
            <TbBrandYoutubeFilled className="info-button youtube-button" />
          </a>
        )}
      </MotionElement>
    </div>
  );

  const ImgDiv = (
    <MotionElement
      delay={0.2}
      duration={1}
      className="project-img-div"
      variants={variantsImgDiv}
      amount={imgAmount}
    >
      <img
        className="bg-img"
        src={project.bgImg}
        alt={`alt-${project.title}`}
      />
      <img
        className="main-img"
        src={project.img}
        alt={`alt-${project.title}`}
      />
    </MotionElement>
  );

  return (
    <li className="project-root">
      <div className={`project-wrapper project-root-${rightOrLeft}`}>
        {rightOrLeft === "right" ? (
          <>
            {ImgDiv}
            {InfoDiv}
          </>
        ) : (
          <>
            {InfoDiv}
            {ImgDiv}
          </>
        )}
      </div>
    </li>
  );
};

export default Project;
