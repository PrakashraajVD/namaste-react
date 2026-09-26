import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    //Local State Variable - Super Powerful variables
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // const arr =  useState(resList);
    // const [listOfRestaurants, setListOfRestaurants] =  arr;
    
    // const listOfRestaurants = arr[0];

    // const setListOfRestaurants = arr[1];
    

    return (
        <div className="body">
            {/* <div className="search">
                Search
            </div> */}
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(restaurant => restaurant.avgRating > 4.5);
                        setListOfRestaurants(filteredList); 
                        console.log(listOfRestaurants);
                    }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
};

export default Body;