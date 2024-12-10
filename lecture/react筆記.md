# react筆記

## 新建專案的目錄特殊檔案說明

### App.test.js

`App.test.js` 是 React 應用程式中的測試檔案，通常是用來寫測試用例，檢查 `App.js` 中的組件是否正確運行。它是由 `create-react-app` 預設生成的一部分，用於測試 React 元件的功能和行為。`App.test.js` 中通常會使用到 **Jest** 和 **React Testing Library** 來撰寫測試。

#### 1. `App.test.js` 的基本作用

- **測試 React 組件**：它檢查 `App.js` 組件（或其他組件）的渲染結果和行為。
- **確保功能正常**：可以用來檢查組件是否正確渲染，是否觸發預期的事件，是否顯示正確的內容等。

#### 2. 使用 Jest 和 React Testing Library 測試 React 組件

`create-react-app` 預設集成了 **Jest** 和 **React Testing Library**，用來測試 React 組件。

如果你是從頭開始建立專案，`create-react-app` 已經為你安裝好了這些依賴。如果沒有，請確保安裝：

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

#### 3. 測試範例：檢查 `App.js`

假設 `App.js` 內有一些簡單的內容，我們可以使用 `App.test.js` 來測試這些內容是否正確渲染。

##### **`App.js` 範例**

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
    </div>
  );
}

export default App;
```

##### `App.test.js` 範例

`App.test.js` 會測試 `App` 組件中的內容是否正確渲染。

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to React/i); // 檢查是否渲染了 "Welcome to React"
  expect(linkElement).toBeInTheDocument(); // 驗證該元素存在
});
```

#### 4. 如何執行測試

當你撰寫完測試用例後，可以使用以下指令來執行測試：

```bash
npm test
```

這會啟動 Jest 測試執行器，並運行 `App.test.js` 中的測試。

#### 5. 測試的常見用法

- **渲染測試**：確保組件被正確渲染，並顯示預期的內容。

  ```jsx
  test('renders the correct heading', () => {
    render(<App />);
    const heading = screen.getByText(/Welcome to React/i);
    expect(heading).toBeInTheDocument();
  });
  ```

- 事件處理測試：檢查事件是否正常觸發（例如，點擊按鈕）。

  ```jsx
  test('button click triggers event', () => {
    const handleClick = jest.fn();
    render(<button onClick={handleClick}>Click me</button>);
    
    const button = screen.getByText(/Click me/i);
    button.click();
    
    expect(handleClick).toHaveBeenCalledTimes(1); // 驗證是否觸發了點擊事件
  });
  ```

- 快照測試：將組件的渲染結果保存為快照，以後可以對比檢查是否發生了變化。

  ```jsx
  import renderer from 'react-test-renderer';
  
  test('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  ```

---

### setupTests.js

`setupTests.js` 是 React 應用中自動生成的一個配置文件，通常在使用 **Create React App** 工具創建的專案中會包含這個文件。這個文件的主要目的是配置測試環境，尤其是對於使用 **Jest** 和 **React Testing Library** 進行單元測試的專案。

#### `setupTests.js` 的用途

1. **初始化測試環境**：`setupTests.js` 用來在測試運行之前配置一些全局設定。這些設定會影響所有測試文件，通常用來設置測試框架、插件或全局變量等。
2. **全局配置**：它會自動加載於每個測試運行之前，讓你能夠在這裡設置一些一次性需要執行的操作，例如全局的 mock 函數或測試工具的初始化。

#### `setupTests.js` 中常見的設置

- 設置全局的 mock 函數或變量。
- 引入測試工具或庫，例如 `jest-dom` 來提供額外的 DOM 斷言。
- 配置測試框架，像是設置測試執行器、時間控制等。

#### 範例：`setupTests.js` 的內容

```javascript
// 在 React 專案中使用 jest-dom 提供的額外斷言語法
import '@testing-library/jest-dom';

// 可選：設定全局變量或函數（例如全局的 mock 函數）
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'some data' }),
  })
);
```

#### 如何使用 `setupTests.js`

1. **默認配置**
   如果你是使用 `create-react-app` 創建的 React 專案，`setupTests.js` 文件通常會在 `src` 目錄下自動生成。你只需要在這個文件中進行配置，它會自動被 Jest 載入，並在測試執行前運行。

2. **自定義配置**
   你可以根據專案需求來修改 `setupTests.js` 文件。例如，如果你需要設置一些全局變量或第三方測試庫，這些設置可以在 `setupTests.js` 中完成。

   假設你想在測試中使用 `jest-dom`（這是一個為 Jest 提供更多的 DOM 斷言的庫），你只需要在 `setupTests.js` 文件中引入它：

   ```javascript
   // src/setupTests.js
   import '@testing-library/jest-dom';
   ```

3. **執行 Jest 測試**
   一旦設置好 `setupTests.js`，Jest 測試框架會自動在每個測試文件運行前執行 `setupTests.js`，這樣所有的配置就會被應用到測試中。

#### 典型使用場景

- **引入擴展庫**：你可以在 `setupTests.js` 中引入擴展庫來增強測試能力。例如，`jest-dom` 提供了更多有用的 DOM 斷言方法，像是 `toBeInTheDocument`，`toHaveClass` 等。
- **設置全局 mock 函數**：如果你的應用需要使用如 `fetch` 或其他外部 API，可以在 `setupTests.js` 中進行 mock，使測試更加獨立和穩定。

#### 範例：使用 `setupTests.js` 來設置 `fetch` 的 mock

假設你的應用需要使用 `fetch` 來獲取數據，在測試過程中你可能不想讓實際的 API 被調用，而是使用 mock 來模擬響應。

```javascript
// src/setupTests.js
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Hello, world!' }),
  })
);
```

然後在測試中，你可以使用 `fetch` 函數，並且它將返回你在 `setupTests.js` 中設置的 mock 響應。

---

### reportWebVitals.js

`reportWebVitals.js` 是 React 應用中的一個可選文件，用來測量和報告應用的性能指標。這個文件通常會在 `create-react-app` 預設的 React 專案中自動生成。它的主要目的是幫助開發者了解應用的 Web Vitals（即網站的性能指標），這些指標對於網站的用戶體驗至關重要。

#### Web Vitals 指標

Web Vitals 是 Google 提出的標準，旨在衡量網站的性能對用戶體驗的影響。這些指標主要包括：

1. **LCP (Largest Contentful Paint)**：測量頁面主要內容渲染完成的時間，越快越好。
2. **FID (First Input Delay)**：衡量用戶首次與頁面互動到頁面響應的延遲時間，越短越好。
3. **CLS (Cumulative Layout Shift)**：測量頁面內容布局穩定性，過大的值可能會影響用戶體驗。

#### `reportWebVitals.js` 的作用

`reportWebVitals.js` 是用來測量這些 Web Vitals 指標並將結果上報的文件。具體來說，它會將這些指標數據發送到指定的端點（通常是第三方的性能分析工具或自家的服務端）以便進行分析。

#### `reportWebVitals.js` 的內容

該文件通常包括以下幾個主要部分：

1. **導入 `web-vitals` 庫**：這個庫提供了用來測量 Web Vitals 指標的函數。
2. **函數 `reportWebVitals`**：用來將測量結果發送到指定的回調函數。

#### 範例

```javascript
import { reportWebVitals } from './reportWebVitals';

reportWebVitals(console.log); // 將測量結果打印到控制台
```

#### 如何使用 `reportWebVitals.js`

在 React 應用中，你可以選擇性地將 `reportWebVitals` 用於性能監控。默認情況下，這個文件不會自動啟用，你可以根據需求將它與你的應用進行集成。

1. **修改 `index.js` 來啟用性能報告**
   在 `src/index.js` 中，`reportWebVitals` 被導入並調用。你可以修改這個呼叫，以便將性能數據發送到你自己的分析服務，或者像預設一樣將數據輸出到控制台：

   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';
   import App from './App';
   import reportWebVitals from './reportWebVitals';

   ReactDOM.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
     document.getElementById('root')
   );

   // 將性能指標輸出到控制台
   reportWebVitals(console.log); // 或者你可以將它發送到服務端分析
   ```

2. **自定義回調函數**：
   你也可以提供自定義的回調函數來處理 Web Vitals 的數據，例如將它們發送到第三方服務如 Google Analytics 或你的自有服務：

   ```javascript
   import { reportWebVitals } from './reportWebVitals';

   function sendToAnalytics(metric) {
     // 將性能指標發送到你的分析服務
     console.log(metric);
     // 可以透過 fetch 或其他方式將資料發送到你的服務端
   }

   reportWebVitals(sendToAnalytics);
   ```

---
