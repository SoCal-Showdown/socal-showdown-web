import LAR from './images/lar-wide.jpg';

function HeaderImage(props: { pageTitle: string }) {
    return (
        <div className='relative h-60 overflow-hidden'>
            {/* <img
                src={LAR}
                alt='Avatar'
                className='h-full w-full object-cover brightness-50 '
            />

            <div className='absolute inset-x-0 bottom-28 w-full py-2.5 text-center text-3xl font-bold leading-4 text-white underline'>
                {props.pageTitle}
            </div> */}

            <div className='bg-zinc-800'>
                <h1 className='absolute left-1/2 z-10 -translate-x-1/2 translate-y-[75px] font-[Oswald] text-[60pt] font-[900] text-white underline decoration-[#6d22b6] decoration-[13px] underline-offset-[20px]'>
                    {props.pageTitle}
                </h1>
                <img
                    src='CompetitionPhoto.png'
                    className='z-0 h-[285px] w-full object-cover object-center opacity-50'
                    alt='competitionphoto'
                />
            </div>
        </div>
    );
}
export default HeaderImage;
