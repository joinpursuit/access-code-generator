//Vanessa
//all users(usernames) will be called from the database and displayed in a list

import React from 'react';
import $ from 'jQuery';
import {User} from '../user/User.jsx';

const Users = React.createClass({
	componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/users'
    })
    .done((users) => {
      if(users > 0) {
        console.log(users + 'displaying users');
        this.setState({users: users});
      } else {
        console.log('there are no users');
      }
    })
   }
  , 
  render() {
    return (
      <div>
        <User users={this.state} />
      </div>
    )
  }
});

export default Users;