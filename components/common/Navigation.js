const Navigation = () => {
  return (
    <>
      <nav className="w-full bg-gray-800 shadow mb-10">
        <div className="container h-16 flex items-center justify-between mx-auto">
          <div className="flex items-center">
            <img className="w-10" src="/images/virus.svg" alt="logo" />
            <h3 className="text-3xl uppercase text-white font-bold tracking-normal leading-tight ml-3">
              Covid 19 Tracker
            </h3>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
