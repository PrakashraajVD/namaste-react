import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constructor ');
  }

  componentDidMount() {
    // console.log('Parent Component Did Mount');
  }

  render() {
    // console.log('Parent Render');
    return (
      <div className="about">
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is a food Ordering App</h2>
        {/* <UserClass name={'FirstChild'} location={'Erode (class)'} /> */}
        <User />
      </div>
    );
  }
}

export default About;
