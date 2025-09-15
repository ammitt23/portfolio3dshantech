import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// 1. Import the icons you need at the top of the file
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* --- ✨ ATTRACTIVE SOCIALS & CV SECTION --- */}
      <div className="mt-20 flex flex-wrap items-center justify-start gap-10">
        {/* Social Media Icons with Hover Effect */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ammitt23"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-white text-5xl transform hover:scale-125 transition-transform duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-kumar-a90214222" // Corrected URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white text-5xl transform hover:scale-125 transition-transform duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/AMO2023/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="text-white text-5xl transform hover:scale-125 transition-transform duration-300"
          >
            <SiLeetcode />
          </a>
        </div>

        {/* Decorated CV Download Button */}
        <a
          href="public/Amit resume.pdf" // IMPORTANT: See note below
          download="Amit-Kumar-Resume.pdf"
          className="bg-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-purple-500/50 hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
