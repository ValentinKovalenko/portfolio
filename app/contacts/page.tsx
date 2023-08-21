'use client'
import phone from '../../images/phone.png'
import google from '../../images/google.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import facebook from '../../images/facebook.png'
import Image from "next/image";
import './index.css'
import {contactCenter, contactLeft, contactRight} from "@/consts/consts";
import {motion} from "framer-motion";

const Contacts = () => {
  return (
    <>
      <div className='contact'>
        <motion.p
          variants={contactLeft}
          initial="hidden"
          animate="visible"
        >Phone number: 0972127066
        </motion.p>
        <motion.p
          variants={contactRight}
          initial="hidden"
          animate="visible"
        >Email: valentin.kovalenko2288@gmail.com
        </motion.p>
      </div>
      <div className='icons-style'>
        <motion.div
          variants={contactLeft}
          initial="hidden"
          animate="visible"
          className='icon-group'
        >
          <a href='tel: 0972127066'>
            <Image src={phone} alt='' width={45}/>
          </a>
          <a href='mailto: valentin.kovalenko2288@gmail.com'>
            <Image src={google} alt='' width={60}/>
          </a>
        </motion.div>
        <motion.a
          variants={contactCenter}
          initial="hidden"
          animate="visible"
          target='_blank' href='https://www.linkedin.com/in/valentin-kovalenko-9365ab209/'
        >
          <Image src={linkedin}
                 alt=''
                 width={60}/>
        </motion.a>
        <motion.div
          variants={contactRight}
          initial="hidden"
          animate="visible"
          className='icon-group'
        >
          <a target='_blank' href='https://www.facebook.com/profile.php?id=100023353834619'>
            <Image src={facebook}
                   alt=''
                   width={55}/>
          </a>
          <a target='_blank' href='https://github.com/ValentinKovalenko'>
            <Image src={github} alt='' width={60}/>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Contacts;