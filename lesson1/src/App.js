const test = 'aaaa';
function showNum() {
    return 'gray';
}
const test_list = [
    { id: 1, name: 'jack' },
    { id: 2, name: 'bill' },
    { id: 3, name: 'terry' },
];

function App() {
    return (
        <div>
            {test}
            <br />
            {showNum()}
            <ul>
                {/* 注意要有獨一無二的key字符串or數字 */}
                {test_list.map((item) => {
                    return <li key={item.id}>{item.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default App;
