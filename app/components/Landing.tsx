"use client";
import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const Landing = () => {
  const [productShow, setProductShow] = useState(false);
  const [trackShow, setTrackShow] = useState(false);
  return (
    <>
      <div className="h-screen overflow-y-auto no-scrollbar flex flex-col items-center justify-between">
        <div className="flex justify-between items-center text-white text-2xl px-5 w-full h-[10vh] backdrop-filter backdrop-blur-md bg-gradient-to-r from-rose-500 via-sky-500 to-green-500 animate-border">
          <div className="flex gap-2 items-center transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
            <img src="/logo.png" className="h-10" alt="logo" />
            <div className="font-lexend font-light">algabay</div>
          </div>
          <div className="flex gap-10 items-center text-base font-light">
            <div
              onClick={() => {
                setProductShow(!productShow);
                setTrackShow(false);
              }}
              className="transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110"
            >
              What we build
              {productShow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            <div
              onClick={() => {
                setTrackShow(!trackShow);
                setProductShow(false);
              }}
              className="transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110"
            >
              Tracks
              {trackShow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
          </div>

          <div className="text-base ctransition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
            Contact us
          </div>
        </div>

        <div className="flex flex-col w-fit items-center justify-center gap-20 text-white">
          <div>
            <div className="text-[3rem] font-thin">
              <div>The Startup for Startups</div>
            </div>
            <div className="font-extralight text-lg font-lexend">
              We make ideas into realities, with specialize in app development,
              website development, software development and blockchain.
            </div>

            <div className="my-10 flex items-center gap-5 cursor-pointer transition-transform deration-500 ease-in-out hover:scale-110 bg-white text-black text-2xl w-fit px-4 py-1 font-extralight">
              <div>Let's Build Your Idea</div>
              <ArrowRightAltIcon sx={{ fontSize: 30 }} />
            </div>
          </div>

          <div
            className={`transition-transform cursor-pointer duration-1000 flex justify-evenly w-[80%] text-black font-light ${
              productShow ? "scale-125" : trackShow ? "scale-75" : ""
            }`}
          >
            <div className="text-white flex flex-col gap-2 justify-center items-center">
              <img src="/web.png" className="h-12" alt="logo" />
              WEBSITE
            </div>
            <div className="text-white flex flex-col gap-2 justify-center items-center">
              <img src="/ui.png" className="h-12" alt="logo" />
              UI/UX
            </div>
            <div className="text-white flex flex-col gap-2 justify-center items-center">
              <img src="/ai.png" className="h-12" alt="logo" />
              AI
            </div>
            <div className="text-white flex flex-col gap-2 justify-center items-center">
              <img src="/app.png" className="h-12" alt="logo" />
              APP
            </div>
            <div className="text-white flex flex-col gap-2 justify-center items-center">
              <img src="/blockchain.png" className="h-12" alt="logo" />
              BLOCKCHAIN
            </div>
          </div>
        </div>
        <div
          className={`py-4 text-sm bottom-0 px-10 transition-transform cursor-pointer duration-1000 flex flex-wrap w-full justify-evenly gap-4 font-light ${
            trackShow ? "text-white" : "text-neutral-400"
          }`}
        >
          <div className=" w-full rounded-l rounded-r rounded-full inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-500 via-sky-500 to-green-500 animate-border"></div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Food Delivery
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Taxi & Transportation
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Education
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Grocery Delivery
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Beauty & Salon
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Fitness
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Rental
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Consultation App
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            E-commerce Delivery
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Home Service
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Healthcare
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Freelancer
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Social Media App
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Pharmacy Delivery
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Laundry Services
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Logistics
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Ecommerce
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Dating App
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Pickup & Delivery
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Concierge Services
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Real Estate
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            Peer-To-Peer
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
