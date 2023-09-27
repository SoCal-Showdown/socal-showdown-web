/* eslint-disable react/style-prop-object */
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function Root() {
    return (
        <>
            <header>
                <div className='bg-bluegray'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className='p-3 text-center font-serif text-7xl font-bold text-white underline decoration-purple-700'>
                        Socal Showdown
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <nav className='mt-2 flex flex-row justify-center gap-4 text-center font-serif text-2xl text-white'>
                        <Link to=''>Home</Link>
                        <Link to='signup'>Sign Up</Link>
                        <Link to='location_time'>Location Time</Link>
                        <Link to='eventinfo'>Event Info</Link>
                        <Link to='directions'>Directions</Link>
                        <Link to='sponsors'>Sponsors</Link>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Root;
