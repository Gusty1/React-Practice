import React, { Fragment } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { Spin, Button, Divider, Row, Space } from 'antd';
import { nanoid } from 'nanoid';
import PubSub from 'pubsub-js';
import { allCounty } from '../constant.js';
import './Map.css';

/*
	state說明
	isLoading:初次載入獲取地圖json可能偏久，所以給他個loading判斷
	countyAry:選擇的縣市
*/

export default function Map() {
	const [countyObj, setCountyObj] = React.useState({
		isLoading: true,
		countyAry: []
	});
	const toolTipRef = React.useRef();

	React.useEffect(
		() => {
			//發地區佈消息給選項
			PubSub.publish('countyAry', countyObj.countyAry);
			let zoom = d3.zoom().scaleExtent([1, 10]).on('zoom', zoomed);

			function zoomed(event) {
				d3.select('svg').selectAll('path').attr(
					'transform',
					`translate(${event.transform.x},${event.transform.y}) scale(${event.transform.k})`
				);
			}
			d3.json('https://gusty1.github.io/Database/salary_map/COUNTY_MOI_1090820.json').then(function (mapData) {
				let projection = d3.geoMercator().center([122.8, 24.5]).scale(6000);
				let path = d3.geoPath(projection);
				let features = topojson.feature(mapData, mapData.objects['COUNTY_MOI_1090820']).features;
				d3.select('g.counties').selectAll('path').data(features).enter().append('path').attr('d', path).on('mouseenter', (event, d) => {
					toolTipRef.current.style.display = 'block';
					toolTipRef.current.style.left = event.pageX + 'px';
					toolTipRef.current.style.top = event.pageY - 50 + 'px';
					toolTipRef.current.innerHTML = d.properties.COUNTYNAME;
				}).on('mouseout', () => {
					toolTipRef.current.style.display = 'none';
				}).on('click', (event, d) => {
					if (d3.select(event.target).attr('class') !== 'active') {
						d3.select(event.target).attr('class', 'active');
						setCountyObj((countyObj) => {
							d.properties.COUNTYNAME = d.properties.COUNTYNAME.replaceAll('臺', '台');
							countyObj.countyAry = [...countyObj.countyAry, d.properties.COUNTYNAME];
							return { ...countyObj };
						});
					} else {
						d3.select(event.target).attr('class', '');
						setCountyObj((countyObj) => {
							countyObj.countyAry = countyObj.countyAry.filter((item) => {
								d.properties.COUNTYNAME = d.properties.COUNTYNAME.replaceAll('臺', '台');
								return item !== d.properties.COUNTYNAME;
							});
							return { ...countyObj };
						});
					}
				});
				d3.select('svg').call(zoom);
				d3.select('path.county-borders').attr('d',
					path(
						topojson.mesh(mapData, mapData.objects['COUNTY_MOI_1090820'], (a, b) => {
							return a !== b;
						})
					)
				);
				setCountyObj((countyObj) => {
					countyObj.isLoading = false;
					return { ...countyObj };
				});
			});
		},
		[countyObj.countyAry]
	);

	//全選地區
	function selectAllCounty() {
		let pathAry = document.querySelectorAll('.counties path');
		for (let i = 0; i < pathAry.length; i++) {
			pathAry[i].classList.add('active');
		}
		setCountyObj((countyObj) => {
			countyObj.countyAry = allCounty;
			return { ...countyObj };
		});
	}

	//清除已選地區
	function unSelected() {
		let pathAry = document.querySelectorAll('.counties .active');
		for (let i = 0; i < pathAry.length; i++) {
			pathAry[i].classList.remove('active');
		}
		setCountyObj((countyObj) => {
			countyObj.countyAry = [];
			return { ...countyObj };
		});
	}

	return (
		<Fragment>
			<Spin size="large" style={countyObj.isLoading ? { display: 'block' } : { display: 'none' }} />
			<div style={countyObj.isLoading ? { display: 'none' } : { display: 'block' }}>
				<div className="countyTooltip" ref={toolTipRef} />
				<Space>
					<Button onClick={selectAllCounty}> 全選 </Button>
					<Button onClick={unSelected} type="dashed">
						清除已選
					</Button>
				</Space>
				<Divider orientation="left" plain>
					目前選擇的縣市:
				</Divider>
				<Row>
					{countyObj.countyAry.map((county) => {
						return (
							<span className="selectCounty" key={nanoid()}>
								{county}
							</span>
						);
					})}
				</Row>
				<div>
					<svg className="counties-container">
						<g className="counties" />
						<path className="county-borders" />
					</svg>
				</div>
			</div>
		</Fragment>
	);
}
