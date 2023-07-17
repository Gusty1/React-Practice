
// 如何傳遞參數
// 1. 只需要一個參數 {clickHandler} -> {()=>clickHandler('自定義參數')}
// 2. 需要e又需要額外參數 {(e)=>clickHandler(e,'自定義參數')}

function Hello () {
  const clickHandler = (e, msg) => {
    console.log('函數組件中的事件被觸發了', e, msg)
  }
  return <div onClick={(e) => clickHandler(e, '我是你爸')}>hello</div>
}

function App () {
  return (
    <div className="App">
      <Hello />
    </div>
  )
}

export default App
