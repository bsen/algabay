"use client";
import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuIcon from "@mui/icons-material/Menu";

const Landing = () => {
  const [productShow, setProductShow] = useState(false);
  const [trackShow, setTrackShow] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen overflow-y-auto no-scrollbar flex flex-col items-center justify-between">
        <div className="flex justify-between items-center text-white text-xl md:text-2xl px-4 md:px-5 w-full h-[10vh] backdrop-filter backdrop-blur-md">
          <div className="flex gap-2 items-center transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
            <img src="/logo.png" className="h-8 md:h-10" alt="logo" />
            <div className="font-lexend font-light">algabay</div>
          </div>

          <div className="md:hidden">
            <MenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
          </div>

          <div className="hidden md:flex gap-10 items-center text-base font-light">
            <div
              onClick={() => {
                setProductShow(!productShow);
                setTrackShow(false);
              }}
              className={`transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110 ${
                productShow ? "underline underline-offset-4 scale-110" : ""
              }`}
            >
              What we build
              {productShow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            <div
              onClick={() => {
                setTrackShow(!trackShow);
                setProductShow(false);
              }}
              className={`transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110 ${
                trackShow ? "underline underline-offset-4 scale-110" : ""
              }`}
            >
              Tracks
              {trackShow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            <div
              className="text-base transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110"
              onClick={() =>
                (window.location.href = "https://wa.me/8116300272")
              }
            >
              Contact us
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-black bg-opacity-90 text-white p-4">
            <div
              onClick={() => {
                setProductShow(!productShow);
                setTrackShow(false);
                setMobileMenuOpen(false);
              }}
              className="py-2"
            >
              What we build
              {productShow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            <div
              onClick={() => {
                setTrackShow(!trackShow);
                setProductShow(false);
                setMobileMenuOpen(false);
              }}
              className="py-2"
            >
              Tracks
              {trackShow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            <div
              className="py-2"
              onClick={() =>
                (window.location.href = "https://wa.me/8116300272")
              }
            >
              Contact us
            </div>
          </div>
        )}

        <div className="flex flex-col w-full md:w-fit items-center justify-center gap-10 md:gap-20 text-white px-4 md:px-0">
          <div
            className={`p-10 transition-transform cursor-pointer duration-1000 ${
              productShow || trackShow ? "scale-75" : "scale-100"
            }`}
          >
            <div className="text-2xl md:text-[3rem] font-thin text-center md:text-left">
              <div>The Startup for Startups</div>
            </div>
            <div className="font-extralight text-sm md:text-lg font-lexend text-center md:text-left mt-4">
              We make ideas into realities, with specialize in app development,
              website development, software development and blockchain.
            </div>

            <div
              onClick={() =>
                (window.location.href = "https://wa.me/8116300272")
              }
              className="my-6 md:my-10 flex items-center justify-center md:justify-start gap-3 md:gap-5 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 bg-white text-black md:text-2xl w-full md:w-fit px-4 py-2 md:py-1 font-extralight"
            >
              <div className="text-sm md:text-2xl">Let's Build Your Idea</div>
              <ArrowRightAltIcon sx={{ fontSize: { xs: 24, md: 30 } }} />
            </div>
          </div>

          <div
            className={`transition-transform cursor-pointer duration-1000 flex flex-wrap justify-center md:justify-evenly w-full md:w-[80%] text-black font-light ${
              productShow ? "scale-110" : trackShow ? "scale-75 opacity-60" : ""
            }`}
          >
            {["WEBSITE", "UI UX", "AI", "APP", "BLOCKCHAIN"].map(
              (item, index) => (
                <div
                  key={index}
                  className="text-white flex flex-col gap-2 justify-center items-center m-4 md:m-0"
                >
                  <img
                    src={`/${item.toLowerCase()}.png`}
                    className="h-10 md:h-12"
                    alt={item}
                  />
                  <div className="text-sm md:text-base">{item}</div>
                </div>
              )
            )}
          </div>
        </div>

        <div
          className={`py-4 text-xs md:text-sm bottom-0 px-4 md:px-10 transition-transform cursor-pointer duration-1000 flex flex-wrap w-full justify-evenly gap-4 font-light ${
            trackShow ? "text-white" : "text-neutral-400"
          }`}
        >
          <div className="w-full rounded-l rounded-r rounded-full inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-500 via-sky-500 to-green-500 animate-border"></div>
          {[
            "Food Delivery",
            "Taxi & Transportation",
            "Education",
            "Grocery Delivery",
            "Beauty & Salon",
            "Fitness",
            "Rental",
            "Consultation App",
            "E-commerce Delivery",
            "Home Service",
            "Healthcare",
            "Freelancer",
            "Social Media App",
            "Pharmacy Delivery",
            "Laundry Services",
            "Logistics",
            "Ecommerce",
            "Dating App",
            "Pickup & Delivery",
            "Concierge Services",
            "Real Estate",
            "Peer-To-Peer",
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 justify-center items-center text-center w-[45%] md:w-auto"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Landing;
