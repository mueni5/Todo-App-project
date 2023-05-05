import { NavLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink exact to='/' > Form </NavLink>
            <NavLink exact to= '/todos' > todo </NavLink>
            
            </nav>

    )
}
export default Navbar;