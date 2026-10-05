import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-between p-4 m-2 text-lg border-solid border-black border-2">
      <div className="font-bold">
        <h1>&copy; Namaste Food</h1>
      </div>
      <div>
        <ul className="flex flex-wrap space-x-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
