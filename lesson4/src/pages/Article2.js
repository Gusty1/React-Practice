import { useParams } from 'react-router-dom';

function Article() {
    const params = useParams();
    const id = params.id;
    const name = params.name;
    return (
        <div>
            <h2>我是Article2</h2>
            id:{id}
            <br />
            name:{name}
        </div>
    );
}

export default Article;
