import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function Root() {
    return (
        <>
            <header>
                <p className='p-3 text-center text-3xl '>Socal Showdown</p>
                <p className='text-center text-2xl'>Temporary Header</p>
                <nav className='flex flex-row gap-4'>
                    <Link to=''>Home</Link>
                    <Link to='signup'>Sign Up</Link>
                    <Link to='location_time'>Location Time</Link>
                    <Link to='sponsors'>Sponsors</Link>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Root;
