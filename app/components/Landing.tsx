"use client";
import React, { useEffect, useRef, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, useAnimation } from "framer-motion";

interface HeaderProps {
  productShow: boolean;
  setProductShow: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Landing: React.FC = () => {
  const [productShow, setProductShow] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Header
        productShow={productShow}
        setProductShow={setProductShow}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <section className="h-screen">
        <ProductsPage productShow={productShow} />
      </section>
      <section className="min-h-screen">
        <TracksPage />
      </section>
      <Footer />
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({
  productShow,
  setProductShow,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => (
  <header className="fixed top-0 left-0 right-0 h-[10vh] z-50 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-sky-500 to-green-500 animate-gradient-background opacity-30"></div>
    <div className="relative h-full bg-black/50 backdrop-filter backdrop-blur-md">
      <div className="flex justify-between items-center h-full px-4 md:px-5">
        <Logo />
        <MobileMenuIcon
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <DesktopMenu
          productShow={productShow}
          setProductShow={setProductShow}
        />
      </div>
    </div>
  </header>
);

const Logo: React.FC = () => (
  <div className="flex gap-2 items-center transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110">
    <img src="/logo.png" className="h-8 md:h-10" alt="logo" />
    <div className="font-extralight text-white font-lexend text-xl">
      algabay
    </div>
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
> = ({ productShow, setProductShow }) => (
  <div className="hidden md:flex gap-10 items-center text-base font-light text-white">
    <MenuDropdown
      title="What we build"
      isOpen={productShow}
      onClick={() => {
        setProductShow(!productShow);
      }}
    />
    <ContactButton />
  </div>
);

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
    className="text-base bg-white text-black px-4 transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110"
    onClick={() => (window.location.href = "https://wa.me/8116300272")}
  >
    Contact us
  </div>
);

const GradientBorder: React.FC = () => (
  <div className="w-full h-1 absolute bottom-0 left-0 right-0">
    <div className="w-full h-full animate-border rounded-full bg-gradient-to-r from-purple-500 via-sky-500 to-green-500 blur-md animate-spread"></div>
  </div>
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
const TracksPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        } else {
          setIsVisible(false);
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div
      ref={ref}
      className="pt-[10vh] flex flex-col items-center justify-center min-h-screen px-4 md:px-20 text-white"
    >
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-thin mb-6 bg-gradient-to-r from-purple-500 via-sky-500 to-green-500 animate-border bg-clip-text text-transparent"
      >
        Our On Demand Industries
      </motion.h2>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-xl font-thin text-center mb-16 max-w-3xl bg-gradient-to-r from-purple-500 via-sky-500 to-green-500 animate-border bg-clip-text text-transparent"
      >
        We specialize in building cutting-edge solutions across various
        industries. Our expertise allows us to create innovative applications
        tailored to your specific needs.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tracks.map((track, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={{
              visible: (i) => ({
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2 * i, duration: 0.5 },
              }),
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="bg-white/10 rounded-lg p-6 hover:bg-gradient-to-r from-orange-800 via-indigo-800 to-purple-800 animate-border transition-all cursor-pointer"
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
      <p className="mt-2">Contact: +91 8116300272 | info@algabay.com</p>
      <p>&copy; {currentYear} Algabay Private Limited. All rights reserved.</p>
    </footer>
  );
};
export default Landing;
