import HeaderImage from './HeaderImage';
import vitruvianImage from './images/vitruvianBots.png';
import NerdHerdImage from './images/nerdHerd.png';
import PhantomCatzImage from './images/phantomCatz.png';
import vitruvianLogoImage from './images/vitruvianBotsLogo.png';
import NerdHerdLogoImage from './images/nerdHerdLogo.jpg';
import PhantomCatzLogoImage from './images/phantomCatzLogo.png';

function Teams() {
    return (
        <main>
            <HeaderImage pageTitle='Host Teams' />

            <br></br>
            <br></br>

            <div className='flex gap-6'>
                <div className='flex flex-col'>
                    <img
                        alt=''
                        src={NerdHerdImage}
                        className='flex-grow scale-90 '
                    />
                    <img
                        alt=''
                        src={NerdHerdLogoImage}
                        className='flex-grow scale-90'
                    />
                </div>
                <div className='flex flex-col'>
                    <a
                        href='https://687camsrobotics.wixsite.com/mysite'
                        className='flex-grow text-center text-5xl underline'>
                        687 - The Nerd Herd
                    </a>
                    <p className='flex-grow text-center text-lg'>
                        Team 687, the Nerd Herd, joined FIRST in 2001, and has
                        grown to become one of the most diverse and popular
                        clubs on our school campus with over 100 members - many
                        of which belong to underrepresented groups. With the
                        California Academy of Mathematics & Science (CAMS)
                        ranked as one of the top 3 schools in California, our
                        students demonstrate the strong ability to balance their
                        rigorous academics along with extracurriculars, such as
                        FRC.
                        <br></br>
                        <br></br>
                        <b> Mission:</b> Encourage youth to pursue fields in
                        science and technology by offering an exciting
                        mentor-based program that helps build real world
                        engineering and business skills along with well-rounded
                        life capabilities including self-confidence,
                        communication, and leadership.
                    </p>
                </div>
            </div>

            <div className='flex gap-6'>
                <div className='flex flex-col'>
                    <img
                        alt=''
                        src={PhantomCatzImage}
                        className='flex-grow scale-90 '
                    />
                    <img
                        alt=''
                        src={PhantomCatzLogoImage}
                        className='flex-grow scale-90'
                    />
                </div>
                <div className='flex flex-col'>
                    <a
                        href='https://www.frcteam2637.org/'
                        className='flex-grow text-center text-5xl underline'>
                        2637 - Phantom Catz
                    </a>
                    <p className='flex-grow text-center text-lg'>
                        Team 2637 was founded in 2008 as a club at Palos Verdes
                        Peninsula High School. We strive for students to explore
                        all areas of education and to work with mentors to share
                        and apply knowledge of engineering, business, and
                        leadership skills through a fun, hands-on experience.
                        Our students also develop skills in leadership,
                        collaboration, communication, planning, fundraising, and
                        public relations, to simulate the environment of a
                        competitive business organization.
                        <br></br>
                        <br></br>
                        <b> Mission:</b> Team 2637 aims to develop a sustainable
                        and diverse FRC team that educates and inspires all
                        generations to learn about Science, Technology,
                        Engineering, Math, and Innovation.
                    </p>
                </div>
            </div>

            <div className='flex gap-6'>
                <div className='flex flex-col'>
                    <img
                        alt=''
                        src={vitruvianImage}
                        className='flex-grow scale-50'
                    />
                    <img
                        alt=''
                        src={vitruvianLogoImage}
                        className='flex-grow scale-50'
                    />
                </div>
                <div className='flex flex-col'>
                    <a
                        href='https://team4201.org/'
                        className='flex-grow text-center text-5xl underline'>
                        4201 - The Vitruvian Bots
                    </a>
                    <p className='flex-grow text-center text-lg '>
                        Team 4201 , The Vitruvian Bots, is a FIRST Robotics
                        Competition Team from Da Vinci Schools. The team joined
                        FIRST in 2012, and have participated in every game since
                        then, qualifying for World Championships for a total of
                        six times. Team 4201 focuses on STEAM outreach in our
                        local area, such as with hosting annual summer camps,
                        giving presentations and robot demonstrations to local
                        communities, and by assisting other teams.
                        <br></br>
                        <br></br>
                        <b> Mission:</b> To serve as a STEAM Hub where our
                        community members are inspired to learn, grow, and
                        collaborate.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Teams;
