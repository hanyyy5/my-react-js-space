import React, { Component } from 'react';
import ItemTpl from './ItemTpl';

class RightContent extends Component {
    render() {
        const partData = [
            {
                className: "create-part0",
                titleContent: "单文件选项"
            },
            {
                className: "create-part1",
                titleContent: "项目选项"
            },
            {
                className: "create-part2",
                titleContent: "发布选项"
            }
        ]
        return (<div className="right-content">
                     <div className="header">
                          <div className="search-box">
                                <form className="search-form search-form-header">
                                   <h1 id="search-title" className="screen-reader-text">Search</h1>
                                    <label className="search-input-wrap">
                                          <svg id="mag" viewBox="0 0 56.7 56.7" width="100%" height="100%">
                                              <path d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z"></path>
                                          </svg>
                                          <input type="search" name="q" className="search-input" placeholder="搜索项目" />
                                     </label>
                                </form>
                          </div>
                     </div>  
                     <div className="parts-wrapper">
                     {
                         partData.map((list,index)=> {
                            return <div className={`create-part ${list.className}`} key={index}>
                                        <h1 className="title">{list.titleContent}</h1>
                                        <div className="all-item-wrapper">
                                             <ItemTpl />
                                        </div>
                                    </div>
                         })
                     }
                     </div>
                    
                </div>)
    }
}

export default RightContent