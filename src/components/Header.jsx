import React from 'react'
import Logo from '../assets/img/logo.svg'

export const Header = () => {
  return (
    <header className="container">
      <div className="flex justify-between items-center p-3">
        <div>
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <nav className="flex items-center gap-8">
          <ul className="flex gap-6 items-center">
            <li>
              <a href="#" className='relative inline-block hover:text-[gray] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-[gray] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'>Home</a>
            </li>
            <li>
              <a href="#" className='relative inline-block hover:text-[gray] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-[gray] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'>How it works</a>
            </li>
            <li>
              <a href="#" className='relative inline-block hover:text-[gray] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-[gray] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'>What we do</a>
            </li>
            <li>
              <a href="#" className='relative inline-block hover:text-[gray] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-[gray] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'>Who we help</a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-[gray] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-[gray] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
              >
                Resources
              </a>
            </li>
          </ul>
          <button className="border w-24 h-[52px] rounded-[100px] border-solid border-black">
            Login
          </button>
          <button className="w-[189px] h-[50px] rounded-[100px] bg-black text-white hover:bg-white hover:text-black border hover:border-black">
            Talk to an Expert
          </button>
        </nav>
      </div>
    </header>
  );
}
export default Header;
