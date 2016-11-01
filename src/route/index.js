import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from 'layout';
import Home from 'view/home';
import YourSchedule from 'view/your-schedule';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="your-schedule" component={YourSchedule} />
  </Route>
);
