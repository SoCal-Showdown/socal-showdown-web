/* eslint-disable jsx-a11y/img-redundant-alt */
import Sponsors from './articles/Sponsors';
import vitruvianBotsImage from './articles/images/vitruvianBots.png';
import nerdHerdImage from './articles/images/nerdHerd.png';
import phantomCatzImage from './articles/images/phantomCatz.png';
import robotImage from './articles/images/Robot.png';
import HeaderImage from './articles/HeaderImage';

function HomePage() {
    return (
        <main>
            <HeaderImage pageTitle='SOCAL SHOWDOWN'></HeaderImage>
            <h1 className='text-center text-5xl font-semibold text-black'>
                Continue your season at <br></br>
                <b className='text-purple-700'>SoCal ShowDown!</b>
            </h1>
            <br></br>
            <div className='flex gap-6 '>
                <img
                    src={robotImage}
                    alt='robot image'
                    className='ml-5 w-0 flex-grow basis-0 scale-90'
                />
                <div className='flex-grow basis-0'>
                    <p className='w-1/2 text-center text-lg'>
                        Join us for a weekend of robotics action and fierce
                        competition at <b>SoCal Showdown</b>, a new off-season
                        competition held at the same venue as the Los Angeles
                        Regional.
                        <br></br>
                        <br></br>
                        Bring your younger siblings and friends to explore and
                        invent at <b className='underline'>Discovery Row</b>!
                        Come build a launcher, experiment with LEGO Robots, and
                        find out what FIRST Robotics Competition is all about.
                        Don’t forget to visit booths from our sponsors to
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
            <h1 className='decoration-purple-700 text-center text-2xl text-white underline'>
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
            <h1 className='decoration-purple-700 text-center text-2xl text-white underline'>
                weewooo and stuff ahhhhhhhhhhhhhhhhhhhhhh
            </h1>
            <br></br>
            <br></br>
            <h1 className='text-center text-5xl font-semibold'>Host Teams</h1>
            <br></br>
            <br></br>
            <div className='bg-purple-700  flex flex-wrap items-center justify-center'>
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
