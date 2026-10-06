import { useContext } from 'react';
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = props?.resData?.info;
  const { slaString } = props?.resData?.info?.sla;
  const imageUrl = CDN_URL + cloudinaryImageId;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-3 p-4 w-60 h-110 bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img className="rounded-lg" alt="res-logo" src={imageUrl}></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating + ' stars'}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mb-5 bg-black text-white p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
