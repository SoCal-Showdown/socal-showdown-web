import posterImage from './images/poster.png';
import HeaderImage from './HeaderImage';

function Row() {
    return (
        <main>
            <HeaderImage pageTitle='Discovery Row' />
            <div className='flex gap-6 '>
                <img
                    src={posterImage}
                    alt='2023 SoCal Showdown Poster'
                    className='ml-5 w-0 flex-grow basis-0 scale-90'
                />
                <div className='flex-grow basis-0'>
                    <li>Design, build, and drive LEGO Robots</li>
                    <li>Build your own popsicle stick launcher</li>
                    <li>Find out more about FIRST Robotics Competition</li>
                    <li>
                        Visit sponsor booths to learn more about real-world
                        engineering
                    </li>
                    <p>
                        <b>Available on:</b>
                        <br></br>
                        Saturday 9am - 4pm
                        <br></br>
                        Sunday 9am - 11am
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Row;
