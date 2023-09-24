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
            <div>
                <h2 className='p-3 text-center font-serif text-2xl font-bold text-bluegray'>
                    Dicovery Center
                </h2>
            </div>
            <div>
                <div className='flex h-screen w-screen flex-wrap justify-center gap-2'>
                    <h2 className='font-semibold'>
                        Do you have any elementary or middle school learners who
                        are interested in robotics and STEAM? At SoCal
                        Showdown's Discovery Row, you'll be able to: Design,
                        build, and drive LEGO Robots Build your own popsicle
                        stick launcher Find out more about FIRST Robotics
                        Competition Visit sponsor booths to learn more about
                        real-world engineering Available on: Saturday 9am - 4pm
                        Sunday 9am - 11am
                    </h2>
                    <iframe
                        src='https://docs.google.com/document/d/e/2PACX-1vRypeounWM6kW13gsEDDUGOHUxYEdDgghWGWpkmvBM_WmE9jCQS3nkhbq7QnSmy0AaUsPOy8177yEf8/pub?embedded=true'
                        className='h-fill m-2 w-2/3'
                        title='Dicovery Center'></iframe>
                </div>
            </div>
        </main>
    );
}

export default EventInfo;
