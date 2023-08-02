import { Outlet } from 'react-router';

function Root() {
    return (
        <>
            <header>Socal ShowDown</header>
            <Outlet />
        </>
    );
}

export default Root;
