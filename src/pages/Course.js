import React, { Component } from 'react';
import {
    Route,
    NavLink
} from 'react-router-dom'

import Header from '../components/Header';

class Course extends Component {
    render() {
        let { match } = this.props;
        return (
            <div className="list">
                 <Header/>
                 <NavLink to={`${match.url}/front-end`}><li>前端技术</li></NavLink>
                 <NavLink to={`${match.url}/big-data`}><li>大数据</li></NavLink>
                 <NavLink to={`${match.url}/algorithm`}><li>算法</li></NavLink>

                 <Route path={`${match.path}/:name`} render={(props) => <div>{props.match.params.name}</div>}/>
            </div>
        )
    }
}

export default Course 