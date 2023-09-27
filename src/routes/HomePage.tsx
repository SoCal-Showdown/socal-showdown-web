import Sponsors from './articles/Sponsors';

function HomePage() {
    return (
        <main>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='text-5xl font-semibold text-black'>
                Continue your season at <br></br>
                <b className='text-purple-700'>SoCal ShowDown!</b>
            </h1>
            <br></br>
            <p className='text-lg'>
                Join us for a weekend of robotics action and fierce competition
                at <b>SoCal Showdown</b>, a new off-season competition held at
                the same venue as the Los Angeles Regional.
                <br></br>
                <br></br>
                Bring your younger siblings and friends to explore and invent at{' '}
                <b className='underline'>Discovery Row</b>! Come build a
                launcher, experiment with LEGO Robots, and find out what FIRST
                Robotics Competition is all about. Don’t forget to visit booths
                from our sponsors to discover more about real-world engineering!
                <br></br>
                <br></br>
                More information will be posted soon, so stay tuned!
            </p>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='text-center text-2xl text-white underline decoration-purple-700'>
                weewooo and stuff ahhhhhhhhhhhhhhhhhhhhhh
            </h1>
            <h1 className='mr-52 text-center text-5xl font-semibold'>
                Sponsors
            </h1>
            <br></br>
            <br></br>
            <Sponsors />
            <br></br>
            <br></br>
            <br></br>
            <h1 className='text-center text-2xl text-white underline decoration-purple-700'>
                weewooo and stuff ahhhhhhhhhhhhhhhhhhhhhh
            </h1>
            <br></br>
            <br></br>
            <h1 className='mr-52 text-center text-5xl font-semibold'>
                Host Teams
            </h1>
            <div className='bg-purple-700'>
                <br></br>
                <br></br>
                <a
                    href='https://687camsrobotics.wixsite.com/mysite'
                    className='text-2xl font-bold text-white underline'>
                    687 - The Nerd Herd
                </a>
                <br></br>
                <br></br>
                <br></br>
                <a
                    href='https://www.frcteam2637.org/'
                    className='text-2xl font-bold text-white underline'>
                    2637 - Phantom Catz
                </a>
                <br></br>
                <br></br>
                <br></br>
                <a
                    href='https://team4201.org/'
                    className='text-2xl font-bold text-white underline'>
                    4201 - The Vitruvian Bots
                </a>
            </div>
        </main>
    );
}

export default HomePage;
