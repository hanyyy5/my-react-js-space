import React, { Component } from 'react';

class ItemTpl extends Component {
    render() {
        return (<div className="item-tpl-wrapper">
                     <div className="iframe-box">
                        <iframe src="https://codepen.io/kotAndy/full/wZgKyO"
                                allowtransparency="true" 
                                scrolling="no" 
                                frameBorder="0" 
                                id="" 
                                sandbox="allow-scripts allow-pointer-lock allow-same-origin"
                                ></iframe>
                     </div>
                     <div className="author-box">
                          <span className="author-header"></span>
                          <span>
                               <p className="production-name">GLSL: Blinn-phong shading</p>
                               <p className="author-name">Nikita Hlopov</p>
                          </span>
                     </div>
                     <div className="operation-box">
                        <a className="single-stat views" href="https://codepen.io/nikitahl/details/BERzZY">
                            <svg className="icon-eye" width="17px" height="12px">
                                 <svg id="eye" viewBox="0 0 30.5 16.5" width="100%" height="100%"><path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"></path></svg>
                            </svg>
                            <span className="Views-counter">8</span>
                            <span className="visually-hidden">Views</span>
                        </a>
                        <a className="single-stat comments" href="https://codepen.io/nikitahl/details/BERzZY">
                            <svg className="icon-comment" width="12px" height="12px">
                                 <svg id="comment" viewBox="-405.9 238 56.3 54.8" width="100%" height="100%"><path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z"></path></svg>
                            </svg>
                            <span className="Comments-counter">8</span>
                            <span className="visually-hidden">Comments</span>
                        </a>
                        <button id="loves_BERzZY" data-hashid="BERzZY" data-item="pen" className="invisible-button single-stat loves loved-1" aria-pressed="true">
                            <svg className="icon-heart" width="12px" height="12px">
                            </svg>
                            <span className="Hearts-count">2</span>
                            <span className="visually-hidden">Hearts</span>
                        </button>
                     </div>
                </div>)
    }
}

export default ItemTpl