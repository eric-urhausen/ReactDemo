import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import reducers from './reducers';
import SideBar from './components/sidebar';
import Dashboard from './containers/dashboard';
import Profile from './components/profile';
import Partners from './containers/partners';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <SideBar />
        <div className="col-sm-8" style={{backgroundColor:'#eee',height:'100vh'}}>
          <Switch>
            <Route path="/dashboard/:id" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/partners" component={Partners} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
