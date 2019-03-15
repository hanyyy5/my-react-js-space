import React, { Component } from 'react'
import Header from '../components/LeftNav'

class NewsDetail extends Component {
    
      constructor(props) {
          super(props)
          this.id = props.match.params.id;
          this.state = {
              data: {},
              hasData: true
          }
      }

      componentWillMount() {
        this.getNewsDetail();
      }
      getNewsDetail() {
        fetch(`http://localhost:3003/data`).then(res => res.json())
            .then(resData => {
               if (resData != null) {
                 this.setState({data: resData});
               } else {
                  this.setState({hasData: false})
               }
            })
      }
      //找不到数据重定向到404页面
      renderNoDataView() {
          return <Route path="*" render={() => <Redirect to="/error"/>}/>
      }

      renderView() {
        let title   = this.state.data && this.state.data.title;
        let content = this.state.data && this.state.data.content;
        return(
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>  
        )
      }

      render() {
        return this.state.hasData ? this.renderView() : this.renderNoDataView()
      }

}
export default NewsDetail
