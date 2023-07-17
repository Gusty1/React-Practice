import React from 'react'

class Counter extends React.Component {
  // 1. 聲明用來控制input value的react組件自己的狀態
  state = {
    message: 'this is message'
  }

  inputChange = (e) => {
    console.log('change事件觸發了')
    console.log(e)
    // 4. 拿到輸入框的最新的值 交給state的message
    this.setState({
      message: e.target.value
    })
  }

  render () {
    return (
      // 2. 給input框的value屬性綁定 react state
      // 3. 給input框綁定一個change事件 為了拿到框的值
      <input type="text" value={this.state.message} onChange={this.inputChange} />
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
