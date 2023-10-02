function HomePage() {
    return (
        <main>
            <div className="grid place-content-center bg-[#6d22b6] py-4">
                <button className="px-6 py-1 border-solid border font-['Open_Sans'] text-[18px] border-white text-white rounded">See Latest Announcements</button>
            </div>
            <nav>
                <button className="px-8 py-2"><img src="SoCalShowdown.png" className="object-scale-down h-10 w-30" /></button>
                <button className="bg-black text-white px-[8px] -translate-y-[15px] font-['Open_Sans'] text-[17px]">Home</button>
                {/* Team Dropdown Menu vvv */}
                <button id="teamDropdown" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="px-[10px] -translate-y-[15px] font-['Open_Sans'] text-[17px]">Teams</button>              
                
            </nav>
            <div className="bg-zinc-800">
                <h1 className="absolute text-white left-1/2 -translate-x-1/2 translate-y-[75px] font-[Oswald] font-[900] text-[60pt] z-10 underline underline-offset-[20px] decoration-[#6d22b6] decoration-[13px]">SOCAL SHOWDOWN</h1>
                <img src="CompetitionPhoto.png" className="h-[285px] w-full object-cover object-center opacity-50 z-0" />
            </div>
        </main>
    );
}

export default HomePage;
