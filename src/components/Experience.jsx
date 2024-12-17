import { LuScrollText } from "react-icons/lu";
import NavBar from './NavBar';
import '../styles/Experience.css';
import { IoSchoolSharp } from "react-icons/io5";
import { FaUserTie, FaAward } from "react-icons/fa";
import Project from "./Project";
import { SiGithub } from "react-icons/si";

const Experience = () => {
    return(
        
        <section id='experience_section'>
            
            <header id='experience_main_header'>
                <div id='experience_title_container'>
                    <LuScrollText />
                    <h3>Experience</h3>
                </div>
            <NavBar ignoreLogo={"experience"}/>
            </header>

            <section id='academic_experience'>
                <header className="experience_section_header">
                    <IoSchoolSharp/>
                    <p>Academic Experience</p>
                </header>
                <ul>
                    <li>I'm currently in the 2nd year of a Bachelor of Computer Science from Dalhousie University</li>
                    <p className='gpa'>GPA as of Fall 2024: 4.25/4.30</p>
                    <li> Previous degree in Business Studies from Athabasca University</li>
                    <p className="gpa">GPA: 4.0/4.0</p>
                </ul>
            </section>

            <section id='professional_experience'>
                <header className="experience_section_header">
                    <FaUserTie/>
                    <p>Professional Experience</p>
                </header>
            </section>

            <section id='misc_experience'>
                <header className="experience_section_header">
                    <FaAward/>
                    <p>Awards & Other Experience</p>
                </header>
                <ul>
                    <li className='hackathon_container'>
                    <p>NASA Space Apps Challenge Hackathon Halifax - 1st Place Winner.</p>
                        <a href="https://github.com/ElliotGBA/spaceapps2024/blob/master/README.md" target="#">Orrery Web App <SiGithub color="black"/> </a>
                        <p style={{"display": "inline"}}>Developed in collaboration with four other 2nd-year CS students</p>
                    </li>
                </ul>
            </section>

        </section>
    )
}

export default Experience;