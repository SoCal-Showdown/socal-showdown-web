/* eslint-disable jsx-a11y/img-redundant-alt */
import Sponsors from './articles/Sponsors';
import vitruvianBotsImage from './articles/images/vitruvianBots.png';
import nerdHerdImage from './articles/images/nerdHerd.png';
import phantomCatzImage from './articles/images/phantomCatz.png';
import robotImage from './articles/images/Robot.png';

function HomePage() {
    return (
        <main>
            <br></br>
            <div className='flex gap-6 '>
                <img
                    src={robotImage}
                    alt='robot image'
                    className='ml-5 w-0 flex-grow basis-0 scale-90'
                />
                <div className='flex-grow basis-0'>
                    <h1 className='my-8 mr-[250px] text-left font-[Oswald] text-5xl uppercase text-black'>
                        Continue your season at <br></br>
                        <b className='text-purple '>SoCal ShowDown!</b>
                    </h1>
                    <p className='w-auto text-left text-lg'>
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
                        Don't forget to visit booths from our sponsors to
                        discover more about real-world engineering!
                        <br></br>
                        <br></br>
                        More information will be posted soon, so stay tuned!
                    </p>
                </div>
            </div>

            <hr className='mx-10 my-8 h-[2.5px] w-[1200px] rounded bg-purple object-left' />

            <h1 className='mx-10 my-10 text-left font-[Oswald] text-5xl uppercase'>
                Sponsors
            </h1>

            <div className='my-20'>
                <Sponsors />
            </div>

            <div className='flex items-center justify-center '>
                <hr className=' mx-10 h-[2.5px] w-[1400px]  rounded bg-purple' />
            </div>

            <h1 className='mx-[86px] my-8 text-left font-[Oswald] text-5xl'>
                Host Teams
            </h1>

            <div className='my-5  flex  items-center justify-center gap-0 bg-purple'>
                <div className='flex flex-col '>
                    <img
                        alt='Nerd Herd Group Photo'
                        src={nerdHerdImage}
                        className='flex flex-grow '
                    />
                    <a
                        href='https://687camsrobotics.wixsite.com/mysite'
                        className='text-center text-2xl font-bold text-white underline '>
                        687 - The Nerd Herd
                    </a>
                </div>
                <div className='flex flex-col '>
                    <img
                        alt='Phantom Catz Group Photo'
                        src={phantomCatzImage}
                        className='flex flex-grow scale-75'
                    />
                    <a
                        href='https://www.frcteam2637.org/'
                        className=' text-center text-2xl font-bold text-white underline'>
                        2637 - Phantom Catz
                    </a>
                </div>
                <div className='flex flex-col items-center '>
                    <img
                        alt='The Vitruvian Bots Group Photo'
                        src={vitruvianBotsImage}
                        className='flex scale-50'
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
