'use client'
import Link from "next/link";
import './index.css'
import {usePathname} from "next/navigation";
const Header = () => {
  const pathname = usePathname()

  return (
    <header className='container'>
      <Link className={pathname === '/' ? 'active-link' : 'link'} href='/'>Home</Link>
      <Link className={pathname.includes('experience') ? 'active-link' : 'link'} href='/experience'>Experience</Link>
      <Link className={pathname.includes('skills') ? 'active-link' : 'link'} href='/skills'>Skills</Link>
      <Link className={pathname.includes('education') ? 'active-link' : 'link'} href='/education'>Education</Link>
      <Link className={pathname.includes('contacts') ? 'active-link' : 'link'} href='/contacts'>Contacts</Link>
    </header>
  );
};

export default Header;