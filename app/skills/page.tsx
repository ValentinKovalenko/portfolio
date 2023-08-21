'use client'
import React from 'react';
import {child, container, skillsText} from "@/consts/consts";
import {motion} from "framer-motion";
import './index.css'

const Skills = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className='container-skills'
    >
      <div className='main-skills'>
        {skillsText.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;