import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function Root() {
    return (
        <>
            <header>
                <p>Socal ShowDown</p>
                <nav>
                    <Link to=''>Home</Link>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Root;
