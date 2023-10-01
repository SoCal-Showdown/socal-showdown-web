import GeneHassLogo from './images/GeneHassLogo.png';
import ChevronLogo from './images/ChevronLogo.png';
import AerojetRocketDyneLogo from './images/AerojetRocketdyneLogo2.png';
import L3HLogo from './images/L3HLogo2.png';
import TeamSprocketLogo from './images/TeamSprocketLogo.png';
import SmartandFinalLogo from './images/Smart&FinalLogo.png';
import JerseyMikesLogo from './images/JerseyMikesLogo.png';
import MKLogo from './images/MKLogo.png';
import IkesSandwichesLogo from './images/IkesSandwichesLogo3.png';
import RaisingCanesLogo from './images/RaisingCanesLogo.avif';
import HeaderImage from './HeaderImage';

function Sponsors() {
    return (
        <main>
            {/* <h1 className='text-bluegray-rgba p-3 text-center font-serif text-2xl font-bold'>
                Sponsors
            </h1> */}
            {/* <HeaderImage pageTitle='Sponsors' /> */}
            <div className='mt-10 flex justify-center'>
                <p className='w-1/2 text-center font-bold'>
                    This event wouldn't be possible without our great sponsors!
                    If you're interested in supporting this event, please
                    contact us for more information.
                </p>
            </div>

            <div className='flex flex-wrap justify-center '>
                <div className='m-5 w-1/2'>
                    <h1 className='m-5 text-center font-serif text-2xl font-semibold'>
                        Title Sponsor
                    </h1>
                    <img
                        alt='GeneHassLogo'
                        src={GeneHassLogo}
                        className='mx-auto w-1/2'></img>
                </div>

                <div className='m-5 w-5/6'>
                    <h1 className='m-5 text-center font-serif text-2xl font-semibold'>
                        Alliance Captains
                    </h1>

                    <div className='-mx-10 flex w-auto flex-wrap items-center justify-center'>
                        <div className='m-5 w-1/5 px-2'>
                            <img
                                alt='ChevronLogo'
                                src={ChevronLogo}
                                className='mx-auto'></img>
                        </div>

                        <div className='m-5 w-1/5 px-2'>
                            <img
                                src={AerojetRocketDyneLogo}
                                className='mx-auto'
                                alt='AerojetRocketDyneLogo'></img>
                        </div>

                        <div className='m-5 w-1/5 px-2'>
                            <img
                                alt='L3HLogo'
                                src={L3HLogo}
                                className='mx-auto'></img>
                        </div>

                        <div className='px-2m-5 w-1/5'>
                            <img
                                src={TeamSprocketLogo}
                                className='mx-auto'
                                alt='TeamSprocketLogo'></img>
                        </div>
                    </div>
                </div>

                <div className='m-5 w-5/6'>
                    <h1 className='m-5 w-auto text-center font-serif text-2xl font-semibold'>
                        Fierce Competitors
                    </h1>

                    <div className='-mx-10 flex flex-wrap items-center justify-center gap-3'>
                        <div className='m-5 w-1/6 px-2'>
                            <img
                                src={SmartandFinalLogo}
                                className='mx-auto'
                                alt='SmartandFinalLogo'></img>
                        </div>

                        <div className='m-5 w-1/6 px-2'>
                            <img
                                src={JerseyMikesLogo}
                                className='mx-auto'
                                alt='JerseyMikesLogo'></img>
                        </div>

                        <div className='m-5 w-1/6 px-2'>
                            <img
                                src={MKLogo}
                                className='mx-auto'
                                alt='MKLogo'></img>
                        </div>

                        <div className='m-5 w-1/6 px-2'>
                            <img
                                src={RaisingCanesLogo}
                                className='mx-auto'
                                alt='RaisingCanesLogo'></img>
                        </div>

                        <div className='px-2m-5 w-1/6'>
                            <img
                                src={IkesSandwichesLogo}
                                className='mx-auto'
                                alt='IkesSandwichesLogo'></img>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Sponsors;
