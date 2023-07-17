// 組件狀態 類組件作為演示 (函數組件需要用到HOOK，等用到再說)

import React from 'react'

class TestComponent extends React.Component {
  // 1.定義組件狀態
  state = {
    // 在這裡可以定義各種屬性 全都是當前狀態
    name: 'Gusty'
  }

  changeName = () => {
    // 3.修改state中的狀態name
    // 注意: 不可以直接做賦值修改 必須通過一個方法setState
    this.setState({
      name: 'Father'
    })
  }

  render () {
    // 2.使用狀態
    return (
      <div>
        this is TestComponent<br />
        {this.state.name}
        <button onClick={this.changeName}>修改name</button>
      </div>
    )
  }
}

/**
 * 總結:
 * 1. 編寫組件狀態其實就是編寫原生js類或函數
 * 2. 定義狀態逼須通過state實例屬性的方法 提供一個對象 名稱是固定的 就叫做state
 * 3. 修改state中的任何屬性 都不可以直接賦值 必須用setState的方法 這個方法來自於繼承得到
 * 4. 這裡的this關鍵詞 很容易出現指向錯誤的問題 上面的寫法是最推薦和最規範的 沒有this指向問題
 * 
 */

// 根組件
function App () {
  return (
    <div className="App">
      <TestComponent />
    </div>
  )
}

export default App
