function EventInfo() {
    return (
        <main>
            <h1 className='p-3 text-center font-serif text-2xl font-bold text-bluegray'>
                Event Info
            </h1>

            <div className='flex h-screen w-screen flex-wrap justify-center gap-2'>
                <iframe
                    src='https://docs.google.com/document/d/e/2PACX-1vSonp2hI3h6Ccq2kjgTZASQOx7y7RZmveAx-H2ebVo7GeEZjb16MO5l3oTwMeA_KiHhGXQuPDfGfswN/pub?embedded=true'
                    className='h-fill m-2 w-1/2 align-baseline'
                    title='Schedule'>
                    /
                </iframe>
            </div>
            <div>
                <div className='flex h-screen w-screen flex-wrap justify-center gap-2'>
                    <iframe
                        src='https://docs.google.com/document/d/e/2PACX-1vQ2LEGaNxRovzOHp3jL0m2eJTdmoZHDVgojgcu2vKEQObzco_hymSiDAz38bdKwtJab15zNdYdUgQuE/pub?embedded=true'
                        className='h-fill m-2 w-2/3 align-baseline'
                        title='2023 Workshop Schedule'></iframe>
                </div>
            </div>
        </main>
    );
}

export default EventInfo;
