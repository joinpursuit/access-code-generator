//Vanessa
//one user should be displayed right now only the username from the database

import React from 'react';
import $ from 'jQuery';

const User = React.createClass({
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/users/:username'
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
        
      </div>
    )
  }
});

export default User;