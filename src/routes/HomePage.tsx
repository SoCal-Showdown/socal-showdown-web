/* eslint-disable jsx-a11y/img-redundant-alt */
import Sponsors from './articles/Sponsors';
import vitruvianBotsImage from './articles/images/vitruvianBots.png';
import nerdHerdImage from './articles/images/nerdHerd.png';
import phantomCatzImage from './articles/images/phantomCatz.png';
import robotImage from './articles/images/Robot.png';
import HeaderImage from './articles/HeaderImage';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main>
            <HeaderImage pageTitle='Socal Showdown' />
            <h1 className='font-Oswald mb-9 text-center text-5xl font-semibold text-black'>
                Continue your season at <br></br>
                <b className='text-purple'>SoCal ShowDown!</b>
            </h1>
            <div className='flex gap-6 '>
                <img
                    src={robotImage}
                    alt='robot image'
                    className='ml-5 w-0 flex-grow basis-0 scale-90'
                />
                <div className='flex-grow basis-0'>
                    <p className='font- w-1/2 text-center text-lg'>
                        Join us for a weekend of robotics action and fierce
                        competition at <b>SoCal Showdown</b>, a new off-season
                        competition held at the same venue as the Los Angeles
                        Regional.
                        <br></br>
                        <br></br>
                        Bring your younger siblings and friends to explore and
                        invent at{' '}
                        <Link to='row'>
                            <b className='underline'>Discovery Row</b>
                        </Link>
                        ! Come build a launcher, experiment with LEGO Robots,
                        and find out what FIRST Robotics Competition is all
                        about. Don’t forget to visit booths from our sponsors to
                        discover more about real-world engineering!
                        <br></br>
                        <br></br>
                        More information will be posted soon, so stay tuned!
                    </p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='text-center text-2xl text-white underline decoration-purple'>
                weewooo and stuff ahhhhhhhhhhhhhhhhhhhhhh
            </h1>
            <br></br>
            <br></br>
            <h1 className='font-Oswald text-left text-5xl font-semibold text-black'>
                {' '}
                COVID Policy
            </h1>
            <p>
                We are not going to be requiring masks, proof of vaccination, or
                proof of a negative test but we do want to remind everyone of
                some good basic practices:{' '}
                <Link to='covid' className='text-purple underline'>
                    Click here for more info.
                </Link>
                <br></br>
                <br></br>
                We recognize that Covid-19 cases are starting to raise in our
                communities. We also understand that mitigating all risk of
                exposure to Covid-19 is impossible, and participants should make
                responsible decisions based on their own risk assessment and
                comfort. That said if participants are more comfortable wearing
                a mask during the event they should and will not be asked to
                remove for any reason.
            </p>

            <h1 className='text-center text-2xl text-white underline decoration-purple'>
                weewooo and stuff ahhhhhhhhhhhhhhhhhhhhhh
            </h1>
            <br></br>
            <br></br>
            <h1 className='text-center text-5xl font-semibold'>Sponsors</h1>
            <br></br>
            <br></br>
            <Sponsors />
            <br></br>
            <br></br>
            <br></br>
            <h1 className='text-center text-2xl text-white underline decoration-purple'>
                weewooo and stuff ahhhhhhhhhhhhhhhhhhhhhh
            </h1>
            <br></br>
            <br></br>
            <div className='items-left flex flex-row'>
                <h1 className='text-center text-5xl font-semibold'>
                    Host Teams{' '}
                </h1>
                <p className='py-5 text-2xl font-semibold'>
                    (Want to learn{' '}
                    <Link to='Teams'>
                        <b className='font-semibold text-purple underline'>
                            more
                        </b>
                    </Link>
                    ?)
                </p>
            </div>
            <br></br>
            <div className='flex  flex-wrap items-center justify-center bg-purple'>
                <br></br>
                <br></br>
                <div className='flex flex-row items-center'>
                    <img
                        alt='Nerd Herd Group Photo'
                        src={nerdHerdImage}
                        className='px-2m-5 mx-auto w-1/5 scale-100'
                    />
                    <a
                        href='https://687camsrobotics.wixsite.com/mysite'
                        className='text-right text-2xl font-bold text-white underline'>
                        687 - The Nerd Herd
                    </a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img
                        alt='Phantom Catz Group Photo'
                        src={phantomCatzImage}
                        className='px-2m-5 mx-auto w-1/5 scale-100'
                    />
                    <a
                        href='https://www.frcteam2637.org/'
                        className='text-2xl font-bold text-white underline'>
                        2637 - Phantom Catz
                    </a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img
                        alt='The Vitruvian Bots Group Photo'
                        src={vitruvianBotsImage}
                        className='px-2m-5 mx-auto w-1/5 scale-90'
                    />
                    <a
                        href='https://team4201.org/'
                        className='text-2xl font-bold text-white underline'>
                        4201 - The Vitruvian Bots
                    </a>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
