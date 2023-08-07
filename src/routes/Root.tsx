import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function Root() {
    return (
        <>
            <header>
                <p className='p-3 text-center text-3xl '>Socal Showdown</p>
                <nav>
                    <Link to=''>Home</Link>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Root;
