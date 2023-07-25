'use client'
import Image from "next/image";
import photo from '../../images/photo.jpg'
import './index.css'
import {motion} from "framer-motion";

const Experience = () => {

  return (
    <div className='container-experience'>
      <motion.div
        className='image-experience'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image style={{borderRadius: 10}} src={photo} alt='' width={400}></Image>
      </motion.div>
      <div className='main-experience'>
        <motion.h3
          initial={{x: 25, opacity: 0,}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.2}}
        >Employment history</motion.h3>
        <motion.p
          initial={{x: 50, opacity: 0,}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1}}
        >2010 - 2015 Sales manager.</motion.p>
        <motion.p
          initial={{x: 75, opacity: 0,}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 2}}
        >2015 - 2020 Expert on the development of the regional Internet network in the Cherkasy region in company UNTC</motion.p>
        <motion.p
          initial={{x: 100, opacity: 0,}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 3}}
        >From September 1st, 2021 till February 17th, 2023 React frontend developer in company Ekreative</motion.p>
      </div>
    </div>
  );
};

export default Experience;