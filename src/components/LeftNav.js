import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import {
    NavLink
} from 'react-router-dom'

class LeftNav extends Component {
    render() {
        return (<div className="left-nav">
                    <div className="logo"><h1>JS-Space</h1></div>
                    <ul className="create">
                        <NavLink exact to="/"><li>在线编辑/调试</li></NavLink>
                        <NavLink to="/news"><li>项目</li></NavLink>
                        <NavLink to='/course'><li>发布</li></NavLink>
                    </ul>
                    <ul className="my">
                        <NavLink exact to="/"><li>总览</li></NavLink>
                        <NavLink to="/news"><li>收藏</li></NavLink>
                        <NavLink to='/course'><li>活动</li></NavLink>
                    </ul>
                    <ul className="explore">
                        <NavLink exact to="/"><li>博客</li></NavLink>
                        <NavLink to="/news"><li>文档</li></NavLink>
                    </ul>
                    {/* <ul>
                        <li><NavLink exact to="/">首页</NavLink></li>
                        <li><NavLink to="/news">新闻</NavLink></li>
                        <li><NavLink to='/course'>课程</NavLink></li>
                        <li><NavLink to="/joinUs">加入我们</NavLink></li>
                    </ul> */}
                   
               </div>
        )
    }
}

export default LeftNav