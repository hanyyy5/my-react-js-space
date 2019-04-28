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
        this.fileContent3 = '</body><script>'
        this.fileContent4 = '</script></html>'
        this.state = {
            inputContent1: '<p class="test">hello</p>',
            inputContent2: '.test {color: red}',
            inputContent3: '',
            iframeSrc: "",
            timeAgo: "1分钟前"
        }
        this.preview = this.preview.bind(this)
    }
    preview = (event) => {
        console.log(event.target.name)
        this.setState({inputContent1: event.target.value}, ()=> {
             let blob = new Blob([this.fileContent1, this.state.inputContent2,
                                    this.fileContent2, this.state.inputContent1,   
                                    this.fileContent3, this.state.inputContent3,
                                    this.fileContent4], {
                    'type': 'text/html'
             }); 
             this.setState({iframeSrc: URL.createObjectURL(blob)})
        })
    }
    render() {
        const compileData = {
            author: "yuhan",
            title: "Untitled"
        }
        const editIcon = require('../images/pen.png')
        const headerDivIcon =[
            {
                className: "save",
                imgIcon: require('../images/save.png'),
                title: "保存文件"
            },
            {
                className: "setting",
                imgIcon: require('../images/setting.png'),
                title: "设置"
            },
            {
                className: "changeView",
                imgIcon: require('../images/eye.png'),
                title: "改变视图"
            }
           
        ]
        const collectIcon = require('../images/pin.png')
        const bottomArrowIcon = require('../images/bottom_arrow.png')
        const footerLeft = ["控制台", "资源", "评论", "快捷方式"]
        const footerRight = ["删除", "嵌入", "导出", "分享"]
        const openNewIcon = require('../images/open-new.png')
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
                            headerDivIcon.map((item,index)=>{
                                return <span className={`nav-button ${item.className}`} key={index}
                                             title={item.title}>
                                                <img src={item.imgIcon} alt=""/>
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
                    
                    <Form className="edit-box html-box">
                        <div className="edit-resizer html-resizer"></div>
                        <div className="edit-setting html-setting">
                             <span className="setting">
                                   <img src="" alt=""/>
                             </span>
                        </div>
                        <TextArea className="edit-textarea html-resizer" placeholder='编写html'
                                  name="test1"
                                  value={this.state.inputContent1}
                                  onChange={this.preview}/>
                    </Form>
                    <Form className="edit-box css-box">
                        <div className="edit-resizer css-resizer"></div>
                        <div className="edit-setting css-setting"></div>
                        <TextArea className="edit-textarea" placeholder='编写css'
                                  name="test2"
                                  value={this.state.inputContent2}
                                  onChange={this.preview}/>
                    </Form>
                    <Form className="edit-box js-box">
                        <div className="edit-resizer js-resizer"></div>
                        <div className="edit-setting js-setting"></div>
                        <TextArea className="edit-textarea" placeholder='编写js'
                                  name="test1" 
                                  value={this.state.inputContent3}
                                  onChange={this.preview}/>
                    </Form>
                </div>
                <div className="resizer">
                </div>
                <div className="output-container">
                    <iframe src={this.state.iframeSrc} frameBorder="0" id="result" width="100%" height="100%"></iframe>
                </div>
                <footer className="compile-page-footer">
                     <div className="footer-left">
                          {
                               footerLeft.map((item, index)=>{
                                   return <span className="footer-btn" key={index}>{item}</span>
                               })
                          }
                     </div>
                     <div className="footer-right">
                          {
                              footerRight.map((item, index)=>{
                                return <span className="footer-btn" key={index}>{item}</span>
                              })
                          }
                          <span className="usual">
                              最后一次保存为<span className="time-ago">{this.state.timeAgo}</span>
                          </span>
                          <span className="open-new">
                              <img src={openNewIcon} alt=""/>
                          </span>
                     </div>
                </footer>
            </div>
            
        )
    }
}

export default OnlineCompile 