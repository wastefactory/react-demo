import React from 'react';
import { Link } from 'react-router';

const UserList = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <div className="title">
          <h1 className="theme logo-font">User list</h1>
        </div>

        <div className="description">
          <p>So, one of the most important thing for an app is routing, it allows you to navigate and manage different states.</p>
        </div>
        <divider />

        <ul className="user-list">
          <li><Link to="users/2">Michael</Link></li>
          <li><Link to="users/1">Ryan</Link></li>
          <li><Link to="users/3">Dan</Link></li>
          <li><Link to="users/4">Matt</Link></li>
          <li><Link to="users/5">Tobias</Link></li>
          <li><Link to="users/6">Sebastian</Link></li>
        </ul>        
      </div>
    );
  }
});

export default UserList;