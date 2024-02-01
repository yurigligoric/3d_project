import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <header className="flex justify-between">
            <NavLink to="/" className="w-10 h-10 rounded-r-lg bg-white items-center justify-center flex font-bold shadow-md"><p className="text-blue-900">AH</p></NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>About</NavLink>
            <NavLink to="/project" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>Project</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>Contact</NavLink>
        </nav>    
    </header>
  )
}

export default NavBar