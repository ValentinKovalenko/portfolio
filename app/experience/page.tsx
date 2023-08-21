'use client'
import Image from "next/image";
import photo from '../../images/photo.jpg'
import './index.css'
import {motion} from "framer-motion";
import {textExperience} from "@/consts/consts";

const Experience = () => {
  return (
    <div className='container-experience'>
      <motion.div
        className='image-experience-container'
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
      >
        <Image className='image-experience' src={photo} alt=''></Image>
      </motion.div>
      <div className='main-experience'>
        {
          textExperience.length && textExperience.map((text) =>
            <motion.p
              key={text.id}
              initial={{x: 25 * text.id, opacity: 0,}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5 * text.id}}
            >{text?.text}</motion.p>
          )
        }
      </div>
    </div>
  );
};

export default Experience;