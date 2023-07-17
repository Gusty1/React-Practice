// jsx樣式控制
// 1.行內樣式 - 在元素身上綁定一個style屬性即可

// 2.類名樣式(常用) - 在元素身上綁定一個className屬性即可
import './app.css'

const style = {
  color: 'red',
  fontSize: '30px'
}

//動態控制這個active類名 滿足條件才有
const activeFlag = true

function App() {
  return (
    <div className="App">
      <span style={style}>this is span</span>
      <span className={activeFlag ? 'active' : ''}>this is span</span>
    </div>
  );
}

export default App;
