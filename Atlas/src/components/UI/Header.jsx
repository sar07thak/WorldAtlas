import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
     <header className='shadow-md shadow-[#242424]'>
      <div>
        <div className="px-28 md:px-72 py-16 flex justify-between items-center  ">
          <div className="font-bold ">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav>
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

          {/* <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div> */}
        </div>
      </div>
    </header>
    </>
  )
}
