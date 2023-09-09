function LocationTime() {
    return (
        <main>
            <h1 className='p-3 text-center font-serif text-2xl font-bold text-blue-700'>
                Location and Time
            </h1>

            <div className='m-5 flex justify-center gap-5'>
                <div className='h-max w-max bg-blue-200 p-5 leading-9'>
                    <h3 className='pb-2 font-serif text-lg font-semibold text-black'>
                        When
                    </h3>

                    <p className='font-semibold'>October 6th, 2023</p>
                    <li className=' pb-3'>Set up and practice matches</li>

                    <p className='font-semibold'>October 7th-9th, 2023</p>
                    <li>Competition</li>
                    <li>Workshops</li>
                    <li>Discovery Row</li>
                    <li>Outreach Demonstrations</li>
                    <li>Awards</li>
                </div>

                <div className='h-max w-max bg-blue-200 p-5 leading-9'>
                    <h3 className='font-serif text-lg font-semibold  text-black'>
                        Where
                    </h3>
                    <div>
                        <div>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.06083922782!2d-118.38439771844679!3d33.91801250511423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b6a38fe374df%3A0x21d8eead88e39f96!2sDa%20Vinci%20Schools!5e0!3m2!1sen!2sus!4v1693364360555!5m2!1sen!2sus'
                                width='275'
                                height='275'
                                loading='lazy'
                                className='mb-5 ml-8 mt-3'></iframe>
                        </div>
                        <div className='p-7 pb-2 pt-0 leading-7'>
                            {/* <ul className='mt-0 list-disc leading-loose'> */}
                            <p className='font-semibold'>Da Vinci Schools</p>
                            <p>201 N Douglas St, El Segundo, CA 90245</p>
                            <p className='italic'>
                                Parking will be available at the school.{' '}
                            </p>
                            {/* </ul> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='mb-4 flex'>
                <div className='h-12 w-1/2 bg-gray-400'></div>
                <div className='h-12 w-1/2 bg-gray-500'></div>
            </div>
            <div className='flex'>
                <div className='h-14 w-14 flex-auto bg-blue-500'>01</div>
                <div className='... w-64 flex-auto bg-blue-600'>02</div>
                <div className='... w-32 flex-auto bg-blue-700'>03</div>
            </div> */}
        </main>
    );
}

export default LocationTime;
