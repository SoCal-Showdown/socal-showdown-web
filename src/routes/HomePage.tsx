import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main>
            Good morning
            <Link to='articles/post1'>Go here</Link>
        </main>
    );
}

export default HomePage;
