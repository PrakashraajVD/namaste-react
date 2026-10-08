import RestaurantCard from './RestaurantCard';
import { useEffect, useState, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurantList from '../utils/useRestaurantList';
import { withPromotedLabel } from './RestaurantCard';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  const listOfRestaurants = useRestaurantList();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks Like You are offline!! Please Check your internet connection</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-wrap">
        <div className="my-4 ms-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((restaurant) =>
                restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="my-4 p-4 flex items-center flex-wrap">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant?.info?.avgRating >= 4.4,
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="my-4 p-4 flex items-center flex-wrap">
          <label>UserName: </label>
          <input
            type="text"
            className="border-2 p-2 m-2 rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap mx-5">
        {filteredRestaurants.length === 0 ? (
          <h1>No Results Found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={'/restaurants/' + restaurant?.info?.id}>
              {restaurant?.info?.avgRating > 4.5 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
