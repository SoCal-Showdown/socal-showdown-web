import HeaderImage from './HeaderImage';

function GameRules() {
    return (
        <main>
            <HeaderImage pageTitle='Game Rules' />

            <div>
                <div className='flex h-screen w-screen flex-wrap justify-center gap-2'>
                    <iframe
                        src='https://docs.google.com/document/d/1qfFO4ZkWHIzBz9NjZfKxwAYl8sCX2xr9GMahSqRAv1A/edit'
                        className='h-fill m-2 w-2/3 align-baseline'
                        title='Volunteer Sing up '></iframe>
                </div>
            </div>
        </main>
    );
}

export default GameRules;
