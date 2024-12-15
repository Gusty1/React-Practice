import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            我是一級路由layout組件
            <hr />
            {/* 注意不是網頁切換，不用加/ */}
            <Link to="about">關於頁</Link>
            <br />
            {/* 使用 replace 方法避免將導航紀錄推送到歷史堆疊中
            就是點上頁會跳回上一頁的網址，而不是上一個組件 */}
            <Link to="board" replace>
                面板頁
            </Link>
            <br />
            {/* 配置2級路由出口 */}
            <Outlet />
        </div>
    );
}

export default Layout;
