import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId, extension } = props?.resData;
    const { deliveryTime } = sla;
    const image_url = CDN_URL + cloudinaryImageId + extension;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
                src={image_url}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating + " stars"}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div >
    )
};

export default RestaurantCard;