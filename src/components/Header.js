import { LOGO_URL } from '../utils/constants';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);

  return (
    <div className="flex flex-wrap justify-between bg-blue-600 shadow-lg sm:bg-yellow-300 lg:bg-green-400">
      <div className="logo-container">
        <img className="w-56" alt="Company Logo" src={LOGO_URL}></img>
      </div>
      <div className="flex flex-wrap items-center">
        <ul className="flex flex-wrap p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <Link to="/cart">
            <li className="px-4 font-bold text-xl">Cart - ({cartItems.length} items)</li>
          </Link>
          <button
            className="login-btn"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
