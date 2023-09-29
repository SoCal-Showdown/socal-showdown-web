import eventmaplarge from './images/EventMapLarge.jpg';
import eventmapsmall from './images/Event Map Small (6).jpg';
import HeaderImage from './HeaderImage';

function Directions() {
    return (
        <main>
            <HeaderImage pageTitle='Directions' />

            <div className='flex w-fit flex-wrap justify-center gap-2'>
                <div className='h-80 w-3/5'>
                    <img
                        src={eventmaplarge}
                        alt='Event map big'
                        className='p-3 '></img>
                </div>
                <div className='w-1/4'>
                    <img
                        src={eventmapsmall}
                        alt='Event map big'
                        className='p-3'></img>
                </div>
            </div>
        </main>
    );
}

export default Directions;
