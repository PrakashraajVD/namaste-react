import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search 
 * - Restaurant Container
 *      - Restaurant card
 *          - Img
 *          - Name
 *          - Rating
 *          - Cuisine
 *          - Delivery Time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="Company Logo" src="https://t4.ftcdn.net/jpg/06/38/66/19/360_F_638661997_m5z3ltI3a3ApLCbctYVl8Iy4FrTDXLcE.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};


const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId, extension } = props?.resData;
    const { deliveryTime } = sla;
    const image_url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/" + cloudinaryImageId + extension;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
                src={image_url}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div >
    )
};

const resList = [
    {
        id: "123456",
        name: "Pizza Paradise",
        cloudinaryImageId:
            "2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906",
        extension: ".JPG",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        totalRatingsString: "10K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 30,
            lastMileTravel: 3.5,
            slaString: "30 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
        },
    },

    {
        id: "234567",
        name: "Burger Hub",
        cloudinaryImageId:
            "2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457",
        extension: ".JPG",
        locality: "Park Street",
        areaName: "Downtown",
        costForTwo: "₹300 for two",
        cuisines: ["Burgers", "American", "Fast Food"],
        avgRating: 4.5,
        avgRatingString: "4.5",
        totalRatingsString: "15K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 25,
            lastMileTravel: 2,
            slaString: "25 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
        },
    },

    {
        id: "345678",
        name: "Green Bites",
        cloudinaryImageId: "2025/7/17/7b2539ed-4650-424d-8441-f90852db5bc4_251673",
        extension: ".jpg",
        locality: "Residency Road",
        areaName: "South Zone",
        costForTwo: "₹250 for two",
        cuisines: ["Healthy Food", "Salads", "Vegan"],
        avgRating: 4.7,
        avgRatingString: "4.7",
        totalRatingsString: "8K+ ratings",
        veg: true,
        sla: {
            deliveryTime: 20,
            lastMileTravel: 1.5,
            slaString: "20 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
        },
    },

    {
        id: "456789",
        name: "Spice Kingdom",
        cloudinaryImageId: "2025/7/14/28211380-bdd9-4507-a20d-abb795a8c395_1141340%20(1)",
        extension: ".jpg",
        locality: "Brigade Road",
        areaName: "City Center",
        costForTwo: "₹500 for two",
        cuisines: ["Indian", "North Indian", "Biryani"],
        avgRating: 4.2,
        avgRatingString: "4.2",
        totalRatingsString: "12K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 35,
            lastMileTravel: 4,
            slaString: "35 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
        },
    },

    {
        id: "567890",
        name: "Chinese Dragon",
        cloudinaryImageId:
            "2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648",
        extension: ".jpg",
        locality: "Commercial Street",
        areaName: "East District",
        costForTwo: "₹350 for two",
        cuisines: ["Chinese", "Asian", "Thai"],
        avgRating: 4.4,
        avgRatingString: "4.4",
        totalRatingsString: "9K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 28,
            lastMileTravel: 2.8,
            slaString: "28 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
        },
    },

    {
        id: "678901",
        name: "Dessert Delight",
        cloudinaryImageId:
            "2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173",
        extension: ".jpg",
        locality: "Lavelle Road",
        areaName: "West End",
        costForTwo: "₹200 for two",
        cuisines: ["Desserts", "Ice Cream", "Bakery"],
        avgRating: 4.6,
        avgRatingString: "4.6",
        totalRatingsString: "7K+ ratings",
        veg: true,
        sla: {
            deliveryTime: 22,
            lastMileTravel: 1.8,
            slaString: "22 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "25% OFF",
            subHeader: "UPTO ₹60",
        },
    },

    {
        id: "789012",
        name: "Sushi Station",
        cloudinaryImageId:
            "2026/9/2/55ce08c1-453c-4f0a-a027-652e460f2604_70012",
        extension: ".JPG",
        locality: "Indiranagar",
        areaName: "Uptown",
        costForTwo: "₹800 for two",
        cuisines: ["Japanese", "Sushi", "Asian"],
        avgRating: 4.8,
        avgRatingString: "4.8",
        totalRatingsString: "5K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 40,
            lastMileTravel: 5.2,
            slaString: "40 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "15% OFF",
            subHeader: "UPTO ₹150",
        },
    },

    {
        id: "890123",
        name: "South Spice",
        cloudinaryImageId:
            "2024/8/30/e4385639-abe5-4262-ba94-10afde78f413_950150",
        extension: ".jpg",
        locality: "Jayanagar",
        areaName: "South Bangalore",
        costForTwo: "₹300 for two",
        cuisines: ["South Indian", "Dosa", "Idli"],
        avgRating: 4.5,
        avgRatingString: "4.5",
        totalRatingsString: "11K+ ratings",
        veg: true,
        sla: {
            deliveryTime: 25,
            lastMileTravel: 3,
            slaString: "25 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "35% OFF",
            subHeader: "UPTO ₹70",
        },
    },

    {
        id: "901234",
        name: "Pasta Palace",
        cloudinaryImageId:
            "2025/2/19/698e975b-bcbf-490a-ada1-641bcf19f1d6_77870",
        extension: ".jpg",
        locality: "Koramangala",
        areaName: "Tech Hub",
        costForTwo: "₹450 for two",
        cuisines: ["Italian", "Pasta", "Continental"],
        avgRating: 4.1,
        avgRatingString: "4.1",
        totalRatingsString: "6K+ ratings",
        veg: false,
        sla: {
            deliveryTime: 32,
            lastMileTravel: 3.8,
            slaString: "32 mins",
        },
        aggregatedDiscountInfoV3: {
            header: "45% OFF",
            subHeader: "UPTO ₹90",
        },
    },
];

// not using keys (not acceptable) <<<<<< index as key <<<<<<< unique id (best practice)

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantCard key = {restaurant.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <h1>&copy; Namaste Food</h1>
            </div>
            <div className="footer-links">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);