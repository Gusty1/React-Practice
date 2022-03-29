import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Header() {
	return (
		<Typography style={{ paddingTop: '10px' }}>
			<Title style={{ textAlign: 'center' }}>薪情地圖</Title>
			<pre>
				<Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
					說明: 左邊選地區(地圖可以縮放、拖動)，右邊設定，都選好後就會自動產生2個圖表，一個是平均薪資另一個是平均工時，
					時間部份是當年選的時間以前，例:選2019/06就顯示2019/01~2019/06的資料。<br />
					資料來源:&nbsp;
					<a href="https://www.openapi.org.tw/#/" target="_blank" rel="noreferrer">
						智慧城鄉
					</a>，政府的資料，薪資部分極大部分資料都是0，怕各位認為我做的不好都顯示不出來所以先告訴各位有資料的設定: 「台北市、批發業、2020/01」；
					薪資的單位，API文件上沒有寫，大家就自己猜吧，然後我看有資料的樣本數都不高，應該也沒有什麼參考價值，所以看看就好不要太認真；
					最後我也不知道這API會不會突然消失、什麼時後掛掉至少在我做完這個的時候他還是好的(2022/3/27)<br />
					備註: 雖然地圖上有全選按鈕但請盡量不要按它，假設選20多個縣市又選12月那就會每個縣市都要跑一次1~12月的資料，請求量非常大，
					請求過多API會把我擋住，短時間內不能再發送請求了，總之就是不要選太多地區和太長的時間區；然後預設timeout是1分鐘，
					正常應該不會超過1分鐘，可能我程式掛了或API掛了，就重新整理後再試試看，如果資料都是0圓餅圖不會顯示出來。
					<a
						href="https://gusty1.github.io/GustyLittleWorld/life/Detail.html?order=24"
						target="_blank"
						rel="noreferrer"
					>
						更多垃圾話
					</a>
				</Paragraph>
			</pre>
		</Typography>
	);
}
