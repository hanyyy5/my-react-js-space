import React, { Component } from 'react'

class ItemTpl extends Component {
    render() {
        const headerIcon = require('../images/cute_lay.jpeg')
        return (<div className="item-tpl-wrapper">
                     <div className="iframe-box">
                               <iframe src="https://codepen.io/kotAndy/full/wZgKyO"
                                    allowtransparency="true" 
                                    name="iframe_some"
                                    scrolling="no" 
                                    frameBorder="0" 
                                    id="" 
                                    sandbox="allow-scripts allow-pointer-lock allow-same-origin"
                                ></iframe>
                                <a href="https://codepen.io/H2xDev/pen/qwrzoa" className="cover-link">
                                    <span className="visually-hidden">
                                        Composite Operation Experiment
                                    </span>
                                </a>
                                <div className="meta-overlay" tabIndex="0">
                                    <div className="pen-actions">
                                        <a href="#0" className="button mini-button button-dark add-to-collection-from-flyout">+ 添加到收藏</a>
                                    </div>
                                </div>
                     </div>
                     <div className="meta">
                        <div className="meta-container">
                            <div className="meta-avatar">
                                <a className="username" href="/ahmadbassamemran">
                                     <img src={headerIcon} alt="" width="40" height="40"/>
                                </a>
                            </div>

                            <div className="meta-title-name">
                                    <h3 className="item-title">
                                        <a href="https://codepen.io/ahmadbassamemran/pen/zXwZKo" title="Awesome accordion menu using only HTML &amp; CSS">
                                            Awesome accordion menu using only HTML &amp; CSS
                                        </a>
                                    </h3>
                                    <div className="user">
                                        <a className="username" href="/ahmadbassamemran">
                                            <span>Ahmad Emran</span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="stats">
                            <a className="single-stat views" href="https://codepen.io/ahmadbassamemran/full/zXwZKo">
                                <svg className="icon-eye" width="17px" height="12px">
                                    <svg id="eye" viewBox="0 0 30.5 16.5" width="100%" height="100%"><path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"></path></svg>
                                </svg>
                                6,724
                                <span className="visually-hidden">
                                      Views
                                </span>
                            </a>
                            <a className="single-stat comments" href="https://codepen.io/ahmadbassamemran/details/zXwZKo">
                                <svg className="icon-comment" width="12px" height="12px">
                                    <svg id="comment" viewBox="-405.9 238 56.3 54.8" width="100%" height="100%"><path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z"></path></svg>
                                </svg>
                                3
                                <span className="visually-hidden">
                                    Comments
                                </span>
                            </a>
                            <button id="loves" className="invisible-button single-stat loves loved-0">
                                <svg className="icon-heart" width="12px" height="12px">
                                    <svg id="heart" viewBox="0 0 100 92" width="100%" height="100%"><title>Love</title><path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71z"></path></svg>
                                </svg>
                                <span className="count">
                                   254
                                </span>
                                <span className="visually-hidden">
                                   Hearts
                                </span>
                            </button>
                        </div>
                     </div>
                </div>
        )
    }
}

export default ItemTpl