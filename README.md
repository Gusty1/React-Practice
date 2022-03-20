# React_Basic
### React的基礎知識。

****

# React_staging
### React的開發工具和應用範例。
  首先把這專案用yarn 或 npm開啟，然後要看練習項目把當前的src改名，把要看的資料夾改成src就好  
  原本第4章是講甚麼代理配置，但那很需要nodeJs和一堆神奇的東西，總之就是聽不懂~~~  
  github搜尋案例原本還有個fetch篇，但我就聽過而已，沒有記錄下來。  

### 一、todoList案例相關知識
  1.拆分組件、實現靜態組件，注意:className、style的寫法  
  2.動態初始化列表，如何確定將數據放在哪個組件的state中?  
    &emsp;--某個組件使用:放在其自身的state中  
    &emsp;--某些組件使用:放在他們共同的父組件state中(官方稱此操作為:狀態提升)  
  3.關於父子之間通信:  
    &emsp;1.「父組件」給「子組件」傳遞數據:通過props傳遞  
    &emsp;2.「子組件」給「父祖件」傳遞數據:要求父提前給子傳遞一個函數  
  4.注意defaultChecked和checked的區別，類似的還有defaultValue和value  
  5.狀態在哪裡，操作的方法就在哪裡。  

### 二、github搜尋案例相關知識
  1.設計狀態時要考慮全面，例如帶有網路請求的組件，要考慮請求失敗怎麼辦。
  2.ES6小知識:解構賦值+重命名
    &emsp;let obj ={a:{b:1}}
    &emsp;const {a} = obj //傳統解構賦值
    &emsp;const {a:{b}} =obj //連續解構賦值
    &emsp;const {a:{b:value}} //連續解構賦值+重命名
  3.消息訂閱與發佈機制
    &emsp;1.先訂閱，在發佈
    &emsp;2.適用於任意組件通信
    &emsp;3.要在組件的componentWillUnmount中取消訂閱

### 三、路由的基本使用
  1.明確好介面中的導航區、展示區
  2.導航區中的a標籤改為Link標籤
    &emsp;&lt;Link to="/xxxxx"&gt;Demo&lt;/Link&gt;
  3.展示區寫Route標籤進行路徑的匹配
    &emsp;&lt;Route path="/xxxxx" components={Demo}/&gt;
  4.<App/>的最外側包裹了一個<HashRouter>或</HashRouter>

### 四、路由組件與一般組件
  1.寫法不同:
    &emsp;一般組件:<Demo/>
    &emsp;路由組件:<Route path="/demo" components={Demo}/>
  2.存放位置不同:
    &emsp;一般組件:components
    &emsp;路由組件:pages
  3.接收到的prop不同:
    &emsp;一般組件:組件標籤傳遞甚麼，就收到甚麼
    &emsp;路由組件:接收到3個固定的屬性
      &emsp;&emsp;history:
        &emsp;&emsp;&emsp;go:function(n)
        &emsp;&emsp;&emsp;goBack:function()
        &emsp;&emsp;&emsp;goForward:function()
        &emsp;&emsp;&emsp;push:function(path,state)
        &emsp;&emsp;&emsp;replace:function(path,state)
      &emsp;&emsp;location:
        &emsp;&emsp;&emsp;pathname:""
        &emsp;&emsp;&emsp;search:""
        &emsp;&emsp;&emsp;state:{}
      &emsp;&emsp;match:
        &emsp;&emsp;&emsp;params:{}
        &emsp;&emsp;&emsp;path:""
        &emsp;&emsp;&emsp;url:""

### 五、NavLink與封裝NavLink
  1.NavLink可以實現路由鏈接的高亮，通過activeClassName指定樣式名(預設是active)
  2.標籤體內容是一個特殊的標籤屬性
  3.通過this.props.children可以獲取標籤體內容

### 六、Switch的使用
  1.通常情況下，path和component是一種對應的關係
  2.Switch可以提高路由匹配效率(單一匹配)

### 七、解決多級路徑刷新頁面樣式丟失問題
  1.public/index.html 中 引入樣式時不寫 ./ 改寫 / (常用)
  2.public/index.html 中 引入樣式時不寫 ./ 改寫 %PUBLIC_URL% (常用)
  3.使用HashRouter。

### 八、解決多級路徑刷新頁面樣式丟失問題
  1.默認使用的是模糊匹配(簡單記:「輸入的路徑」必須包含要「匹配的路徑」，且順序要一致)
  2.開啟嚴格匹配:	&lt;Route exact path="/demo" component={Demo} /&gt;
  3.嚴格匹配不要隨便開啟，需要再開，有時候開啟會導致無法繼續匹配二級路由

### 九、Redirect的使用
  1.一班寫在所有路由註冊的最下方，當所有路由都無法匹配時，跳轉到Redirect指定的路由
  2.具體編碼:
    &emsp;&lt;Switch&gt;
		&emsp;&emsp;&lt;Route path="/about" component={About} /&gt;
		&emsp;&emsp;&lt;Route path="/home" component={Home} /&gt;
		&emsp;&emsp;&lt;Redirect to="/about"/&gt;
		&emsp;&lt;/Switch&gt;

### 十、嵌套路由
  1.註冊子路由時要寫上父路由的path值。
  2.路由的匹配是按照註冊路由的順序進行。

### 十一、向路由組件傳遞參數
  1.params參數:
    &emsp;路由鏈接(攜帶參數): &lt;Link to="/demo/test/tom/18">詳情&lt;Link&gt;
    &emsp;註冊路由(聲明接收): &lt;Route path="/demo/test/:name/:age" component={Test}/&gt;
    &emsp;接收參數:this.props.match.params
  2.search參數:
    &emsp;路由鏈接(攜帶參數): &lt;Link to="/demo/test?name=tom&age= 18"&gt;詳情&l;/Link&gt;
    &emsp;註冊路由(無須聲明，正常註冊即可): &lt;Route path="/demo/test" component={Test}/&gt;
    &emsp;接收參數: this.props.location.search
    &emsp;備註:獲取到的search是urlencoded編碼字符串，需要藉助query-string的解析
  3.state參數:
    &emsp;路由鏈接(攜帶參數): &lt;Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}&gt;詳情&lt;/Link&gt;
    &emsp;註冊路由(無須聲明，正常註冊即可): &lt;Route path="/demo/test" component={Test}/&gt;
    &emsp;接收參數: this.props.location.state
    &emsp;備註:刷新也可以保留住參數

### 十二、編程式路由導航
  借助this.props.history對象上的API對操作路由跳轉、前進、後退
  &emsp;-this.props.history.push()
  &emsp;-this.props.history.replace()
  &emsp;-this.props.history.goBack()
  &emsp;-this.props.history.goForward()
  &emsp;-this.props.history.go()

### 十三、BrowserRouter與HashRouter的區別
  1.底層原理不一樣:
    &emsp;BrowserRouter使用的是H5的history API，不兼容IE9級以下的版本
    &emsp;HashRouter使用的是URL的哈希值
  2.path表現形式不一樣:
    &emsp;BrowserRouter的路徑中沒有#，例如: localhost:3000/demo/test
    &emsp;HashRouter的路徑包含#，例如: localhost:3000/#/demo/test
  3.刷新後對路由state參數的影響:
    &emsp;(1).BrowserRouter沒有任何影響，因為state會保存在history的對象中
    &emsp;(2).HashRouter刷新後會導致路由state的丟失
  4.備註:HashRouter可以用於解決一些路徑錯誤相關的問題

  額外安裝的庫:
  1.nanoid:用於產生uuid；import {nanoid} form 'nanoid'；使用:nanoid()
  2.prop-types:限制prop的類型；import PropTypes from 'prop-types'
  3.axios:ajax的東西；import axios from 'axios'
  4.pubsub-js:訂閱和消息發布； import PubSub from 'pubsub-js'
  5.react-router-dom:web用的路由組件；import { NavLink, Route,BrowserRouter,Switch,Redirect} from 'react-router-dom'

  備註:\
  1.uuid可以裝uuid，但影片說uuid偏大，所以推薦nanoid
  2.import潛規則:第3方的都往上，自己寫得靠下，css放最後
  3.已經寫好的css在public創建一個css資料夾，在index.html引入
  4.注意public的index.html有引入bootstrap，要看其他項目的時候注意一下
  5.query-string用於解析網址參數，腳手架已經安裝好了，import qs from 'query-string'
