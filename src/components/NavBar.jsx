import { NavLink } from "react-router-dom"
import {useState, useEffect} from 'react'

const NavBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 898);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 898);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen]);

  return (
    <header  style={{position: 'absolute', zIndex:'100', left: '0', right: '0'}}>
      {/* <div className={`flex justify-between ${window.innerWidth < 798 ? px-2 : px-10 py-4}`}>  */}
      <div className={`flex justify-between ${isSmallScreen ? 'px-12 py-2' : 'px-48 py-8'}`}>
            <NavLink to="/" className="w-10 h-10 rounded-r-lg bg-white items-center justify-center flex font-bold shadow-md"><p className="text-blue-900">Ern</p></NavLink>
        <nav className="flex text-lg gap-7 font-medium ml-auto">
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>About</NavLink>
            <NavLink to="/project" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>Project</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>Contact</NavLink>
        </nav>    

      </div>
    </header>
  )
}

export default NavBar