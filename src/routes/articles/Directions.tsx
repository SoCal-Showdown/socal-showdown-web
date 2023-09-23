import eventmaplarge from './images/EventMapLarge.jpg';
import eventmapsmall from './images/Event Map Small (6).jpg';

function Directions() {
    return (
        <main>
            <h1 className='text-bluegray-rgba p-3 text-center font-serif text-2xl font-bold'>
                Directions
            </h1>

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
