import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Header() {

	return (
		<Typography style={{ paddingTop: '10px' }}>
			<Title style={{ textAlign: 'center' }}>薪情地圖</Title>
			<pre>
				<Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
					說明:&nbsp;左邊選地區(地圖可以縮放、拖動)，右邊設定，都選好後就會自動產生2個圖表，一個是平均薪資另一個是平均工時，時間部份是選的時間以前，例:選2019/06就顯示2019/01~2019/06的資料。<br />
					資料來源:&nbsp;
					<a href="https://www.openapi.org.tw/#/" target="_blank" rel="noreferrer">
						智慧城鄉
					</a>
					，政府的資料，薪資部分極大部分都沒有資料， 怕各位認為我做的不好都不顯示所以先告訴各位有資料的設定:&nbsp;「台北市、批發業、2020/01」<br />
					備註:&nbsp;雖然地圖上有全選按鈕但請盡量不要按它，假設選20多個縣市又選12月那就會每個縣市都要跑一次1~12月的資料，請求量非常大，
					請求過多所以server會把我擋住，然後就會爆炸，總之就是不要選太多地區；然後預設timeout是1分鐘，正常應該不會超過1分鐘，
					如果超過可能政府server那邊又有什麼問題了，或我程式掛了，就重新整理試試看ㄅ&nbsp;(´・Å・`)
					最後如果資料都是0圓餅圖不會顯示出來，出現任何錯誤應該都會alert，重新整理應該可以解決大部分的問題...&nbsp;&nbsp;&nbsp;
					<a href="https://gusty1.github.io/GustyLittleWorld/life/Detail.html?order=24" target="_blank" rel="noreferrer">
						更多垃圾話
					</a>
				</Paragraph>
			</pre>
		</Typography>
	);
}