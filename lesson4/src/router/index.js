import Login from '../pages/Login';
import Article from '../pages/Article';
import Article2 from '../pages/Article2';
import Layout from '../pages/Layout';
import About from '../pages/About';
import Board from '../pages/Board';
import App from '../App';
import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

//創建router實例對象並且配置路由對應關係
const router = createHashRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/layout',
        element: <Layout />,
        // 2級路由，注意2級路由不需要寫/，他不是網頁的切換
        children: [
            {
                // 默認2級路由的組件
                index: true,
                element: <About />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'board',
                element: <Board />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/article',
        element: <Article />,
    },
    {
        path: '/article2/:id/:name',
        element: <Article2 />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
