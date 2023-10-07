/* eslint-disable jsx-a11y/alt-text */
import Drop from './articles/Dropdown';

function HomePage() {
    return (
        <main>
            <div className='grid place-content-center bg-[#6d22b6] py-4'>
                <button className="rounded border border-solid border-white px-6 py-1 font-['Open_Sans'] text-[18px] text-white">
                    See Latest Announcements
                </button>
            </div>
            <div className='flex flex-row'>
                <button className='px-8 py-2'>
                    <img
                        src='SoCalShowdown.png'
                        className='w-30 h-10 object-scale-down'
                    />
                </button>

                <Drop></Drop>
            </div>
            <div className='bg-zinc-800'>
                <h1 className='absolute left-1/2 z-10 -translate-x-1/2 translate-y-[75px] font-[Oswald] text-[60pt] font-[900] text-white underline decoration-[#6d22b6] decoration-[13px] underline-offset-[20px]'>
                    SOCAL SHOWDOWN
                </h1>
                <img
                    src='CompetitionPhoto.png'
                    className='z-0 h-[285px] w-full object-cover object-center opacity-50'
                />
            </div>
        </main>
    );
}

export default HomePage;
