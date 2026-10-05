import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const { title, itemCards } = data;
  const itemCount = data?.itemCards.length;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between flex-wrap cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {title} ({itemCount})
          </span>
          <span>🔻</span>
        </div>
        {showItems && <ItemList items={itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
