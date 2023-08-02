import { Link } from 'react-router-dom';

function Home() {
    return (
        <main>
            Good morning
            <Link to='articles/post1'>Go here</Link>
        </main>
    );
}

export default Home;
