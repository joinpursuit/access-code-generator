import React from 'react';
import $ from 'jQuery';
import {Navbar} from '../index';

const App = React.createClass({
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/auth'
    })
    .done((username) => {
      if(username && username[0] !== '<') {
        console.log(username + ' is logged in!');
        this.setState({username: username});
      } else {
        console.log('No on is logged in');
      }
    })
  },
  render() {
    const {channel, member, chat} = this.props
    return (
      <div>
        {chat}
        {channel}
        {member}
      </div>
    )
  }
});

export default App;
