//處理月平均薪資資料
export function getAvgOvertimePay(countyAry, selectJobType, date) {
	if (countyAry.length === 0 || selectJobType === '' || date === '') {
		return [];
	}
	let newDateAry = [];
	let newCountyAry = [];
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
				instance.get('/avgOvertimePay', {
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