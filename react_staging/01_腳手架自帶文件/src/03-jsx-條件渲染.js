// 條件渲染
// 技術方案: 3元表達式(常用) 和 邏輯 && 運算

const flag = true

function App() {
  return (
    <div className="App">
      {
        flag?<span>GGGGG</span>:null
        // true && <span>YYYYY</span>
      }
    </div>
  );
}

export default App;
