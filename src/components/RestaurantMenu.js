import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = 'Dummy data';

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwo}
      </p>
      {/* categories accordion */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(showIndex === index ? -1 : index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
