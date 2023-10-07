import Dropdown from 'react-bootstrap/Dropdown';

function Teams() {
    return (
        <Dropdown>
            <Dropdown.Toggle
                variant='Primary'
                id='dropdown-basic'
                className='border-none bg-none text-black'>
                Teams
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Hosts</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>TBA (Team List)</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

function GameRules() {
    return (
        <Dropdown>
            <Dropdown.Toggle
                variant='Primary'
                id='dropdown-basic'
                className='border-none bg-none text-black'>
                Game Rules
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Game Rules</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Awards</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

function EventInfo() {
    return (
        <Dropdown>
            <Dropdown.Toggle
                variant='Primary'
                id='dropdown-basic'
                className='border-none bg-none text-black'>
                Event Info
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>COVID Policy</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Discovery Row</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Maps</Dropdown.Item>
                <Dropdown.Item href='#/action-4'>Schedule</Dropdown.Item>
                <Dropdown.Item href='#/action-5'>Workshops</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

function Drop() {
    return (
        <div className='mx-[1090px] flex flex-row px-[8px] text-[17px] '>
            <button className='bg-black text-white '>Home</button>
            <Teams></Teams>
            <GameRules></GameRules>
            <EventInfo></EventInfo>
        </div>
    );
}

export default Drop;
