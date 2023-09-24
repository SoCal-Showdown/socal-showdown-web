function EventInfo() {
    return (
        <main>
            <h1 className='p-3 text-center font-serif text-2xl font-bold text-bluegray'>
                Event Info
            </h1>
            <h2 className='text-1.5xl text-center font-serif font-semibold'>
                Schedule
            </h2>
            <div className='flex h-screen w-screen flex-wrap justify-center gap-2'>
                <iframe
                    src='https://docs.google.com/document/d/e/2PACX-1vSonp2hI3h6Ccq2kjgTZASQOx7y7RZmveAx-H2ebVo7GeEZjb16MO5l3oTwMeA_KiHhGXQuPDfGfswN/pub?embedded=true'
                    className='h-fill m-2 w-1/2 align-baseline'
                    title='Schedule'>
                    /
                </iframe>
            </div>
        </main>
    );
}

export default EventInfo;
