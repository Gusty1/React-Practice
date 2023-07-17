// react如何完成列表渲染?
// 技術方案:map重複渲染是哪個模板就return誰
// 注意事項:遍歷列表同時需要一個類型為number/string不可重複的key，提高diff性能


const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
  return (
    <div className="App">
      {
        songs.map(song => <li key={song.id}>{song.name}</li>)
      }
    </div>
  );
}

export default App;
