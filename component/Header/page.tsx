'use client'
import './index.css'
import Links from "@/component/Links/links";
import {links} from "@/consts/consts";

const Header = () => {
  return (
    <header className='container'>
      {links.length && links.map((link, index) =>
        <Links key={index} label={link.label} value={link.value}/>
      )}
    </header>
  );
};

export default Header;