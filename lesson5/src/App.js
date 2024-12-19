import { useState, memo, useCallback,useRef, forwardRef, useImperativeHandle } from 'react';
import Lesson5 from './Lesson5';

//默認渲染機制，子跟著覆一起渲染
//使用memo進行緩存
//memo是只有props相同時才不會重新渲染
const MemoSon = memo(function Son(props) {
    console.log('我是子組件，我重新render了');
    return <div>我是Son{props.count}</div>;
});

const Son2 = forwardRef((props, ref) => {
  return <input type='text' ref={ref}/>
})

const Son3 = forwardRef((props, ref) => {
  //實現聚焦邏輯
  const inputRef = useRef(null);
  const focusHandler = ()=>{
    inputRef.current.focus()
  }
  //暴露聚焦方法
  useImperativeHandle(ref,()=>{
    return {
      //暴露的方法
      focusHandler
    }
  })
  return <input type='text' ref={inputRef} />
})

function App() {
    const changeHandle = useCallback((value) => console.log(value), []);
    const [count, setCount] = useState(0);

    const sonRef = useRef(null);
    const showRef = ()=>{
      console.log(sonRef)
      sonRef.current.focus()
    }

    const sonRef2 = useRef(null);
    const focusHandler = ()=>{
      console.log(sonRef2.current)
      sonRef2.current.focusHandler()
    }
    return (
        <div>
            <h1>Lesson5</h1>
            <Lesson5 />
            <hr />
            {/* <Son /> */}
            <MemoSon count={count} />
            <button onClick={() => setCount(count + 1)}>+</button>
            <input type="text" onChange={(e) => changeHandle(e.target.value)} />
            <hr />
            <Son2 ref={sonRef}/>
            <button onClick={showRef}>Focus2</button>
            <hr />
            <Son3 ref={sonRef2}/>
            <button onClick={focusHandler}>Focus3</button>
        </div>
    );
}

export default App;
