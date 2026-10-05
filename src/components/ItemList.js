import { CDN_URL } from '../utils/constants';

const ItemList = ({ items, dummy }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="px-2 pt-2 pb-6 m-2 border-b-2 border-gray-300 text-left flex-wrap flex justify-between"
        >
          <div className="lg:w-9/12 w-full">
            <div className="py-2">
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <p className="pt-1 font-semibold">₹ {item?.card?.info?.price / 100}</p>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="lg:w-3/12">
            <div className="absolute">
              <button className="border-amber-100 border-3 shadow-xl cursor-pointer bg-white text-green-500 font-semibold px-6 rounded-lg mt-19 mx-4">
                ADD
              </button>
            </div>
            <img className="w-30" src={CDN_URL + item?.card?.info?.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
