import React from 'react';
import Header from './components/Header/Header.js';
import { Layout, Row, Col, ConfigProvider } from 'antd';
import PubSub from 'pubsub-js';
import Map from './components/Map/Map.js';
import Option from './components/Option/Option.js';
import zhTW from 'antd/lib/locale/zh_TW';
import { fadeIn, fadeInRight, fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import 'antd/dist/antd.min.css';

const { Content } = Layout;

const animateStyles = StyleSheet.create({
	fadeIn: {
		animationName: fadeIn,
		animationDuration: '1s'
	},
	fadeInRight: {
		animationName: fadeInRight,
		animationDuration: '1s'
	},
	fadeInLeft: {
		animationName: fadeInLeft,
		animationDuration: '1s'
	}
});

export default function App() {
	const [ controlObj, setControlObj ] = React.useState({
		controlMap: true
	});

	let controlMap = function(_, data) {
		setControlObj((controlObj) => {
			controlObj.controlMap = data;
			return { ...controlObj };
		});
	};

	React.useEffect(() => {
		PubSub.subscribe('controlMap', controlMap);
	}, []);

	return (
		<ConfigProvider locale={zhTW}>
			<Content style={{ padding: '0 50px' }}>
				<Header />
				<Row>
					<Col
						className={controlObj.controlMap ? css(animateStyles.fadeInLeft) : ''}
						span={12}
						style={controlObj.controlMap ? { display: 'block' } : { display: 'none' }}
					>
						<Map />
					</Col>
					<Col
						span={controlObj.controlMap ? 12 : 24}
						className={controlObj.controlMap ? css(animateStyles.fadeInRight) : css(animateStyles.fadeIn)}
					>
						<Option />
					</Col>
				</Row>
			</Content>
		</ConfigProvider>
	);
}
