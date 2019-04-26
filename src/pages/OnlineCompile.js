import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import '../css/online-compile.scss';
class OnlineCompile extends Component {
    constructor(props) {
        super(props)
        this.fileContent1 = '<!DOCTYPE html>' + 
                            '<html lang="en">' + 
                            '<head>' + 
                                '<meta charset="UTF-8">' + 
                                '<meta name="viewport" content="width=device-width, initial-scale=1.0">' + 
                                '<meta http-equiv="X-UA-Compatible" content="ie=edge">' + 
                                '<title>Document</title>' + 
                            '</head>' + 
                            '<style>'
        this.fileContent2 = '</style><body>'
        this.fileContent3 = '</body></html>'
        this.state = {
            inputContent1: '<p class="test">hello</p>',
            inputContent2: '.test {color: red}',
            iframeSrc: ""
        }
        this.preview = this.preview.bind(this)
    }
    preview = (event) => {
        this.setState({inputContent1: event.target.value}, ()=> {
             let ifr = document.getElementById("result")
             let blob = new Blob([this.fileContent1, this.state.inputContent2,
                                    this.fileContent2, this.state.inputContent1,   
                                    this.fileContent3 ], {
                    'type': 'text/html'
             }); 
             this.setState({iframeSrc:  URL.createObjectURL(blob) })
        })
    }

    render() {
        const compileData = {
            author: "yuhan",
            title: "Untitled"
        }
        const editIcon = require('../images/pen.png')
        const headerDivIcon = {
            save: require('../images/save.png'),
            setting: require('../images/setting.png'),
            changeView: require('../images/eye.png')
        }
        const collectIcon = require('../images/pin.png')
        const bottomArrowIcon = require('../images/bottom_arrow.png')
        return (
            <div className="online-compile">
                <header>
                    <div className="item-title-area">
                        <div className="item-title-text">
                            <h1 className="item-title" id="item-title">
                                <span className="item-title-link">{compileData.title}</span>
                                <img src={editIcon} alt=""/>
                            </h1>
                            <div className="by">创建者<a className="item-owner-link" href="/hanyyy5">{compileData.author}</a>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-wrap">
                         {
                            Object.keys(headerDivIcon).map(key => {
                                return <span className={`nav-button ${key}`} key={key}>
                                             <img src={headerDivIcon[key]} alt=""/>
                                       </span>
                            })
                         }
                         <span className="nav-button my-collect">
                                <img src={collectIcon} alt=""/>
                                <img src={bottomArrowIcon} alt=""/>
                         </span>
                    </div>
                </header>
                <div className="edit-wrapper">
                    <Form>
                        <TextArea placeholder='编写html' style={{ minHeight: 200 }} 
                                  value={this.state.inputContent1}
                                  onChange={this.preview}/>
                    </Form>
                </div>
                <div className="output-container">
                    <iframe src={this.state.iframeSrc} frameBorder="0" id="result"></iframe>
                </div>
            </div>
            
        )
    }
}

export default OnlineCompile 