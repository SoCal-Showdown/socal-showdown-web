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
                    <h1 className='my-8 mr-[250px] text-left font-[Oswald] text-5xl uppercase text-black '>
                        Continue your season at <br></br>
                        <b className='text-purple '>SoCal ShowDown!</b>
                    </h1>
                    <p className=' w-full text-left text-lg'>
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

            <div className='flex items-center justify-center '>
                <hr className=' mx-10 h-[2.5px] w-[1465px]  rounded bg-purple' />
            </div>

            <h1 className='mx-[55px] my-10 text-left font-[Oswald] text-5xl uppercase'>
                Sponsors
            </h1>

            <div className='my-20'>
                <Sponsors />
            </div>

            <div className='flex items-center justify-center '>
                <hr className=' mx-10 h-[2.5px] w-[1400px]  rounded bg-purple' />
            </div>

            <h1 className='mx-[86px] my-10 text-left font-[Oswald] text-6xl'>
                Host Teams
            </h1>

            <div className='flex flex-wrap justify-center bg-purple'>
                <div className='-mx-10 flex w-auto flex-wrap items-center justify-center'>
                    <div className='m-5 w-1/4 px-2'>
                        <img
                            alt='ChevronLogo'
                            src={nerdHerdImage}
                            className='mx-auto'></img>
                        <a
                            href='https://687camsrobotics.wixsite.com/mysite'
                            className='mx-[75px] text-2xl font-bold text-white underline '>
                            687 - The Nerd Herd
                        </a>
                    </div>
                    <div className='m-5 w-1/4 px-2'>
                        <img
                            alt='ChevronLogo'
                            src={phantomCatzImage}
                            className='mx-auto'></img>
                        <a
                            href='https://www.frcteam2637.org/'
                            className=' mx-[75px] text-left text-2xl font-bold text-white underline'>
                            2637 - Phantom Catz
                        </a>
                    </div>
                    <div className='m-5 w-1/5 px-2'>
                        <img
                            src={vitruvianBotsImage}
                            className='mx-auto'
                            alt='AerojetRocketDyneLogo'></img>
                        <a
                            href='https://team4201.org/'
                            className='mx-[14px] text-2xl font-bold text-white underline'>
                            4201 - The Vitruvian Bots
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
