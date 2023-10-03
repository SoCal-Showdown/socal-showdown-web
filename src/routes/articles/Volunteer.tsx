import HeaderImage from './HeaderImage';

function Volunteer() {
    return (
        <main>
            <HeaderImage pageTitle='Volunteer' />

            <div>
                <div className='flex h-screen w-screen flex-wrap justify-center gap-2'>
                    <iframe
                        src='https://docs.google.com/forms/d/e/1FAIpQLScJvlGl_lMqk1j3shJ4ykmL4bW0jkPlHwLi1PQQDCnK1Dxu_w/viewform'
                        className='h-fill m-2 w-2/3 align-baseline'
                        title='Volunteer Sing up '></iframe>
                </div>
            </div>
        </main>
    );
}

export default Volunteer;
