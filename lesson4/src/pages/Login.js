import { useLocation } from 'react-router-dom';

function Login() {
    const location = useLocation();
    const data = location.state?.data;
    return (
        <div>
            <h2>我是Login</h2>
            <hr />
            data: {data}
        </div>
    );
}

export default Login;
