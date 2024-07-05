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
interface ProductIconsProps {
  productShow: boolean;
  setProductShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Landing: React.FC = () => {
  const [productShow, setProductShow] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-white h-screen overflow-x-hidden">
      <Header
        productShow={productShow}
        setProductShow={setProductShow}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <GradientBorder />
      <section>
        <ProductsPage
          productShow={productShow}
          setProductShow={setProductShow}
        />
      </section>
      <section>
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
    <div className="relative h-full bg-white/50 backdrop-filter backdrop-blur-md">
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
    <div className="font-light text-neutral-800 text-xl">Algabay</div>
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
  <div className="hidden md:flex gap-10 items-center text-base font-light text-black">
    <MenuDropdown
      title="What we build"
      isOpen={productShow}
      onClick={() => {
        setProductShow(!productShow);
        setTimeout(() => {
          setProductShow(false);
        }, 5000);
      }}
    />
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

const GradientBorder: React.FC = () => (
  <div className="w-full h-2 mt-[9vh] fixed">
    <div className="w-full h-full animate-border  bg-gradient-to-r from-purple-500 via-sky-500 to-green-500 blur-lg animate-spread"></div>
  </div>
);

const ProductsPage: React.FC<{
  productShow: boolean;
  setProductShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ productShow, setProductShow }) => (
  <div className="pt-[10vh] flex flex-col items-center justify-center h-screen px-4 md:px-0">
    <HeroSection productShow={productShow} />
    <ProductIcons productShow={productShow} setProductShow={setProductShow} />
  </div>
);

const HeroSection: React.FC<{ productShow: boolean }> = ({ productShow }) => (
  <div
    className={`p-10 transition-transform cursor-pointer duration-1000 ${
      productShow ? "scale-75 opacity-60" : "scale-110"
    }`}
  >
    <h1 className="text-4xl md:text-[3.4rem] font-extralight text-center md:text-left text-black">
      The Startup for Startups
    </h1>
    <p className="font-extralight text-sm md:text-xl font-lexend text-center md:text-left mt-4 text-black">
      We make ideas into realities, with specialize in app development, website
      development, software development and blockchain.
    </p>
    <CallToActionButton />
  </div>
);

const CallToActionButton: React.FC = () => (
  <div
    onClick={() => window.open("https://wa.me/8116300272", "_blank")}
    className="my-6 md:my-10 flex items-center justify-center md:justify-start gap-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 bg-black text-white md:text-2xl w-full md:w-fit px-4 py-2 md:py-1 font-extralight"
  >
    <div className="text-sm md:text-2xl">Let's Build Your Idea</div>
    <ArrowRightAltIcon sx={{ fontSize: { xs: 24, md: 30 } }} />
  </div>
);

const ProductIcons: React.FC<ProductIconsProps> = ({
  productShow,
  setProductShow,
}) => (
  <div
    onClick={() => {
      setProductShow(!productShow);
      setTimeout(() => {
        setProductShow(false);
      }, 5000);
    }}
    className={`transition-transform cursor-pointer duration-1000 flex flex-wrap justify-center md:justify-evenly w-full md:w-[80%] text-white font-light ${
      productShow ? "scale-125 " : "scale-75 opacity-60"
    }`}
  >
    {["WEBSITE", "UI UX", "AI", "APP", "BLOCKCHAIN"].map((item, index) => (
      <div
        key={index}
        className="text-black flex flex-col gap-2 justify-center items-center m-4 md:m-0"
      >
        <img
          src={`/blackTheme/${item.toLowerCase()}.png`}
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
    { image: "food-delivery.png", title: "Food Delivery" },
    { image: "taxi.png", title: "Taxi & Transportation" },
    { image: "education.png", title: "Education" },
    { image: "grocery.png", title: "Grocery Delivery" },
    { image: "beauty.png", title: "Beauty & Salon" },
    { image: "fitness.png", title: "Fitness" },
    { image: "rental.png", title: "Rental" },
    { image: "consultation.png", title: "Consultation App" },
    { image: "ecommerce.png", title: "E-commerce" },
    { image: "home-service.png", title: "Home Service" },
    { image: "healthcare.png", title: "Healthcare" },
    { image: "freelancer.png", title: "Freelancer" },
    { image: "social-media.png", title: "Social Media App" },
    { image: "dating.png", title: "Dating App" },
    { image: "pickup-delivery.png", title: "Pickup & Delivery" },
    { image: "real-estate.png", title: "Real Estate" },
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
      className="flex flex-col items-center justify-center px-4 md:px-20 text-white"
    >
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-extralight mb-6 bg-gradient-to-r from-purple-600 via-sky-600 to-green-600 animate-border bg-clip-text text-transparent"
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
        className="text-base md:text-xl font-extralight text-center mb-16 max-w-3xl bg-gradient-to-r from-purple-600 via-sky-600 to-green-600 animate-border bg-clip-text text-transparent"
      >
        We specialize in building cutting-edge solutions across various
        industries. Our expertise allows us to create innovative applications
        tailored to your specific needs.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
            className="bg-black rounded-lg p-4 md:p-6 hover:bg-gradient-to-r from-orange-500 via-indigo-500 to-purple-500 animate-border transition-all cursor-pointer flex flex-col items-center"
          >
            <img
              src={`/industries/${track.image}`}
              alt={track.title}
              className="w-10 h-10 mb-4 object-contain opacity-80"
            />
            <h3 className="text-lg md:text-xl font-extralight text-white text-center">
              {track.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center text-center text-xs bg-white text-neutral-600 py-8 px-4 md:px-20">
      <div className="w-fit">
        <div className="w-full h-1 animate-border mt-20 mb-5  bg-gradient-to-r from-purple-500 via-sky-500 to-green-500 blur-md"></div>
        <p className="mt-2">Contact: +91 8116300272 | info@algabay.com</p>
        <p>
          &copy; {currentYear} Algabay Private Limited. All rights reserved.
        </p>
        <div className="w-full h-1 animate-border my-5  bg-gradient-to-r from-purple-500 via-sky-500 to-green-500 blur-md"></div>
      </div>
    </footer>
  );
};
export default Landing;
