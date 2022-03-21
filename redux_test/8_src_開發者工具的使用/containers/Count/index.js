import React, { Component } from 'react'
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
//引入connect用於連接UI組件與redux
import { connect } from 'react-redux'


//定義UI組件
class Count extends Component {

  //加法
  increment = () => {
    const selectValue = parseInt(this.selectNumber.value)
    this.props.jia(selectValue)
  }

  //減法
  decrement = () => {
    const selectValue = parseInt(this.selectNumber.value)
    this.props.jian(selectValue)
  }

  //奇數再加
  incrementIfOdd = () => {
    const selectValue = parseInt(this.selectNumber.value)
    if (this.props.count % 2 !== 0) {
      this.props.jia(selectValue)
    }
  }

  //異步加
  incrementAsync = () => {
    const selectValue = parseInt(this.selectNumber.value)
    this.props.jiaAsync(selectValue, 500)
  }

  render() {
    return (
      <div>
        <h1>我是Count組件</h1>
        <h4>當前求和為{this.props.count},下方組件總人數為:{this.props.renshu}</h4>
        <select ref={(c) => { this.selectNumber = c }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>當前求和為奇數再加</button>&nbsp;
        <button onClick={this.incrementAsync}>異步加</button>&nbsp;
      </div>
    )
  }
}

//使用connect()()創建並暴露一個Count的容器組件
export default connect(
  (state) => ({
    count: state.he,
    renshu: state.rens.length
  }),

  // mapDispatchToProps的一般寫法
  // (dispatch) => ({
  //   jia: (number) => {
  //     dispatch(createIncrementAction(number))
  //   },
  //   jian: (number) => {
  //     dispatch(createDecrementAction(number))
  //   },
  //   jiaAsync: (number, time) => {
  //     dispatch(createIncrementAsyncAction(number, time))
  //   },
  // })

  // mapDispatchToProps的簡寫
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count)