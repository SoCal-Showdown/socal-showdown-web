import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function Root() {
    return (
        <>
            <header>
                <p className='p-3 text-center font-serif text-3xl font-bold text-blue-700'>
                    Socal Showdown
                </p>
                <nav className='mt-2 flex flex-row justify-center gap-4 text-center font-serif text-2xl'>
                    <Link to=''>Home</Link>
                    <Link to='signup'>Sign Up</Link>
                    <Link to='location_time'>Location & Time</Link>
                    <Link to='sponsors'>Sponsors</Link>
                </nav>

                <img
                    src={
                        'https://lh6.googleusercontent.com/BArYgxxTi6vyWHGJ…f5zFy7jfpSC6yjDbrielIng9AWjnwssLclJjtaaaU4=w16383'
                    }
                />
            </header>
            <Outlet />
        </>
    );
}

export default Root;
