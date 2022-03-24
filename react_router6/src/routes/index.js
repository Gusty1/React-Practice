import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/Home/News';
import Message from '../pages/Home/Message';
import Detail from '../pages/Home/Message/Detail';

export default [
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/home',
		element: <Home />,
		children: [
			{
				path: 'news',
				element: <News />
			},
			{
				path: 'message',
				element: <Message />,
				children: [
					{
						path: 'Detail',
						element: <Detail />
					}
				]
			},
			{
				path: '',
				element: <Navigate to="news" />
			}
		]
	},
	{
		path: '/',
		element: <Navigate to="/about" />
	}
];
