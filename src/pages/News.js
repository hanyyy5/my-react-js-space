import React, { Component } from 'react';
import {
    Route,
    NavLink
} from 'react-router-dom'

import NewsDetail from './NewsDetail';

const data = [
    {
        id: 1,
        title: "测试标题1",
        content: "测试内容1"
    }, 
    {
        id: 2,
        title: "测试标题2",
        content: "测试内容2"
    }
]

const myobj = {
    name: "yuhan",
    sex: "female",
    hobby: "drawing but has no leisure time now"
}

class NewsPage extends Component {
    render() {
        return (
            <div className="newspage">
                 <h1>选择测试项目：</h1>
                 {data.map((item) => (
                    <div key={item.id}>
                        <NavLink to={{
                            pathname: `${this.props.match.url}/${item.id}`,
                            state: {data: item}
                        }}>
                        {item.title}
                        </NavLink>
                    </div>
                ))}

                {
                    Object.keys(myobj).map((item)=>(
                        <div key={myobj[item]}>
                           <span>{myobj[item]}</span>
                        </div>
                    ))
                }
            </div>
        )
    }
}


const News = ({match}) => {
    return (
        <div>
            <Route path={`${match.path}/:id`} component={NewsDetail}/>
            <Route exact path={match.path} render={(props) => <NewsPage {...props} />}/>
        </div>
    )
}
// class News extends Component {
//     render() {
//         return (
//             <div className="news">
//                 <Header />
//                 <h1 className="title"></h1>
//                 {
//                     data.map( (item)=>(
//                         <div key={item.id}>
//                              <NavLink to={{
//                                  pathname: `${this.props.match.url}/${item.id}`,
//                                  state: {data:item}
//                              }}>
//                                 {item.title}
//                              </NavLink>
//                         </div>
//                     ))
//                 }

//                 <Route path={`${this.props.match.path}/:id`} render={
//                     (props) => {
//                         let data = props.location.state && props.location.state.data;
//                         return (
//                             <div>
//                                 <h1>{data.title}</h1>
//                                 <p>{data.content}</p>
//                             </div>
//                         )
//                     }
//                 }/>
//             </div>
//         )
//     }
// }

export default News
