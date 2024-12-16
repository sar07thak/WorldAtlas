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
     <header className=' shadow-md bg-[#202020] py-16 h-40 shadow-[#242424] '>
        <div className="px-28 md:px-72   flex justify-between items-center  ">
          <div className="font-bold ">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      
    </header>
    </>
  )
}
