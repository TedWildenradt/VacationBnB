import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, signup, logout} from './actions/session_actions';
import { fetchHomes, fetchHome } from './actions/home_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: { id: window.currentUser.id }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
  } else {
  store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login
  window.logout = logout
  window.signup = signup
  window.fetchHomes = fetchHomes
  window.fetchHome = fetchHome
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});