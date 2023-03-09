import React from 'react';
import { DatePicker, Row, Col, Select, Button, Tooltip, Radio, Divider } from 'antd';
import {
	LeftSquareOutlined,
	RightSquareOutlined,
	LineChartOutlined,
	BarChartOutlined,
	PieChartOutlined,
	RadarChartOutlined
} from '@ant-design/icons';
import { nanoid } from 'nanoid';
import moment from 'moment';
import PubSub from 'pubsub-js';
import Chart from './Chart/Chart.js';
import { jobType } from '../constant.js';

const { Option } = Select;
const monthFormat = 'YYYY/MM';
const chartTypeAry = [ 'Line', 'Bar', 'Pie', 'Radar' ];
const chartIcoTypeAry = [ <LineChartOutlined />, <BarChartOutlined />, <PieChartOutlined />, <RadarChartOutlined /> ];

//選擇時間的限制，這個月以前
function disabledDate(current) {
	return current >= moment().subtract(1, 'months');
}

/*
	state說明
	controlMap:是否收起地圖
	countyAry:選擇的地區
	selectChartType:選擇的圖表類型
	selectJobType:選擇的職業類型
	selectDate:選擇的日期
*/

export default function Options() {
	const [ optionObj, setOptionObj ] = React.useState({
		controlMap: true,
		countyAry: [],
		selectChartType: '',
		selectJobType: '',
		selectDate: ''
	});

	//收闔地圖
	function controlMap() {
		setOptionObj((optionObj) => {
			optionObj.controlMap = !optionObj.controlMap;
			PubSub.publish('controlMap', optionObj.controlMap);
			return { ...optionObj };
		});
	}

	//選擇職業類別
	function changeJobTypeAry(value) {
		// if (optionObj.countyAry.length === 0) return;
		setOptionObj((optionObj) => {
			optionObj.selectJobType = value;
			return { ...optionObj };
		});
	}

	//選擇時間
	function changeSelectDate(current) {
		// if (optionObj.countyAry.length === 0) return;
		setOptionObj((optionObj) => {
			optionObj.selectDate = current.format('YYYY-MM');
			return { ...optionObj };
		});
	}

	//選擇圖表類型
	function changeChartType(event) {
		// if (optionObj.countyAry.length === 0) return;
		setOptionObj((optionObj) => {
			optionObj.selectChartType = event.target.value;
			return { ...optionObj };
		});
	}

	//取得選擇的地區
	const getCountyAry = function(_, data) {
		setOptionObj((optionObj) => {
			optionObj.countyAry = data;
			return { ...optionObj };
		});
	};

	React.useEffect(() => {
		PubSub.subscribe('countyAry', getCountyAry);
	}, []);

	return (
		<Row>
			<Col span={24}>
				<Tooltip title={optionObj.controlMap ? '收起地圖' : '展開地圖'}>
					<Button onClick={controlMap} type="primary">
						{optionObj.controlMap ? (
							<LeftSquareOutlined style={{ fontSize: '20px' }} />
						) : (
							<RightSquareOutlined style={{ fontSize: '20px' }} />
						)}
					</Button>
				</Tooltip>
			</Col>
			<Col span={12}>
				<span>選擇職業:&nbsp;&nbsp;&nbsp;</span>
				<Select style={{ width: '80%' }} placeholder="請選擇職業類別" onChange={changeJobTypeAry}>
					{jobType.map((item, index) => {
						return (
							<Option key={nanoid()} value={index + 1}>
								{item}
							</Option>
						);
					})}
				</Select>
			</Col>
			<Col span={12}>
				<span>選擇時間:&nbsp;&nbsp;&nbsp;</span>
				<DatePicker
					allowClear={false}
					onChange={changeSelectDate}
					disabledDate={disabledDate}
					format={monthFormat}
					picker="month"
					style={{ width: '80%' }}
				/>
			</Col>
			<Row>
				<Col span={24}>
					<span>圖表類型:&nbsp;&nbsp;&nbsp;</span>
					<Radio.Group onChange={changeChartType} style={{ marginTop: '10px' }}>
						{chartTypeAry.map((item, index) => {
							return (
								<Radio key={nanoid()} value={item} style={{ fontSize: '18px' }}>
									{chartIcoTypeAry[index]}
								</Radio>
							);
						})}
					</Radio.Group>
				</Col>
			</Row>
			<Divider dashed />
			<Chart {...optionObj} />
		</Row>
	);
}
