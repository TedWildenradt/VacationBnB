import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container';

import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from '../util/route_util'
import Modal from './modal/modal';
import HomeIndexContainer from './home/home_index_container';
import HomeShowContainer from './home/home_show_container';


const App = () => (
  <div className="components-container">
    <Modal />
    <GreetingContainer />
    <Switch> 
      <Route exact path="/" />
      <Route exact path="/homes" component={HomeIndexContainer}/>
      <Route path="/homes/:id" component={HomeShowContainer}/>
    </Switch>
  </div>
);

export default App;