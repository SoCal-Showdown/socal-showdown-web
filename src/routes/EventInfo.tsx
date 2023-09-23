function EventInfo() {
    return (
        <main>
            <h1 className='p-3 text-center font-serif text-2xl font-bold text-bluegray'>
                Event Info
            </h1>
            <div className='h-auto w-auto bg-orange-600'>
                <iframe
                    src='https://docs.google.com/document/d/1xpXQ2m-6wnE8lJ7vfZGyj5LZa2_FiiNrmf5Rd18gKRM/edit?pli=1ci%20Schools!5e0!3m2!1sen!2sus!4v1693364360555!5m2!1sen!2sus'
                    loading='lazy'
                    className='m-auto w-auto'
                    title='Schedule'></iframe>
            </div>
            <div className='m-5 h-max w-fit max-w-md p-7 pt-0 leading-9'></div>
        </main>
    );
}

export default EventInfo;
