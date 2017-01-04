import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {App} from '../features';


const Channel = props => {
  return (<div>Channel</div>)
}
const Login = props => {
  return (<div>{props.channel}</div>)
}
const Member = props => {
  return (<div>Member</div>)
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="homepage" components={{channel: Channel, member: Member}} />
  </Route>
);

