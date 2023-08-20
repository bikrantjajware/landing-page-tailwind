import React from 'react'
import { headerLogo} from "../assets/images";
import { hamburger } from "../assets/icons";
import {navLinks} from '../constants';

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between item-center max-container'>
            <a href="/"> <img src={headerLogo} width={130} height={30} alt='logo'/> </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map(item => (
                <li key={item.label} className='fonts-montserrat leading-normal text-lg text-slate-gray'>
                  {item.label}
                </li>
              )) }
            </ul>
            <div className='lg:hidden'>
              <img src={hamburger} alt="Hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar