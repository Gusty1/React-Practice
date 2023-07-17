import React from 'react'
// 函數組件的創建和渲染
// 創建
function Hello () {
  const clickHandler = () => {
    alert('函數組件中的事件被觸發了')
  }
  return <div onClick={clickHandler}>hello</div>
}

// 渲染 <Hello/> 或 <Hello></Hello>


//類組件的創建和渲染
//創建
class HelloComponent extends React.Component {
  // 事件回調函數(標準寫法 避免this指向問題)
  // 這樣寫 回調函數中的this指向的是當前的組件的實例對象
  clickHandler = () => {
    alert('類組件中的事件被觸發了')
  }
  render () {
    return <div onClick={this.clickHandler}>this is a class Component</div>
  }
}
// 渲染 <HelloComponent/> 或 <HelloComponent></HelloComponent>

function App () {
  return (
    <div className="App">
      {/*渲染Hello組件*/}
      <Hello />
      {/*渲染類組件*/}
      <HelloComponent />
    </div>
  )
}

export default App
