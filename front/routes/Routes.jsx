import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {App, Login} from '../features';


const Channel = props => {
  return (<div>Channel</div>)
}
// const Login = props => {
//   return (<div>{props.channel}</div>)
// }
const Member = props => {
  return (<div>Member</div>)
};

export default (
  <Route path="/">
    <IndexRoute component={Login} />
    <Route component={App}>
				<Route path="homepage" components={{channel: Channel, member: Member}} />
		</Route>
  </Route>
);

