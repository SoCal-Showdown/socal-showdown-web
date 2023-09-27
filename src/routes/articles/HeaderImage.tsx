import LARwide from './images/lar-wide.jpg';
import LARwidecroppsed from './images/lar-wide-cropped.jpeg';

function HeaderImage(props: { pageTitle: string }) {
    return (
        <div className='left-0 top-0'>
            <img src={LARwidecroppsed} className='bg-fixed' alt='LAR Photo' />
            <p className='text-lg text-fuchsia-600'>{props.pageTitle}</p>
        </div>
    );
}
export default HeaderImage;
