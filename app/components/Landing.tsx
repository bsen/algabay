"use client";
import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

interface HeaderProps {
  productShow: boolean;
  setProductShow: React.Dispatch<React.SetStateAction<boolean>>;
  trackShow: boolean;
  setTrackShow: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Landing: React.FC = () => {
  const [productShow, setProductShow] = useState<boolean>(false);
  const [trackShow, setTrackShow] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Header
        productShow={productShow}
        setProductShow={setProductShow}
        trackShow={trackShow}
        setTrackShow={setTrackShow}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <section className="h-screen">
        <ProductsPage productShow={productShow} />
      </section>
      <section className="min-h-screen">
        <TracksPage trackShow={trackShow} />
      </section>
      <Footer />
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({
  productShow,
  setProductShow,
  trackShow,
  setTrackShow,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => (
  <header className="fixed top-0 left-0 right-0 bg-black/20 backdrop-filter backdrop-blur-md text-white text-xl md:text-2xl px-4 md:px-5 h-[10vh] z-50">
    <div className="flex justify-between items-center h-full">
      <Logo />
      <MobileMenuIcon
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <DesktopMenu
        productShow={productShow}
        setProductShow={setProductShow}
        trackShow={trackShow}
        setTrackShow={setTrackShow}
      />
    </div>
    <GradientBorder />
  </header>
);

const Logo: React.FC = () => (
  <div className="flex gap-2 items-center transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
    <img src="/logo.png" className="h-8 md:h-10" alt="logo" />
    <div className="font-light text-white font-lexend text-lg">algabay</div>
  </div>
);

const MobileMenuIcon: React.FC<{
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ mobileMenuOpen, setMobileMenuOpen }) => (
  <div className="md:hidden">
    <MenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
  </div>
);

const DesktopMenu: React.FC<
  Omit<HeaderProps, "mobileMenuOpen" | "setMobileMenuOpen">
> = ({ productShow, setProductShow, trackShow, setTrackShow }) => (
  <div className="hidden md:flex gap-10 items-center text-base font-light">
    <MenuDropdown
      title="What we build"
      isOpen={productShow}
      onClick={() => {
        setProductShow(!productShow);
        setTrackShow(false);
      }}
    />
    <MenuDropdown title="Tracks" isOpen={trackShow} onClick={scrollToTracks} />
    <ContactButton />
  </div>
);
const scrollToTracks = () => {
  window.scrollTo({
    top: 700,
    behavior: "smooth",
  });
};

const MenuDropdown: React.FC<{
  title: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ title, isOpen, onClick }) => (
  <div
    onClick={onClick}
    className={`transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110 ${
      isOpen ? "underline underline-offset-4 scale-110" : ""
    }`}
  >
    {title}
    {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
  </div>
);

const ContactButton: React.FC = () => (
  <div
    className="text-base transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110"
    onClick={() => (window.location.href = "https://wa.me/8116300272")}
  >
    Contact us
  </div>
);

const GradientBorder: React.FC = () => (
  <div className="w-full rounded-l rounded-r rounded-full inset-x-0 absolute bottom-0 h-0.5 bg-gradient-to-r from-rose-500 via-sky-500 to-green-500 animate-border"></div>
);

const ProductsPage: React.FC<{ productShow: boolean }> = ({ productShow }) => (
  <div className="pt-[10vh] flex flex-col items-center justify-center min-h-screen px-4 md:px-0">
    <HeroSection productShow={productShow} />
    <ProductIcons productShow={productShow} />
  </div>
);

const HeroSection: React.FC<{ productShow: boolean }> = ({ productShow }) => (
  <div
    className={`p-10 transition-transform cursor-pointer duration-1000 ${
      productShow ? "scale-75" : "scale-110"
    }`}
  >
    <h1 className="text-2xl md:text-[3rem] font-thin text-center md:text-left text-white">
      The Startup for Startups
    </h1>
    <p className="font-extralight text-sm md:text-lg font-lexend text-center md:text-left mt-4 text-white">
      We make ideas into realities, with specialize in app development, website
      development, software development and blockchain.
    </p>
    <CallToActionButton />
  </div>
);

const CallToActionButton: React.FC = () => (
  <div
    onClick={() => (window.location.href = "https://wa.me/8116300272")}
    className="my-6 md:my-10 flex items-center justify-center md:justify-start gap-3 md:gap-5 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 bg-white text-black md:text-2xl w-full md:w-fit px-4 py-2 md:py-1 font-extralight"
  >
    <div className="text-sm md:text-2xl">Let's Build Your Idea</div>
    <ArrowRightAltIcon sx={{ fontSize: { xs: 24, md: 30 } }} />
  </div>
);

const ProductIcons: React.FC<{ productShow: boolean }> = ({ productShow }) => (
  <div
    className={`transition-transform cursor-pointer duration-1000 flex flex-wrap justify-center md:justify-evenly w-full md:w-[80%] text-white font-light ${
      productShow ? "scale-125" : "scale-75 opacity-60"
    }`}
  >
    {["WEBSITE", "UI UX", "AI", "APP", "BLOCKCHAIN"].map((item, index) => (
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
    ))}
  </div>
);
const TracksPage: React.FC<{ trackShow: boolean }> = ({ trackShow }) => {
  const tracks = [
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
    "Logistics",
    "Ecommerce",
    "Dating App",
    "Pickup & Delivery",
    "Concierge Services",
    "Real Estate",
  ];

  return (
    <div className="pt-[10vh] flex flex-col items-center justify-center min-h-screen px-4 md:px-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-thin mb-6 bg-gradient-to-r from-rose-500 via-sky-500 to-green-500 animate-border bg-clip-text text-transparent"
      >
        Our On Demand Industries
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-xl font-thin text-center mb-16 max-w-3xl bg-gradient-to-r from-rose-500 via-sky-500 to-green-500 animate-border bg-clip-text text-transparent"
      >
        We specialize in building cutting-edge solutions across various
        industries. Our expertise allows us to create innovative applications
        tailored to your specific needs.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tracks.map((track, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            className="bg-white/10 rounded-lg p-6 hover:bg-gradient-to-r from-yellow-800 via-indigo-800 to-purple-800 animate-border transition-all cursor-pointer"
          >
            <h3 className="text-xl font-thin text-neutral-300">{track}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-xs bg-black text-neutral-600 py-8 px-4 md:px-20">
      <p>&copy; {currentYear} Algabay Private Limited. All rights reserved.</p>
      <p className="mt-2">Phone: +91 8116300272 | Email: info@algabay.com</p>
    </footer>
  );
};
export default Landing;
