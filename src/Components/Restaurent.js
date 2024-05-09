import './Restaurent.css'
import { FaStar } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

function Restaurent({name, address, secondLine, foodType, rating, url}){

return(
    <div className='card'>
        <div className='name-and-rating padding'>
            <h3>{name}  {rating} <FaStar style={{
                color:"#facc15"
            }}/></h3>
        </div>
        <div className='address padding'>
            <p><FaLocationDot /> {address}</p>
            <p>{secondLine}</p>
        </div>
        <div className='food-type-and-url padding'>
            <div>
                <p ><PiForkKnifeFill /> {foodType}</p>
            </div>
            <a href={url}>Visit menu</a>
        </div>
    </div>
    )
}

export default Restaurent;