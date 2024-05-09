import './RestaurentScreen.css'
import data from '../restrauntData.json'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Restaurents from '../Components/Restaurent'

function RestaurentScreen(){
    const [restrauntData ,setRestrauntData] = useState(data.restrauntData);

    function restrauntByName(e){
        const nameToFilterBy = e.target.value;

        const filterdArray = data.restrauntData.filter((elem)=>{
            if(elem.name.toLowerCase().includes(nameToFilterBy.toLowerCase())){
                return true;
            }
        })

        console.log("from filter by name",filterdArray);

        setRestrauntData(filterdArray);
    }

    function restrauntByRating(e){
        const ratingToFilterBy = e.target.value;

        let filterdArray = data.restrauntData.filter((elem)=>{
            if(elem.rating === ratingToFilterBy){
                return true;
            }
        })

        if(ratingToFilterBy === ""){
            filterdArray = data.restrauntData;
        }

        setRestrauntData(filterdArray);
    }

    return(
        <>
            <Navbar/>
            <main id='restraunts-container'>
                <div id='search-box'>
                    <input type='text' placeholder='Search Restaurants' onChange={restrauntByName} />
                    <input type='number' placeholder='Minimum Rating' onChange={restrauntByRating} />
                </div>
                <div id='restraunt-cards-container'>
                    {
                        restrauntData.map((elem)=>{
                            return(
                                <Restaurents key={elem._id.$oid} name = {elem.name} address = {elem.address} secondLine = {elem.address_line_2} foodType = {elem.type_of_food} rating = {elem.rating} url = {elem.URL} />
                            )
                        })
                    }
                </div>
            </main>
            <Footer/>

        </>
    )
}
export default RestaurentScreen;