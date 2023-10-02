import HeaderImage from './HeaderImage';
import eventmaplarge from './images/EventMapLarge.jpg';
import eventmapsmall from './images/Event Map Small (6).jpg';

function EventInfo() {
    return (
        <main>
            <HeaderImage pageTitle='Event Info' />
            <div className='m-5 flex justify-center '>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.06083922782!2d-118.38439771844679!3d33.91801250511423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b6a38fe374df%3A0x21d8eead88e39f96!2sDa%20Vinci%20Schools!5e0!3m2!1sen!2sus!4v1693364360555!5m2!1sen!2sus'
                    loading='lazy'
                    className='m-5 max-h-96 w-3/5 max-w-md pt-3'
                    title='Google Map'></iframe>

                <div className='m-5 h-max w-fit max-w-md p-7 pt-0 leading-9'>
                    <h3 className='pb-2 font-serif text-3xl font-semibold text-bluegray'>
                        When:
                    </h3>
                    <p className='font-semibold '>October 6th, 2023</p>
                    <li className=''>Set up and practice matches</li>

                    <p className='font-semibold'>October 7th-9th, 2023</p>
                    <li>
                        Competition, workshops, discovery row, outreach
                        demonstrations, and awards
                    </li>

                    <h3 className='pb-2 pt-4 font-serif text-3xl font-semibold text-bluegray'>
                        Where:
                    </h3>

                    <div className='pt-0 leading-9 '>
                        <p className='font-semibold '>Da Vinci Schools</p>
                        <p>201 N Douglas St, El Segundo, CA 90245</p>
                        <p className='italic'>
                            Parking will be available at the school.{' '}
                        </p>
                    </div>
                </div>
            </div>
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

export default EventInfo;
