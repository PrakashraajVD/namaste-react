import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = props?.resData?.info;
    const { deliveryTime } = sla;
    const imageUrl = CDN_URL + cloudinaryImageId;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
                src={imageUrl}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating + " stars"}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div >
    )
};

export default RestaurantCard;