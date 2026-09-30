import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <h1>&copy; Namaste Food</h1>
      </div>
      <div className="footer-links">
        <ul>
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
