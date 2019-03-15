import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

import '../css/index.scss';
import '../css/home.scss';
import LeftNav from '../components/LeftNav';
import RightContent from '../components/LeftNav';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
        this.add = this.add.bind(this)
    }

    add() {
        this.setState((preState) => {
            return {
                count: preState.count + 1
            }
        })
    }

    sub = () => {
        this.setState((preState) => {
            return {
                count: preState.count + 1
            }
        })
    }

    async asyncAdd () {
        await setTimeout(()=>{
            this.setState((preState) => {
                return {
                    count: preState.count + 1
                }
            })
        },1000)
    }
    
    render() {
        return (
            <div className="home-page">
                <LeftNav />
                <RightContent />
                {/* <h1>count的值：{this.state.count}</h1>
				<div className="flexContainer">
					<Button primary onClick={() => this.asyncAdd()}>等待1s再执行count+1</Button>
					<Button primary onClick={this.add}>count+1</Button>
					<Button primary onClick={() => this.sub()}>count-1</Button>
				</div> */}
            </div>
        )
    }
}

export default Home 