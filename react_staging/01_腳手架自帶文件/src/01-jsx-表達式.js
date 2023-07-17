// 1.識別常規變量
const name = 'Gusty'
// 2.原生JS方法調用
const getAge = () => {
  return 22
}
// 3.三元運算符(常用)
const flag = false

function App() {
  return (
    <div className="App">
      {name}
      {getAge()}
      {flag ? '很好' : '你爛'}
    </div>
  );
}

export default App;
