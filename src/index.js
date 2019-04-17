import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import './css/index.scss';

import Home from './pages/Home';
import OnlineCompile from "./pages/OnlineCompile"
import Login from './pages/Login';
import News from './pages/News';
import Course from './pages/Course';
import JoinUs from './pages/JoinUs';
import store from './pages/store';

const App = () => (
    <Router>
        <div className="index-page">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/onlineCompile" component={OnlineCompile}/>

                <Route path="/login" component={Login}/>
                <Route path="/news" component={News}/>

                <Route path="/course" component={Course}/>
                <Route path="/joinUs" render={(props) => <JoinUs {...props} />}/>
                <Route path="/error" render={(props)=><div><h1>404 not found!</h1></div>}/>
                <Route path="*" render={(props)=><Redirect to='/error'/>}/>
            </Switch>
        </div>
    </Router>
)
ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
   
    document.getElementById('root')
)



