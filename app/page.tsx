'use client'
import Image from "next/image";
import home from '../images/home.jpg'
import {motion} from "framer-motion";
import {child, container, lettersHead} from "@/consts/consts";

export default function Home() {

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className='container-home'
    >
      <div className='container-home'>
      <div className='main-home'>
        {lettersHead.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
      <div className='image-container'>
        <Image className='image' src={home} alt=''/>
      </div>
      </div>
    </motion.div>
  )
}
