/* eslint-disable react/style-prop-object */
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import SocalHassLogo from './articles/images/SocalHassLogo.png';

function Root() {
    return (
        <>
            <header>                
                <HeaderImage pageTitle='Socal Showdown' />
                    
                <div className='m-5 h-fit items-center gap-40 border-purple bg-white'>
                    <nav className='ml-5 flex flex-row items-center justify-end gap-4 pr-5 text-center font-serif text-2xl'>
                        <img
                            src={SocalHassLogo}
                            className='fixed left-0 ml-5 h-12'
                            alt='SocalHassLogo'
                        />
                        <Link to=''>Home</Link>
                        <Link to='signup'>Sign Up</Link>
                        <Link to='location_time'>Location Time</Link>
                        <Link to='directions'>Directions</Link>
                        <Link to='sponsors'>Sponsors</Link>
                    </nav>
                </div>

            </header>
            
        </>
    );
}

export default Root;
