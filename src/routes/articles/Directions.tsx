import eventMapBig from './images/EventMapBig.jpg';
import eventMapSmall from './images/EventMapSmall.jpg';
import eventMapBigTwo from './images/EventMapBig2.jpg';

function Directions() {
    return (
        <main>
            <h1 className='text-bluegray-rgba p-3 text-center font-serif text-2xl font-bold'>
                Directions
            </h1>

            <div className='m-5 flex flex-wrap justify-center gap-10'>
                <img
                    src={eventMapBigTwo}
                    alt='Event map big'
                    className='w-1/2'></img>{' '}
                {/*957 x 704*/}
                <img
                    src={eventMapSmall}
                    alt='Event map big'
                    className='w-1/3'></img>{' '}
                {/*485x717*/}
            </div>
        </main>
    );
}

export default Directions;
