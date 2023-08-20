import React from 'react'
import { headerLogo} from "../assets/images";
import { hamburger } from "../assets/icons";
const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between item-center max-container'>
            <a href="/"> <img src={headerLogo} width={130} height={30} alt='logo'/> </a>
        </nav>
    </header>
  )
}

export default Navbar