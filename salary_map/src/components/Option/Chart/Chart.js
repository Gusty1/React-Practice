import React, { Fragment } from 'react';
import axios from 'axios';
import { Spin, Row, Col, Result, Button } from 'antd';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import { ReloadOutlined } from '@ant-design/icons';
import {
	Chart as ChartJS,
	CategoryScale,
	ArcElement,
	RadialLinearScale,
	LinearScale,
	PointElement,
	Filler,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';
import {
	chartBackgroundColor,
	chartBorderColor,
	taiwanCounty,
	payOptions,
	timeOptions,
	payPieOptions,
	timePieOptions,
	payRadarOptions,
	timeRadarOptions
} from '../../constant.js';

ChartJS.register(
	CategoryScale,
	RadialLinearScale,
	ArcElement,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

let labels = [];

// 創建axios實例對象
const instance = axios.create({
	baseURL: 'https://gw.openapi.org.tw/',
	timeout: 60000,
	method: 'get',
	params: {
		client_id: '587c2e80-8fc7-11ec-bcd3-2fe59eaf628f',
		client_secret: '0QXQ9LlrdMi6s7K2qrlQXmhRHuhvikK3ecZUc9OpV4I='
	}
});

//處理月平均薪資資料
function getAvgOvertimePay(countyAry, selectJobType, date) {
	if (countyAry.length === 0 || selectJobType.toString().trim() === '' || date.trim() === '') {
		return [];
	}
	let newDateAry = [];
	let newCountyAry = [];
	labels = [];
	for (let i = 1; i <= new Date(date).getMonth() * 1 + 1; i++) {
		newDateAry.push(i);
		labels.push(i + '月');
	}
	for (let county of countyAry) {
		let countyId = taiwanCounty.findIndex((item) => {
			return item === county;
		});
		if (countyId === -1) countyId = 20;
		else countyId += 1;
		newCountyAry.push(countyId);
	}
	let queryAry = [];
	for (let i = 0; i < newDateAry.length; i++) {
		for (let j = 0; j < newCountyAry.length; j++) {
			queryAry.push(
				instance.get('/5caac3b67b8ecb11006263d9/avgOvertimePay', {
					params: {
						distrID: newCountyAry[j],
						empType: 1,
						dateMark: new Date(date).getFullYear() + '-' + newDateAry[i],
						indCatesID: selectJobType
					}
				})
			);
		}
	}
	return queryAry;
}

//處理月平均工時
function monthlyWorkTimeAverage(countyAry, selectJobType, date) {
	if (countyAry.length === 0 || selectJobType.toString().trim() === '' || date.trim() === '') {
		return [];
	}
	let newDateAry = [];
	let newCountyAry = [];
	for (let i = 1; i <= new Date(date).getMonth() * 1 + 1; i++) {
		newDateAry.push(i);
	}
	for (let county of countyAry) {
		let countyId = taiwanCounty.findIndex((item) => {
			return item === county;
		});
		if (countyId === -1) countyId = 20;
		else countyId += 1;
		newCountyAry.push(countyId);
	}
	let queryAry = [];
	for (let i = 0; i < newDateAry.length; i++) {
		for (let j = 0; j < newCountyAry.length; j++) {
			queryAry.push(
				instance.get('/5caac3b67b8ecb11006263d9/avgWorktime', {
					params: {
						distrID: newCountyAry[j],
						empType: 1,
						dateMark: new Date(date).getFullYear() + '-' + newDateAry[i],
						indCatesID: selectJobType
					}
				})
			);
		}
	}
	return queryAry;
}

/*
	state說明
	isFirst: 初次載入沒資料時顯示訊息判斷, 
	isLoading: 是否正在加載中, 
	payData: 平均薪資的資料, 
	timeData: 平均工時的資料,
*/

let preProps = {};

export default function Chart(props) {
	const [ chartData, setChartData ] = React.useState({
		isFirst: true,
		isLoading: true,
		payData: {},
		timeData: {}
	});

	React.useEffect(
		() => {
			const { selectJobType, countyAry, selectDate, selectChartType } = props;
			if (
				(preProps.selectChartType === 'Pie' && selectChartType !== 'Pie') ||
				(preProps.selectChartType === 'Radar' && selectChartType !== 'Radar')
			) {
				setChartData((chartData) => {
					return { ...chartData };
				});
				preProps = props;
			} else if (
				preProps.selectJobType === props.selectJobType &&
				JSON.stringify(preProps.countyAry) === JSON.stringify(props.countyAry) &&
				preProps.selectDate === props.selectDate &&
				preProps.selectChartType !== props.selectChartType &&
				preProps.selectChartType.trim() !== '' &&
				(selectChartType !== 'Pie' && selectChartType !== 'Radar') &&
				Object.keys(preProps).length > 0
			) {
				setChartData((chartData) => {
					return { ...chartData };
				});
				preProps = props;
				return;
			}
			preProps = props;
			let avgOvertimePayAry = getAvgOvertimePay(countyAry, selectJobType, selectDate);
			let monthlyWorkTimeAry = monthlyWorkTimeAverage(countyAry, selectJobType, selectDate);
			if (avgOvertimePayAry.length === 0 || monthlyWorkTimeAry.length === 0 || selectChartType.trim() === '')
				return;
			setChartData((chartData) => {
				chartData.isFirst = false;
				chartData.isLoading = true;
				return { ...chartData };
			});
			Promise.all([ ...avgOvertimePayAry, ...monthlyWorkTimeAry ])
				.then(function(results) {
					let payDatasets = [];
					let timeDatasets = [];
					let changeCountyAry = [];
					let otherNum = countyAry.findIndex((item) => {
						return item === '澎湖縣' || item === '金門縣' || item === '連江縣';
					});
					if (otherNum !== -1) {
						countyAry.push('離島');
						changeCountyAry = countyAry.filter((item) => {
							return item !== '澎湖縣' && item !== '金門縣' && item !== '連江縣';
						});
					} else changeCountyAry = [ ...countyAry ];
					if (props.selectChartType === 'Pie') {
						let payObj = {
							label: '# of Votes',
							data: [],
							borderColor: [],
							backgroundColor: [],
							borderWidth: 1
						};
						let timeObj = {
							label: '# of Votes',
							data: [],
							borderColor: [],
							backgroundColor: [],
							borderWidth: 1
						};
						for (let i = 0; i < changeCountyAry.length; i++) {
							payObj.borderColor.push(chartBackgroundColor[i]);
							payObj.backgroundColor.push(chartBorderColor[i]);
							timeObj.borderColor.push(chartBackgroundColor[i]);
							timeObj.backgroundColor.push(chartBorderColor[i]);
							let paySum = 0;
							let timeSum = 0;
							for (let result of results) {
								if (
									result.data.data[0].City === changeCountyAry[i] &&
									result.data.data[0].Name === 'AvgOvertimePay'
								) {
									paySum += result.data.data[0].MonthlyPayAverage;
								} else if (
									result.data.data[0].City === changeCountyAry[i] &&
									result.data.data[0].Name === 'AvgWorktime'
								) {
									timeSum += result.data.data[0].MonthlyWorktimeAverage;
								}
							}
							payObj.data.push(paySum);
							timeObj.data.push(timeSum);
						}
						payDatasets.push(payObj);
						timeDatasets.push(timeObj);
					} else {
						for (let i = 0; i < changeCountyAry.length; i++) {
							let payObj = {
								label: changeCountyAry[i],
								data: [],
								borderColor:
									props.selectChartType === 'Radar' ? chartBorderColor[i] : chartBackgroundColor[i],
								backgroundColor:
									props.selectChartType === 'Radar' ? chartBackgroundColor[i] : chartBorderColor[i],
								borderWidth: 1
							};
							let timeObj = {
								label: changeCountyAry[i],
								data: [],
								borderColor:
									props.selectChartType === 'Radar' ? chartBorderColor[i] : chartBackgroundColor[i],
								backgroundColor:
									props.selectChartType === 'Radar' ? chartBackgroundColor[i] : chartBorderColor[i],
								borderWidth: 1
							};
							for (let result of results) {
								if (
									result.data.data[0].Name === 'AvgOvertimePay' &&
									result.data.data[0].City === changeCountyAry[i]
								) {
									payObj.data.push(result.data.data[0].MonthlyPayAverage);
								} else if (
									result.data.data[0].Name === 'AvgWorktime' &&
									result.data.data[0].City === changeCountyAry[i]
								) {
									timeObj.data.push(result.data.data[0].MonthlyWorktimeAverage);
								}
							}
							payDatasets.push(payObj);
							timeDatasets.push(timeObj);
						}
					}
					setChartData((chartData) => {
						if (props.selectChartType === 'Pie') {
							chartData.payData = {
								labels: changeCountyAry,
								datasets: payDatasets
							};
							chartData.timeData = {
								labels: changeCountyAry,
								datasets: timeDatasets
							};
						} else {
							chartData.payData = {
								labels,
								datasets: payDatasets
							};
							chartData.timeData = {
								labels,
								datasets: timeDatasets
							};
						}
						chartData.isLoading = false;
						return { ...chartData };
					});
				})
				.catch((error) => {
					if (!alert('發生致命錯誤: ' + error)) {
						window.location.reload();
					}
				});
		},
		[ props ]
	);

	//出錯refresh button
	function refreshPage() {
		window.location.reload();
	}

	return (
		<Fragment>
			<Row style={{ width: '100%' }}>
				{chartData.isFirst ? (
					<div style={{ color: 'red' }}>資料都選好後圖表會自動在這裡出現</div>
				) : chartData.isLoading ? (
					<div>
						處理中...&nbsp;&nbsp;&nbsp;<Spin size="large" />
					</div>
				) : props.selectChartType === 'Line' ? (
					<Fragment>
						<Col span={12}>
							<Line options={payOptions} data={chartData.payData} />
						</Col>
						<Col span={12}>
							<Line options={timeOptions} data={chartData.timeData} />
						</Col>
					</Fragment>
				) : props.selectChartType === 'Bar' ? (
					<Fragment>
						<Col span={12}>
							<Bar options={payOptions} data={chartData.payData} />
						</Col>
						<Col span={12}>
							<Bar options={timeOptions} data={chartData.timeData} />
						</Col>
					</Fragment>
				) : props.selectChartType === 'Pie' ? (
					<Fragment>
						<Col span={12}>
							<Pie options={payPieOptions} data={chartData.payData} />
						</Col>
						<Col span={12}>
							<Pie options={timePieOptions} data={chartData.timeData} />
						</Col>
					</Fragment>
				) : props.selectChartType === 'Radar' ? (
					<Fragment>
						<Col span={12}>
							<Radar options={payRadarOptions} data={chartData.payData} />
						</Col>
						<Col span={12}>
							<Radar options={timeRadarOptions} data={chartData.timeData} />
						</Col>
					</Fragment>
				) : (
					<Result
						status="error"
						title="總之就是出錯了"
						subTitle="重新整理可以解決大部分的問題"
						extra={
							<Button type="primary" onClick={refreshPage}>
								<ReloadOutlined />
							</Button>
						}
						style={{ margin: 'auto' }}
					/>
				)}
			</Row>
		</Fragment>
	);
}
