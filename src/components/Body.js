import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    };

    // Conditional Rendering

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="features">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button onClick={()=> {
                        // Filter the Restaurant cards and Update the UI
                        // searchText
                        const filteredList = listOfRestaurants.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(restaurant => restaurant?.info?.avgRating > 4.5);
                        setFilteredRestaurants(filteredList);
                        console.log(listOfRestaurants);
                    }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.length === 0 ? <h1>No Results Found</h1> : filteredRestaurants.map(restaurant => <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)
                }
            </div>
        </div>
    )

    
};

export default Body;