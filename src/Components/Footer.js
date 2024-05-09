import './Footer.css'
import logipsum from '../Logo/logipsum.png'
import facebook from '../Logo/facebook.webp'
import twitter from '../Logo/twitter.png'
import github from '../Logo/github.png'
import instagram from '../Logo/instagram.webp'
import basketball from '../Logo/basketball.png'

function Footer(){
    return(
        <footer>
            <div>
            <img src={logipsum} alt='logo' id='logo'/>
            <span>Loripsum</span>
            </div>
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            <ul id='links'>
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blogs</li>
            </ul>
            <div id='social-media-icons'>
                <img src={facebook} alt = "facebook icon" />
                <img src={instagram} alt = "instagram icon" />
                <img src={twitter} alt = "twitter icon" />
                <img src={github} alt = "github icon" />
                <img src={basketball} alt = "basketball icon" />
            </div>
        </footer>
    );
};

export default Footer;