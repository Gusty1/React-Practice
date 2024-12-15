import { useSearchParams } from 'react-router-dom';

function Article() {
    const [params] = useSearchParams();
    const id = params.get('id');
    const name = params.get('name');
    return (
        <div>
            <h2>我是Article</h2>
            <hr />
            id:{id}
            <br />
            name:{name}
        </div>
    );
}

export default Article;
