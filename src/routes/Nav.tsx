import { Outlet } from 'react-router';

function Nav() {
    return (
        <>
            <header>Socal ShowDown</header>
            <Outlet />
        </>
    );
}

export default Nav;
