import { Link, useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>React Lesson4</h1>
            {/*聲明式導航 */}
            <Link to="/login" state={{ data: 'aaaaaaaa' }}>
                前往Login
            </Link>
            <hr />
            {/* 令令式導航 */}
            <button onClick={() => navigate('/article?id=100&name=Gray')}>
                前往Article+網址參數
            </button>
            {/* 記得在路由(router)設定佔位符 */}
            <button onClick={() => navigate('/article2/123/Gray')}>
                前往Login+佔位符參數
            </button>
            <hr />
            <Link to="/Layout">路由嵌套練習</Link>
        </div>
    );
}

export default App;
