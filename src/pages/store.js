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


//reducer
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case "increase": 
              return { count: count+1 }
        case "decrease": 
              return { count: count-1 }
        default: 
              return state
    }
}
// 创建store
const store = createStore(counter);

export default store