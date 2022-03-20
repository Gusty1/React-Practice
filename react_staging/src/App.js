import React, { Component } from 'react'
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

export default class App extends Component {
	render() {
		return (
			<div>
				App
				<button>點我</button>
				<Button type="primary">Primary Button</Button>
				<PlayCircleOutlined />
			</div>
		)
	}
}
