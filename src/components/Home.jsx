import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <main id='main_container'>
            <header className='header'>
                <p className='first_line'>
                    <span className='first-line'>Hi! I'm Michael,</span>
                </p>
                <p className="second_line">
                <span className='second-line'>Welcome to My Website ^_^</span>
                </p>
            </header>
            <nav id='button_links'>
                <Button label="Projects" clickHandler={() => navigate('/projects')} />
                <Button label="Experience" clickHandler={() => navigate('/experience')} />
                <Button label="Github" clickHandler={() => window.location.href = "https://github.com/mroz-michael"} />
            </nav>
        </main>
    );
}

export default Home;
