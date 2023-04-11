import {NavLink} from 'react-router-dom'

const NavBar: React.FC = () => {
  return <nav className=' mx-8 flex justify-between py-4 flex-col md:flex-row text-center'> 
    <p>Sebastian Laskowski</p>
    <ul className=' list-none flex basis-1/3 justify-between flex-col md:flex-row text-center'>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/skills'>Skills</NavLink>
        </li>
        <li>
            <NavLink to='/projects'>Projects</NavLink>
        </li>
    </ul>
  </nav>
};

export default NavBar;
