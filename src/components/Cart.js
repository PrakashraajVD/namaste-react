import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="py-2 px-4 font-bold cursor-pointer text-white bg-red-600 
      rounded-lg m-4"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {cartItems.length === 0 ? (
          <h1 className="text-lg font-bold">No Items in the cart</h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
