import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class Counter extends Component {
    render() {
        const { value, onIncreaseClick, onDecreaseClick } = this.props
        return (
            <div>
                <span style={{fontSize: '16px', margin: '50px', display: 'block'}}>{value}</span> 
                <button onClick={onIncreaseClick}>+计数器</button> 
                <button onClick={onDecreaseClick}>-计数器</button> 
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired, //数字且必须写入
    onIncreaseClick: PropTypes.func.isRequired
}


//map reduex state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

//map redux actions to component props
function mapDispathToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch({
            type: 'decrease'
        }),
        onDecreaseClick: () => dispatch({
            type: "increase"
        })
    }
}

const JoinUS = connect(mapStateToProps, 
                      mapDispathToProps
            )(Counter)

export default JoinUS 