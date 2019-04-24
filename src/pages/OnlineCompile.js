import React, { Component } from 'react'
import '../css/online-compile.scss';
class OnlineCompile extends Component {
    render() {
        const compileData = {
            author: "yuhan",
            title: "Untitled"
        }
        return (
            <div className="online-compile">
                <header>
                    <div className="item-title-area">
                        <div className="item-title-text">
                            <h1 className="item-title" id="item-title">
                                <span className="item-title-link">{compileData.title}</span>
                            </h1>
                            <div className="by">创建者<a class="item-owner-link" href="/hanyyy5">{compileData.author}</a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            
        )
    }
}

export default OnlineCompile 