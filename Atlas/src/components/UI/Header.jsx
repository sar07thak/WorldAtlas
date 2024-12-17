import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

export const Header = () => {
  const [show,setshow] = useState(false);

  const handleButtonToggle = () =>{
   return setshow(!show);
  }
  return (
    <>
     <header className=' bg-[#202020] fixed top-[0px] z-[100] px-28 md:px-72  h-40  flex justify-between  items-center '>
        {/* <div className="px-28 md:px-72  h-40  flex justify-between  items-center border"> */}
          <div className="">
            <NavLink to="/">
              <h1 className='font-bold text-5xl gradient-text '>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li className='gradient-text ' id='words'>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className='gradient-text' id='words'>
                <NavLink to="/about">About</NavLink>
              </li>
              <li className='gradient-text' id='words'>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li className='gradient-text' id='words'>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu ">
            <button 
            className=' px-8 py-3 shadow-md hover:shadow-md hover:shadow-black shadow-gray-400  text-white text-3xl hover:border-[#242424] '
            onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        {/* </div> */}
      
    </header>
    </>
  )
}
