import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from '../containers';
import {HomeView, LoginView, ProtectedView, ProtectedTopView, ProtectedSubView} from '../views';
import {requireAuthentication} from '../components/AuthenticatedComponent';
import { UserAuthWrapper } from 'redux-auth-wrapper';

const DataIsLoaded = UserAuthWrapper({
  authSelector: state => state.data,
  authenticatingSelector: state => state.data.isFetching,
  predicate: data => data.data,
});

export default(
    <Route path='/' component={App}>
        <IndexRoute component={HomeView}/>
        <Route path="login" component={LoginView}/>
        <Route path="protected" component={requireAuthentication(ProtectedView)}>
	    <Route path="top" component={DataIsLoaded(ProtectedTopView)}>
	    	<Route path="sub" component={ProtectedSubView} />
	    </Route>
	</Route>
    </Route>
);
