import './Navbar.css'
import  GigButton from './GigButton';  // Component
import LOGO from './../Logo/logo.svg'

function Navbar (){
    return (
        <>
            <nav className="navbar">

                <div className='vertical-center' style={{gap:"4px"}}>
                    {/* Add Brand Logo & Name*/}
                    <img src={LOGO} alt="GeekFood Logo"/>
                    <span>GeekFoods</span>
                </div>

                <div className='nav-links vertical-center'>
                    <div><span>Home</span></div>
                    <div><span>Quote</span></div>
                    <div><span>Restaurant</span></div>
                    <div><span>Foods</span></div>
                    <div><span>Contact</span></div>
                </div>

                <div className='vertical-center'>
                    <GigButton borderKaRadius="8px" backgroundKaColor="#1C4ED8" fontColor="#FFFFFF">
                        Get Started
                    </GigButton>
                </div>
            </nav>
        </>
    )
}

export default Navbar;