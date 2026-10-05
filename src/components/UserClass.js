import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + 'Child constructor');
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
      },
    };
  }

  async componentDidMount() {
    this.timer = setInterval(() => console.log('set Interval called'), 1000);
    // console.log(this.props.name + 'Child Component Did Mount');
    const data = await fetch('https://api.github.com/users/prakashraajVD');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count || this.state.count2 !== prevState.count2) {
    }
    // console.log('Component did update');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log('Component will unmount');
  }

  render() {
    // console.log('FirstChild Render');
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: prakashraajvd2004@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
