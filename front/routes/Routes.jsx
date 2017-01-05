import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {App, ChatBarContainer} from '../features';


const Channel = props => {
  return (<div>Channel</div>)
}
const Login = props => {
  return (<div>Login</div>)
}
const Member = props => {
  return (<div>Member</div>)
};

export default (
  <Route path="/">
    <IndexRoute component={Login} />
    <Route component={App}>
      <Route path="homepage" components={{channel: Channel, member: Member, chat: ChatBarContainer}} />
    </Route>
  </Route>
);

