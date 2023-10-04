/* eslint-disable react/style-prop-object */
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import SocalHassLogo from './articles/images/SocalHassLogo.png';

function Root() {
    return (
        <>
            <header>
                <div className='grid place-content-center bg-[#6d22b6] py-3.5'>
                    <button className="rounded border border-solid border-white px-6 py-1 font-['Open_Sans'] text-[18px] text-white">
                        See Latest Announcements
                    </button>
                </div>

                <nav className='mb-4 mr-10 mt-4 flex flex-row items-center justify-end gap-8 text-center  font-[Open+Sans] text-xl '>
                    <img
                        src={SocalHassLogo}
                        className='absolute left-0 ml-7 h-10'
                        alt='SocalHassLogo'
                    />
                    <Link to=''>Home</Link>
                    <Link to='signup'>Sign Up</Link>
                    <Link to='location_time'>Location Time</Link>
                    <Link to='directions'>Directions</Link>
                    <Link to='sponsors'>Sponsors</Link>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Root;
