function HomePage() {
    return (
        <main>
            <div className='grid place-content-center bg-[#6d22b6] py-4'>
                <button className="rounded border border-solid border-white px-6 py-1 font-['Open_Sans'] text-[18px] text-white">
                    See Latest Announcements
                </button>
            </div>
            <nav>
                <button className='px-8 py-2'>
                    <img
                        src='SoCalShowdown.png'
                        alt='socalshowdown'
                        className='w-30 h-10 object-scale-down'
                    />
                </button>
                <button className="-translate-y-[15px] bg-black px-[8px] font-['Open_Sans'] text-[17px] text-white">
                    Home
                </button>
                {/* Team Dropdown Menu vvv */}
                <button
                    id='teamDropdown'
                    data-dropdown-toggle='dropdownHover'
                    data-dropdown-trigger='hover'
                    className="-translate-y-[15px] px-[10px] font-['Open_Sans'] text-[17px]">
                    Teams
                </button>
            </nav>
            <div className='bg-zinc-800'>
                <h1 className='absolute left-1/2 z-10 -translate-x-1/2 translate-y-[75px] font-[Oswald] text-[60pt] font-[900] text-white underline decoration-[#6d22b6] decoration-[13px] underline-offset-[20px]'>
                    SOCAL SHOWDOWN
                </h1>
                <img
                    src='CompetitionPhoto.png'
                    className='z-0 h-[285px] w-full object-cover object-center opacity-50'
                    alt='competitionphoto'
                />
            </div>
        </main>
    );
}

export default HomePage;
