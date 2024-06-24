import React from "react";

const Landing = () => {
  return (
    <>
      <div className="h-screen overflow-y-auto no-scrollbar">
        <div className="w-full fixed top-0">
          <div className="h-[10vh] border border-transparent text-white font-light text-2xl flex justify-between px-5 items-center bg-black/10 backdrop-filter backdrop-blur-md">
            <div className="flex gap-2 items-center transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
              <img src="/logo.png" className="h-10" alt="logo" />
              <div className="font-lexend">algabay</div>
            </div>
            <div className="flex gap-10 items-center text-base font-light">
              <div className="transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
                What we do
              </div>
              <div className="transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
                Tracks
              </div>
              <div className="transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
                Customers
              </div>
              <div className="transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
                Careers
              </div>
            </div>

            <div className="bg-white text-black text-base font-light px-4 py-0.5 transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
              Let's build
            </div>
          </div>
        </div>
        <div className="absolute rounded-l rounded-r rounded-full inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-yellow-500 via-sky-500 to-red-500 animate-border"></div>
        <div className="absolute rounded-l rounded-r rounded-full inset-x-0 top-0 h-0.5 bg-gradient-to-r from-red-500 via-sky-500 to-green-500 animate-border"></div>

        <div className="mt-[10vh] bg-black h-[90vh] flex flex-col items-center justify-evenly text-white">
          <div>
            <div className="text-[3rem] font-thin">We build startups</div>
            <div className="font-light text-lg font-lexend">
              From visionary ideas into impactful realities, we specialize in
              app development, website creation, blockchain and software
              development.
            </div>
          </div>
        </div>
        <div className="mt-[10vh] bg-orange-500 h-screen flex items-center justify-evenly text-white"></div>
      </div>
    </>
  );
};

export default Landing;
