import { useEffect, useState } from 'react';

const User = ({ name }) => {
  useEffect(() => {
    const timer = setInterval(() => console.log('Set Interval called'), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Erode</h3>
      <h4>Contact: prakashraajvd2004@gmail.com</h4>
    </div>
  );
};

export default User;
