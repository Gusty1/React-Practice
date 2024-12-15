import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,setNum } from './store/modules/counterStore';
import { useState } from 'react';

function Lesson3() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const [myNum, setMyNum] = useState(0)

    return (
        <div>
            <h2>Lesson3: Redux</h2>
            <button onClick={() => dispatch(decrement('111'))}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment('222'))}>+</button>
            <button onClick={()=>dispatch(setNum(10))}>變成10</button>
            <hr/>
            <div>
                <span>
                    <input type="number" onChange={(e)=>setMyNum(e.target.value)} 
                    value={myNum}/>
                </span>
                <button onClick={()=>dispatch(setNum(myNum))}>變成輸入的數字</button>
            </div>
            
        </div>
    );
}

export default Lesson3;
