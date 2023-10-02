import LAR from './images/lar-wide.jpg';

function HeaderImage(props: { pageTitle: string }) {
    return (
        <div className='relative h-60 overflow-hidden'>
            <img
                src={LAR}
                alt='Avatar'
                className='h-full w-full object-cover brightness-50 '
            />

            <div className='absolute inset-x-0 bottom-28 w-full py-2.5 text-center text-7xl font-bold leading-4 text-white underline decoration-purple'>
                {props.pageTitle}
            </div>
        </div>
    );
}
export default HeaderImage;
