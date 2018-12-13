import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container';

import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from '../util/route_util'
import Modal from './modal/modal';
import home_index_container from './home/home_index_container';

const App = () => (
  <div className="components-container">
    <Modal />
    <GreetingContainer />
    <Switch> 
      <Route exact path="/" />
      <Route exact path="/homes" component={home_index_container}/>
    </Switch>
  </div>
);

export default App;