'use client'
import React from 'react';
import Image from "next/image";
import university from '../../images/university.jpg'
import './index.css'
import {motion} from "framer-motion";

const Education = () => {
  return (
    <div className='container-education'>
      <motion.div
        initial={{y: -50, opacity: 0,}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
      >
      <Image className='image-education' src={university} alt=''/>
      </motion.div>
      <motion.div
        initial={{y: 50, opacity: 0,}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
      >
      <p>Bohdan Khmelnytsky National University of Cherkasy (2005-2010)</p>
      <p> Specialty: teacher of physics, computer science, astronomy</p>
      </motion.div>
    </div>
  );
};

export default Education;