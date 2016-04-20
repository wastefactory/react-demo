import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main_layout';
import SearchLayout from './components/search_layout';

// Pages
import Home from './components/home/home';
import UserList from './components/users/user_list';
import UserProfile from './components/users/user_profile';
import Routing from './components/route/router';
import JSX from './components/jsx/jsx';
import Render from './components/render/render';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>

      <Route path="/" component={Home} />
      <Route path="render" component={Render} />
      <Route path="jsx" component={JSX} />
      <Route path="route" component={Routing} />

      <Route path="users">
        <Route component={SearchLayout}>
          <IndexRoute component={UserList} />
        </Route>
        <Route path=":userId" component={UserProfile} />
      </Route>

    </Route>
  </Router>
);