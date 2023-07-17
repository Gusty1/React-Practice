import React from 'react'

// 通過類組件的方式修改Counter

class Counter extends React.Component {
  // 通過state定義組件狀態
  state = {
    count: 0
  }

  changeCount = () => {
    //修改state
    // react這個體系下 '數據不可變'
    // value永遠都是上個count值+1
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <button onClick={this.changeCount}>{this.state.count}</button>
    )
  }
}


// 根組件
function App () {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

export default App
