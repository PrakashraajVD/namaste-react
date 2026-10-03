import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = props?.resData?.info;
  const { slaString } = props?.resData?.info?.sla;
  const imageUrl = CDN_URL + cloudinaryImageId;
  return (
    <div className="m-2 p-4 w-50 h-100 bg-gray-100 rounded-lg">
      <img className="rounded-lg" alt="res-logo" src={imageUrl}></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating + ' stars'}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
