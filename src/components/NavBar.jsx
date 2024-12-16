import { SiGithub } from "react-icons/si";
import { TbTreadmill } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import '../styles/Navbar.css';

const NavBar = () => {
    
    return (
        <nav id='nav_links'>
            <a href='/'> <FaHome fill="black"/> </a>
            <a href='/experience'> <TbTreadmill color="black"/></a>
            <a href="https://github.com/mroz-michael/"><SiGithub fill="black"/></a>
        </nav>
    )
}

export default NavBar;